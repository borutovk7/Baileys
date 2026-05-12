import colors from 'colors';

const PREFIX = "KAORUKO BOT";

export const sayLog = (message) => {
  console.log(colors.bold.bgCyan.white(`[${PREFIX}  | TALK]`), message);
};

export const inputLog = (message) => {
  console.log(colors.bold.bgMagenta.white(`[${PREFIX}  | INPUT]`), message);
};

export const infoLog = (message) => {
  console.log(colors.bold.bgBlue.white(`[${PREFIX}  | INFO]`), message);
};

export const successLog = (message) => {
  console.log(colors.bold.bgGreen.white(`[${PREFIX}  | SUCCESS]`), message);
};

export const errorLog = (message) => {
  console.log(colors.bold.bgRed.white(`[${PREFIX}  | ERROR]`), message);
};

export const warningLog = (message) => {
  console.log(colors.bold.bgYellow.black(`[${PREFIX}  | WARNING]`), message);
};

export const debugLog = (message) => {
  console.log(colors.bold.bgBlack.white(`[${PREFIX}  | DEBUG]`), colors.gray(message));
};

export const commandLog = (message) => {
  console.log(colors.bold.bgWhite.black(`[${PREFIX}  | COMMAND]`), message);
};

export const connectLog = (message) => {
  console.log(colors.bold.bgGreen.white(`[${PREFIX}  | CONNECT]`), colors.green(message));
};

export const disconnectLog = (message) => {
  console.log(colors.bold.bgRed.white(`[${PREFIX}  | DISCONNECT]`), colors.red(message));
};

export const loadLog = (message) => {
  console.log(colors.bold.bgCyan.white(`[${PREFIX}  | LOAD]`), colors.cyan(message));
};

export const unloadLog = (message) => {
  console.log(colors.bold.bgYellow.black(`[${PREFIX}  | UNLOAD]`), colors.yellow(message));
};

export const apiLog = (message) => {
  console.log(colors.bold.bgMagenta.white(`[${PREFIX}  | API]`), colors.magenta(message));
};

export const dbLog = (message) => {
  console.log(colors.bold.bgBlue.white(`[${PREFIX}  | DATABASE]`), colors.blue(message));
};

export const eventLog = (message) => {
  console.log(colors.bold.bgWhite.black(`[${PREFIX}  | EVENT]`), message);
};

export const scraperLog = (message) => {
  console.log(colors.bold.bgGreen.white(`[${PREFIX}  | SCRAPER]`), colors.green(message));
};

export const cacheLog = (message) => {
  console.log(colors.bold.bgYellow.black(`[${PREFIX}  | CACHE]`), colors.yellow(message));
};

export const authLog = (message) => {
  console.log(colors.bold.bgRed.white(`[${PREFIX}  | AUTH]`), message);
};

export const rateLimitLog = (message) => {
  console.log(colors.bold.bgYellow.black(`[${PREFIX}  | RATELIMIT]`), colors.yellow(message));
};

export const startLog = (message) => {
  console.log(colors.bold.bgGreen.white(`[${PREFIX}  | START]`), colors.bold.green(message));
};

export const shutdownLog = (message) => {
  console.log(colors.bold.bgRed.white(`[${PREFIX}  | SHUTDOWN]`), colors.bold.red(message));
};
