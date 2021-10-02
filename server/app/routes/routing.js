module.exports = app => {
    const tables = require("../controllers/crudcontrol.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tables.create);
  
    // Retrieve all Tutorials
    router.get("/", tables.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tables.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tables.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tables.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tables.delete);
  
    // Create a new Tutorial
    router.delete("/", tables.deleteAll);
  
    app.use('/api/tables', router);
  };