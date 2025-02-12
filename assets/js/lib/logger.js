const Logger = {
  debug: (message, object = "", style = "") => {
    console.debug(
      `%cDEBUG%c${message}`,
      Logger.genStyle("cyan"),
      style,
      object
    );
  },
  info: (message, object = "", style = "") => {
    console.info(
      `%cINFO%c${message}`,
      Logger.genStyle("white"),
      style,
      object
    );
  },
  warn: (message, object = "", style = "") => {
    console.warn(
      `%cWARN%c${message}`,
      Logger.genStyle("yellow"),
      style,
      object
    );
  },
  error: (message, object = "", style = "") => {
    console.error(
      `%cERROR%c${message}`,
      Logger.genStyle("red", "white"),
      style,
      object
    );
  },
  genStyle: (bg, text = "black") => {
    return `color: ${text}; background: ${bg}; padding: 1px 3px; border-radius: 2px; margin-right: 5px;`;
  },
};

window.logger = Logger;
