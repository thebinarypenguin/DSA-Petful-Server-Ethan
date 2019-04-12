
const checkAdopter = function (req, res, next) {

  const authorization = req.get('Authorization');

  // If no Authorization header
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization not provided' });
  }

  const token = authorization.slice(7);
  const activeAdopter = req.app.get('adopters').first.value;

  // IF user isn't active
  if (token !== activeAdopter) {
    return res.status(400).json({ error: 'It\'s not your turn' });
  }

  req.app.set('adopterId', activeAdopter);
  next();  // not neccessary i think
};

module.exports = {
  checkAdopter,
};
