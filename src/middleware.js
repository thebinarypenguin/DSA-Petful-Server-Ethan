
const checkAdopter = function (req, res, next) {

  const authorization = req.get('Authorization');

  // If no Authorization header
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization not provided' });
  }

  const token = authorization.slice(7);

  let activeAdopter = req.app.get('adopters').first;

  // Quick Hack
  if (activeAdopter) {
    activeAdopter = activeAdopter.value;
  }

  // IF user isn't active
  if (token !== activeAdopter) {
    return res.status(400).json({ error: 'It\'s not your turn' });
  }

  req.app.set('adopterId', token);
  next();
};

const checkAuth = function (req, res, next) {

  const authorization = req.get('Authorization');

  // If no Authorization header
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization not provided' });
  }

  const token = authorization.slice(7);

  let activeAdopter = req.app.get('adopters').first;

  // Quick Hack
  if (activeAdopter) {
    activeAdopter = activeAdopter.value;
  }

  req.app.set('adopterId', token);
  next();

};

module.exports = {
  checkAdopter,
  checkAuth,
};
