const express = require("express");

const creatorApi = require("../models/creator.js");

const creatorRouter = express.Router();

creatorRouter.get("/", (req, res) => {
  creatorApi
    .getCreators()
    .then(allCreators => {
      res.json(allCreators);
    })
    .catch(error => {
      console.log("Failed to retrieve all Creators");
      console.log(error);
      res.send(error);
    });
});
creatorRouter.get("/:id", (req, res) => {
  creatorApi
    .getCreatorById(req.params.id)
    .then(singleCreator => {
      res.json(singleCreator);
    })
    .catch(error => {
      console.log("Failed to retrieve creator by Id");
      console.log(error);
      res.send(error);
    });
});
creatorRouter.post("/", (req, res) => {
  creatorApi
    .createCreator(req.body)
    .then(creatorCreated => {
      res.json(creatorCreated);
    })
    .catch(error => {
      console.log("Failed to create Creator");
      console.log(error);
      res.send(error);
    });
});
creatorRouter.delete("/:id", (req, res) => {
  creatorApi
    .deleteCreator(req.params.id)
    .then(() => {
      res.send("Creator was deleted");
    })
    .catch(error => {
      console.log("Failed to delete creator");
      console.log(error);
      res.send(error);
    });
});
creatorRouter.put("/:id", (req, res) => {
  creatorApi
    .updateCreator(req.params.id, req.body)
    .then(updatedCreator => {
      res.json(updatedCreator);
    })
    .catch(error => {
      console.log("Failed to update creator");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  creatorRouter
};
