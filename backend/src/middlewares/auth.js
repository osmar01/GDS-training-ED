
const jwt = require('jsonwebtoken');
const authentication = require('../config/authentication');

function auth(request, response, next) {

  const authorization = request.headers.authorization;

  if (authorization === null || authorization === undefined) {
    return response.status(400).json({ message: 'Token not informed' });
  }

  const token = authorization.split(' ')[1];

  try {
    
    jwt.verify(token, authentication.secreteKey);

    next()
  } catch (error) {
    return response.status(401).json({ message: 'Not authorized' });
  }
}

module.exports = auth