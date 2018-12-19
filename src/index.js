module.exports = (tag, noRepeat) => {
  return (err, msg) => {
    var stderr;
    var logger;
    try {
      stderr = console.error;
    } catch (e) {
      stderr = false;
    }

    try {
      logger = ABC.News.Logger.log;
    } catch (e) {
      logger = false;
    }

    if (stderr) stderr(err);
    if (logger) logger(tag, err.name + ": " + err.message, err, !!noRepeat);
  };
};
