import { config } from 'dotenv';

config();

export class AuthenticationManager {
    #token;
    #apiUrl;

    static instance;

    constructor() {
        if (TokenManager.instance) {
            throw new Error("TokenManager is a singleton");
        }
        this.#apiUrl = process.env.API_URL;
        TokenManager.instance = this;
    }

    async validateKey() {
        const url = `${this.#apiUrl}/authentication`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.SECRET_TOKEN}`
            }
        };

        const response = await fetch(url, options);

        return response['success'];
    }

    async requestToken() {
        if (!(await this.validateKey())) {
            throw new Error('There is something wrong this the secret key!');
        }

        if (this.#token) {
            return;
        }

        const url = `${this.#apiUrl}/authentication/token/new`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.SECRET_TOKEN}`
            }
        };

        const response = await fetch(url, options);
        this.#token = response['request_token'];
    }

    getToken() {
        return this.#token;
    }

    async allowPermissionForUser() {
        await fetch(`${process.env.BASE_URL}/authenticate/${this.#token}/allow`);
    }

    async createSession() {
        if (this.sessionId) {
            return;
        }

        const url = `${this.#apiUrl}/authentication/session/new`;
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${this.#token}`
            }
        };

        const response = await fetch(url, options);
        this.sessionId = response['session_id'];
    }

    async deleteSession() {
        if (!this.sessionId) {
            return;
        }

        const url = `${this.#apiUrl}/authentication/session`;
        const options = {
            method: 'DELETE',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${this.#token}`
            }
        };

        await fetch(url, options);
    }
}
