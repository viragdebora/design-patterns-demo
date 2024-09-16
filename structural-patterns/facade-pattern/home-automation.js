import { AirConditioner, Lights, TV } from "./subsystems.js";

export class HomeAutomationFacade {
    constructor() {
        this.lights = new Lights();
        this.tv = new TV();
        this.airConditioner = new AirConditioner();
    }

    movieMode() {
        console.log("Setting up Movie Mode...");
        this.lights.turnOff();
        this.tv.turnOn();
        this.tv.setChannel(7);
        this.airConditioner.turnOn();
        this.airConditioner.setTemperature(22);
    }

    partyMode() {
        console.log("Setting up Party Mode...");
        this.lights.turnOn();
        this.tv.turnOn();
        this.tv.setChannel(12);
        this.airConditioner.turnOn();
        this.airConditioner.setTemperature(24);
    }

    leaveHome() {
        console.log("Leaving home. Shutting everything down...");
        this.lights.turnOff();
        this.tv.turnOff();
        this.airConditioner.turnOff();
    }
}
