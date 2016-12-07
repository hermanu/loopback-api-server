
const log = require('debug')('main');
const chalk = require('chalk');

class Loging {
  constructor() {
    this.log = log;
  }

  info(message) {
    this.log(`${chalk.bold.cyan.underline.blue('Info')}${chalk.bold.cyan(':')} ${chalk.cyan(message)}`);
  }
}

module.exports = new Loging();
