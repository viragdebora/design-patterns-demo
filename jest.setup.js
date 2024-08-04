import { AuthenticationManager } from "./creational-patterns/singleton-pattern/authentication-manager.js";

const auth = new AuthenticationManager();
(async function() {
    await auth.requestToken();
    await auth.allowPermissionForUser();
    await auth.createSession();
})();