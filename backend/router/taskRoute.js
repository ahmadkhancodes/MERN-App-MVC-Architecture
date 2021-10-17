const { createTask } = require("../controller/task");
// const { postValidator } = require("../validators/postValidator");
const express = require("express");
const router = express.Router();

// router.get("/", getPosts);
router.post("/create", createTask);

module.exports = router;
