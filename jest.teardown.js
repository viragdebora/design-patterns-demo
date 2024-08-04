import { config } from "dotenv";
import { AuthenticationManager } from "./creational-patterns/singleton-pattern/authentication-manager.js";

config();

export default (globalConfig, projectConfig) => {
    console.log("globalConfig.testPathPattern: ",globalConfig.testPathPattern);
    console.log(projectConfig.cache);

    if (process.env.RUN_TEARDOWN_SINGLETON !== 'false') {
        const auth = AuthenticationManager.getInstance();
        (async function () {
            await auth.deleteSession();
        })();
    }
};
