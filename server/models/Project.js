const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId, //specifying It is an ObjectId Type
    ref: "Client", //It has a relationship with the client model
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
