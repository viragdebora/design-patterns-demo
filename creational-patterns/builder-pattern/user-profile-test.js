import { UserProfileBuilder } from "./user-profile-builder.js";

const user1 = new UserProfileBuilder()
    .setFirstName('John')
    .setLastName('Doe')
    .setAge(30)
    .setPhoneNumber('123-456-7890')
    .setAddress('123 Main St, Cityville')
    .build();

const user2 = new UserProfileBuilder()
    .setFirstName('Jane')
    .setLastName('Smith')
    .build();

const user3 = new UserProfileBuilder()
    .setFirstName('Alice')
    .setLastName('Johnson')
    .setPhoneNumber('987-654-3210')
    .build();

user1.showProfile();
/*
Output:
User Profile:
Name: John Doe
Age: 30
Phone: 123-456-7890
Address: 123 Main St, Cityville
*/

user2.showProfile();
/*
Output:
User Profile:
Name: Jane Smith
Age: N/A
Phone: N/A
Address: N/A
*/

user3.showProfile();
/*
Output:
User Profile:
Name: Alice Johnson
Age: N/A
Phone: 987-654-3210
Address: N/A
*/