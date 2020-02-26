const express = require("express");

const comicApi = require("../models/comic.js");

const comicRouter = express.Router();

comicRouter.get("/", (req, res) => {
  comicApi
    .getComics()
    .then(allComics => {
      res.json(allComics);
    })
    .catch(error => {
      console.log("Failed to retrieve all Comics");
      console.log(error);
      res.send(error);
    });
});
comicRouter.get("/:id", (req, res) => {
  comicApi
    .getComicById(req.params.id)
    .then(singleComic => {
      res.json(singleComic);
    })
    .catch(error => {
      console.log("Failed to retrieve comic by Id");
      console.log(error);
      res.send(error);
    });
});
comicRouter.post("/", (req, res) => {
  comicApi
    .createComic(req.body)
    .then(comicCreated => {
      res.json(comicCreated);
    })
    .catch(error => {
      console.log("Failed to create Comic");
      console.log(error);
      res.send(error);
    });
});
comicRouter.delete("/:id", (req, res) => {
  comicApi
    .deleteComic(req.params.id)
    .then(() => {
      res.send("Comic was deleted");
    })
    .catch(error => {
      console.log("Failed to delete comic");
      console.log(error);
      res.send(error);
    });
});
comicRouter.put("/:id", (req, res) => {
  comicApi
    .updateComic(req.params.id, req.body)
    .then(updatedComic => {
      res.json(updatedComic);
    })
    .catch(error => {
      console.log("Failed to update comic");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  comicRouter
};
