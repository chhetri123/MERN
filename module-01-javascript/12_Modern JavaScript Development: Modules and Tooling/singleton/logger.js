class Logger {
  constructor() {
    if (Logger.instance == null) {
      this.logs = [];
      Logger.instance = this;
    }

    return Logger.instance;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`[${timestamp}] ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} logs`);
  }
}

const logger = new Logger();
Object.freeze(logger);

export default logger;
