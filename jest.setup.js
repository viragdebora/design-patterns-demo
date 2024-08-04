import { AuthenticationManager } from "./creational-patterns/singleton-pattern/authentication-manager.js";
import { config } from 'dotenv';

config();

if (process.env.RUN_SETUP_SINGLETON !== 'false') {
    const auth = AuthenticationManager.getInstance();
    (async function() {
        await auth.requestToken();
        await auth.allowPermissionForUser();
        await auth.createSession();
    })();
}