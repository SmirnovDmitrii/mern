const crudRoutes = require("./crud_routes");

module.exports = function (app, db) {
  crudRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};
