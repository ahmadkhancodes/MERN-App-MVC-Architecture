const Task = require("../models/task");

// exports.getTasks = (req, res) => {
//   const posts = Post.find()
//     .select("_id title description")
//     .then((posts) => {
//       res
//         .json({
//           posts,
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     });
// };
exports.createTask = (req, res) => {
  const task = new Task(req.body);
  task.save().then((result) => {
    res.json({
      task: result,
    });
  });
};
