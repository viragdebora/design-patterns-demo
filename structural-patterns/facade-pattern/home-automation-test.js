import { HomeAutomationFacade } from "./home-automation.js";

const homeAutomation = new HomeAutomationFacade();

homeAutomation.movieMode();
/*
Output:
Setting up Movie Mode...
The lights are OFF.
The TV is ON.
Channel set to 7.
The Air Conditioner is ON.
Temperature set to 22 degrees.
*/

homeAutomation.leaveHome();
/*
Output:
Leaving home. Shutting everything down...
The lights are OFF.
The TV is OFF.
The Air Conditioner is OFF.
*/
