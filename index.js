const chalk = require('chalk');

// Define the colors in an enum-like object
const Colors = {
    BLACK: 'black',
    RED: 'red',
    GREEN: 'green',
    YELLOW: 'yellow',
    BLUE: 'blue',
    MAGENTA: 'magenta',
    CYAN: 'cyan',
    WHITE: 'white',
    gray: 'gray',
    black: 'black',
    red: 'red',
    green: 'green',
    yellow: 'yellow',
    BLUE: 'blue',
    magenta: 'magenta',
    cyan: 'cyan',
    white: 'white',
    gray: 'gray',
};

// Freeze the Colors object to make it immutable
Object.freeze(Colors);

/**
 * Logs a message to the console in the specified color.
 * If the color is not found, defaults to white.
 * If the message contains the word "error", it always prints in red.
 * @param {string} message - The message to be logged.
 * @param {string} color - The color in which to log the message.
 */
const colorLogger = (message, color) => {
    if (message.toLowerCase().includes('error')) {
        console.log(chalk.red(message));
        return;
    }
    const colorFunc = chalk[Colors[color]] || chalk.white;

    console.log(colorFunc(message));
};

module.exports = { colorLogger, Colors };
