module.exports = (tag, noRepeat) => {
  return (err, msg) => {
    console && console.error && console.error(err);
    ABC &&
      ABC.News &&
      ABC.News.Logger &&
      ABC.News.Logger.log &&
      ABC.News.Logger.log(tag, err.name + ': ' + err.message, err, !!noRepeat);
  };
};
