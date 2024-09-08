import chalk from 'chalk'

class Logger {
    log(level, message) {
        const timestamp = new Date().toISOString();
        let coloredLevel;

        switch (level) {
            case 'INFO':
                coloredLevel = chalk.green.bold(`[${timestamp}] [INFO]: ${message}`);
                break;
            case 'WARN':
                coloredLevel = chalk.yellow.bold(`[${timestamp}] [WARN]: ${message}`);
                break;
            case 'ERROR':
                coloredLevel = chalk.red.bold(`[${timestamp}] [ERROR]: ${message}`);
                break;
            default:
                coloredLevel = `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
        }

        console.log(coloredLevel);
    }

    info(message) {
        this.log('INFO', message);
    }

    warn(message) {
        this.log('WARN', message);
    }

    error(message) {
        this.log('ERROR', message);
    }
}

export const LoggerFactory = (function () {
    let instance;
    return {
        getInstance: () => {
            if (!instance) {
                instance = new Logger();
                instance.constructor = null;
            }
            return instance;
        }
    };
})();
