module.exports = (tag, noRepeat) => {
  return (err, msg) => {
    var stderr = (console || {}).error;
    var logger = (((ABC || {}).News || {}).Logger || {}).log;
    if (stderr) stderr(err);
    if (logger) logger(tag, err.name + ': ' + err.message, err, !!noRepeat);
  };
};
