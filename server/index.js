//requires
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const AuthCtrl = require("./controllers/authController");

const app = express();

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env;

//session set up
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);

//massive setup

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("database up in here");
});

//endpoints for auth/login
app.post("/auth/register", AuthCtrl.register);
app.post("/auth/login", AuthCtrl.login);
app.get("/auth/logout", AuthCtrl.logout);
app.get("/auth/currentUser", AuthCtrl.currentUser);

app.listen(SERVER_PORT, () =>
  console.log(`${SERVER_PORT} points to griddindor`)
);
