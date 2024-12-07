export const flash = (req, res, next) => {
  res.locals.flash = req.session.flash || {};
  delete req.session.flash;
  next();
};

export const setFlash = (req, type, message) => {
  if (!req.session.flash) {
    req.session.flash = {};
  }
  req.session.flash[type] = message;
};
