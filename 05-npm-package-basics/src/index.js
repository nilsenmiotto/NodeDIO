import chalk from 'chalk';
import logSymbols from 'log-symbols';


console.log(chalk.green('Hello, chalk!'), chalk.blue.bgCyan('This is a blue message.'));
console.log(chalk.red.bold('This is a red message.'));

console.log(logSymbols.success, chalk.green('Operation completed successfully.'));
console.log(logSymbols.error, chalk.red('An error occurred.'));
console.log(logSymbols.warning, chalk.yellow('This is a warning message.'));