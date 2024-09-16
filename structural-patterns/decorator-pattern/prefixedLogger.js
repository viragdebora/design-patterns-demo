// decorator pattern

export class PrefixedLogger {
    constructor(baseLogger, pattern) {
        this.baseLogger = baseLogger;
        this.pattern = pattern;
    }

    log(level, message) {
        this.baseLogger.log(level, `[${this.pattern}] ${message}`);
    }

    info(message) {
        this.baseLogger.info(`[${this.pattern}] ${message}`);
    }

    warn(message) {
        this.baseLogger.warn(`[${this.pattern}] ${message}`);
    }

    error(message) {
        this.baseLogger.error(`[${this.pattern}] ${message}`);
    }
}