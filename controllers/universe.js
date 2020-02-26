const express = require("express");

const universeApi = require("../models/universe.js");

const universeRouter = express.Router();

universeRouter.get("/", (req, res) => {
  universeApi
    .getUniverses()
    .then(allUniverses => {
      res.json(allUniverses);
    })
    .catch(error => {
      console.log("Failed to retrieve all Universes");
      console.log(error);
      res.send(error);
    });
});
universeRouter.get("/:id", (req, res) => {
  universeApi
    .getUniverseById(req.params.id)
    .then(singleUniverse => {
      res.json(singleUniverse);
    })
    .catch(error => {
      console.log("Failed to retrieve universe by Id");
      console.log(error);
      res.send(error);
    });
});
universeRouter.post("/", (req, res) => {
  universeApi
    .createUniverse(req.body)
    .then(universeCreated => {
      res.json(universeCreated);
    })
    .catch(error => {
      console.log("Failed to create Universe");
      console.log(error);
      res.send(error);
    });
});
universeRouter.delete("/:id", (req, res) => {
  universeApi
    .deleteUniverse(req.params.id)
    .then(() => {
      res.send("Universe was deleted");
    })
    .catch(error => {
      console.log("Failed to delete universe");
      console.log(error);
      res.send(error);
    });
});
universeRouter.put("/:id", (req, res) => {
  universeApi
    .updateUniverse(req.params.id, req.body)
    .then(updatedUniverse => {
      res.json(updatedUniverse);
    })
    .catch(error => {
      console.log("Failed to update universe");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  universeRouter
};
