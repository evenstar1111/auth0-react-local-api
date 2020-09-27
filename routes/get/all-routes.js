const data = require("../../data");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json(data);
  });

  app.get("/:type", (req, res) => {
    const { type } = req.params;

    res.json(data[type]);
  });

  app.get("/:type/:id", (req, res) => {
    const { type, id } = req.params;

    res.json(data[type][id - 1]);
  })
}