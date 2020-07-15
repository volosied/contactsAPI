const express = require("express");
// const helmet = require("helmet")
// const morgan = require("morgan")

const contactsRouter = require("./contacts/contacts-router.js");

const app = express();

//Middleware
app.use(express.json());
// app.use(helmet())
// app.use(morgan("dev"))

//Routes
app.use("/api/contacts", contactsRouter);

module.exports = app;