import { AuthenticationManager } from "./authentication-manager.js";

const auth = new AuthenticationManager();
(async function() {
    await auth.deleteSession();
})();