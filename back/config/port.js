module.exports = (val = process.env.PORT || 3000) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return -1;
  }
  if (port >= 0) {
    return port;
  }
  return -1;
};
