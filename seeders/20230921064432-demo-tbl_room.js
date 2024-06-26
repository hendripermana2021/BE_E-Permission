"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tbl_rooms",
      [
        {
          id_ustadz: 1,
          nameroom: "Abu Bakar 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_ustadz: 2,
          nameroom: "Abu Bakar 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_ustadz: 3,
          nameroom: "Abu Bakar 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tbl_rooms", null, {});
  },
};
