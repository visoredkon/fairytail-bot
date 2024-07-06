import chalk from "chalk";

/**
 * Logs a message to the console with a specified style.
 * @param message - The message to log.
 * @param {'info' | 'err' | 'warn' | 'done'} style - The style of the log message. Can be one of 'info', 'err', 'warn', or 'done'.
 */
export const log: Console["log"] = (message: string, style: string) => {
    const styles: Record<string, { prefix?: string; logFunction: (message: string) => void }> = {
        info: { prefix: chalk.blue("[INFO]"), logFunction: console.log },
        err: { prefix: chalk.red("[ERROR]"), logFunction: console.error },
        warn: { prefix: chalk.yellow("[WARNING]"), logFunction: console.warn },
        done: { prefix: chalk.green("[SUCCESS]"), logFunction: console.log },
    };

    const hasStyle = Object.hasOwn(styles, style);

    const selectedStyle: { prefix?: string; logFunction: (message: string) => void } = hasStyle
        ? styles[style]
        : { logFunction: console.log };

    if (typeof selectedStyle.prefix === "string") {
        selectedStyle.logFunction(`${selectedStyle.prefix} ${message}`);
    } else {
        selectedStyle.logFunction(message);
    }
};
