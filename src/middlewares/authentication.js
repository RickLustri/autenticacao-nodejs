const session = require("express-session");

function protegerRota(request, response, next) {
  if (request.session.user) {
    next();
  } else {
    response.redirect("/login");
  }
};

module.exports = { 
  protegerRota
};