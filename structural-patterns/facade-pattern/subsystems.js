export class Lights {
    turnOn() {
        console.log("The lights are ON.");
    }

    turnOff() {
        console.log("The lights are OFF.");
    }
}

export class TV {
    turnOn() {
        console.log("The TV is ON.");
    }

    turnOff() {
        console.log("The TV is OFF.");
    }

    setChannel(channel) {
        console.log(`Channel set to ${channel}.`);
    }
}

export class AirConditioner {
    turnOn() {
        console.log("The Air Conditioner is ON.");
    }

    turnOff() {
        console.log("The Air Conditioner is OFF.");
    }

    setTemperature(temp) {
        console.log(`Temperature set to ${temp} degrees.`);
    }
}
