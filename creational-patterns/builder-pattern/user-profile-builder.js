import { UserProfile } from "./user-profile.js";

export class UserProfileBuilder {
    constructor() {
        this.userProfile = new UserProfile();
    }

    setFirstName(firstName) {
        this.userProfile.firstName = firstName;
        return this;
    }

    setLastName(lastName) {
        this.userProfile.lastName = lastName;
        return this;
    }

    setAge(age) {
        this.userProfile.age = age;
        return this;
    }

    setPhoneNumber(phoneNumber) {
        this.userProfile.phoneNumber = phoneNumber;
        return this;
    }

    setAddress(address) {
        this.userProfile.address = address;
        return this;
    }

    build() {
        return this.userProfile;
    }
}