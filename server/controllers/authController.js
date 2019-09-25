const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { user_name, user_password, user_email } = req.body;
    const db = req.app.get("db");
    const { session } = req;

    const userFound = await db.auth.check_user_email({ user_email });

    if (userFound[0]) return res.status(409).send("Email already exists");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user_password, salt);

    const createdUser = await db.auth.register_user({
      user_name,
      user_email,
      user_password: hash
    });

    session.user = {
      id: createdUser[0].user_id,
      user_name: createdUser[0].user_name
    };
    res.status(200).send(session.user);
  },

  login: async (req, res) => {
    const { user_name, user_password } = req.body;
    const db = req.app.get("db");
    const { session } = req;
    const userFound = await db.auth.check_username({ user_name });

    if (!userFound[0])
      return res.status(401).send("That user does not exist, please register");

    const authenticated = bcrypt.compareSync(
      user_password,
      userFound[0].user_password
    );

    if (authenticated) {
      session.user = {
        id: userFound[0].user_id,
        user_name: userFound[0].user_name
      };
      res.status(200).send(session.user);
    } else {
      return res.status(401).send("Incorrect username or password");
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  }
};
