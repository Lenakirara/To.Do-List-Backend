const validateTask = async (req, res, next) => {
  const { title, currentStatus } = req.body;
  if (!title || !currentStatus) {
    return res.status(400).json({ message: 'Invalid entries. Try again. '});
  }
  next();
};

module.exports = {
  validateTask,
};
