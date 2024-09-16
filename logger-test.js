import { LoggerFactory } from './creational-patterns/singleton-pattern/logger.js';
import { PrefixedLogger } from './structural-patterns/decorator-pattern/prefixedLogger.js';

class AuthService {
    constructor(logger) {
        this.logger = logger;
    }

    login(username, password) {
        this.logger.info(`Login attempt for user: ${username}`);

        if (username === 'admin' && password === 'password123') {
            this.logger.info(`User ${username} successfully logged in.`);
        } else {
            this.logger.warn(`Failed login attempt for user: ${username}`);
        }
    }
}

// Example Usage
const base = LoggerFactory.getInstance();
const prefixed = new PrefixedLogger(base, 'AuthService');
const authService = new AuthService(prefixed);
authService.login('admin', 'password123');
authService.login('user', 'wrongpassword');

/*
[2024-09-15T07:52:42.847Z] [INFO]: [AuthService] Login attempt for user: admin
[2024-09-15T07:52:42.849Z] [INFO]: [AuthService] User admin successfully logged in.
[2024-09-15T07:52:42.849Z] [INFO]: [AuthService] Login attempt for user: user
[2024-09-15T07:52:42.849Z] [WARN]: [AuthService] Failed login attempt for user: user
*/