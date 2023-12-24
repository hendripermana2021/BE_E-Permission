"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.tbl_santri = require("../models/tbl_santri.js")(sequelize, Sequelize);
db.tbl_pegawai = require("../models/tbl_pegawai.js")(sequelize, Sequelize);
db.tbl_kriteria = require("../models/tbl_kriteria.js")(sequelize, Sequelize);
db.tbl_notification = require("../models/tbl_notification.js")(
  sequelize,
  Sequelize
);
db.tbl_req = require("../models/tbl_req.js")(sequelize, Sequelize);
db.tbl_role = require("../models/tbl_role.js")(sequelize, Sequelize);
db.tbl_room = require("../models/tbl_room.js")(sequelize, Sequelize);
db.tbl_subkriteria = require("../models/tbl_subkriteria.js")(
  sequelize,
  Sequelize
);
db.tbl_cpi = require("../models/tbl_cpi.js")(sequelize, Sequelize);

db.tbl_req.hasMany(db.tbl_cpi, {
  as: "cpi_data",
  foreignKey: "id_order",
});

// db.tbl_cpi.hasMany(db.tbl_kriteria, {
//   as: "kriteria",
//   foreignKey: "id",
// });

db.tbl_cpi.hasMany(db.tbl_kriteria, {
  foreignKey: "id",
  as: "kriteria",
  sourceKey: "id_kriteria",
});

// db.tbl_subkriteria.hasMany(db.tbl_cpi, {
//   as: "subkriteria",
//   foreignKey: "id_kriteria",
// });

db.tbl_cpi.hasMany(db.tbl_subkriteria, {
  foreignKey: "id",
  as: "subkriteria",
  sourceKey: "id_subkriteria",
});

// db.tbl_santri.hasOne(db.tbl_room,{
//   foreignKey: "id",
//   as : 
// })

module.exports = db;
