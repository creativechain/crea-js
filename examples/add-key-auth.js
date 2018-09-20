const crea = require('../lib');

/* Generate private active WIF */
const username = process.env.CREA_USERNAME;
const password = process.env.CREA_PASSWORD;
const privActiveWif = crea.auth.toWif(username, password, 'active');

/** Add posting key auth */
crea.broadcast.addKeyAuth({
    signingKey: privActiveWif,
    username,
    authorizedKey: 'CREA88CPfhCmeEzCnvC1Cjc3DNd1DTjkMcmihih8SSxmm4LBqRq5Y9',
    role: 'posting',
  },
  (err, result) => {
    console.log(err, result);
  }
);
