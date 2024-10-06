export class UserProfile {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.age = null;
        this.phoneNumber = '';
        this.address = '';
    }

    showProfile() {
        console.log(`User Profile:
        Name: ${this.firstName} ${this.lastName}
        Age: ${this.age || 'N/A'}
        Phone: ${this.phoneNumber || 'N/A'}
        Address: ${this.address || 'N/A'}`);
    }
}