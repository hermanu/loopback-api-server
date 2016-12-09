
const log = console.log;
const chalk = require('chalk');

class Logger {
  constructor() {
    this.log = log;
  }

  info(message) {
    this.log(`${chalk.bold.cyan.underline.blue('Info')}${chalk.bold.cyan(':')} ${chalk.cyan(message)}`);
  }

  error(message) {
    this.log(`${chalk.bold.red.underline.red('Error')}${chalk.bold.red(':')} ${chalk.red(message)}`);
  }

  debug(message) {
    this.log(`${chalk.bold.green.underline.green('Debug')}${chalk.bold.green(':')} ${chalk.green(message)}`);
  }

}

module.exports = new Logger();
