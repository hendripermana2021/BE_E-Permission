"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tbl_reqs",
      [
        {
          student_id: 1,
          created_by: 1,
          start_permission: new Date(),
          end_permission: new Date(),
          cpi_result: "",
          commented: "Sakit karena pulang",
          permission_status: 0,
          val_go_by: "",
          val_back_by: "",
          id_calculated: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 2,
          created_by: 1,
          start_permission: new Date(),
          end_permission: new Date(),
          cpi_result: "",
          commented: "Sakit karena pulang",
          permission_status: 0,
          val_go_by: "",
          val_back_by: "",
          id_calculated: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 3,
          created_by: 1,

          start_permission: new Date(),
          end_permission: new Date(),
          cpi_result: "",
          commented: "Sakit karena pulang",
          permission_status: 0,
          val_go_by: "",
          val_back_by: "",
          id_calculated: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 4,
          created_by: 1,

          start_permission: new Date(),
          end_permission: new Date(),
          cpi_result: "",
          commented: "Sakit karena pulang",
          permission_status: 0,
          val_go_by: "",
          val_back_by: "",
          id_calculated: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 5,
          created_by: 1,

          start_permission: new Date(),
          end_permission: new Date(),
          cpi_result: "",
          commented: "Sakit karena pulang",
          permission_status: 0,
          val_go_by: "",
          val_back_by: "",
          id_calculated: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 6,
          created_by: 1,

          start_permission: new Date(),
          end_permission: new Date(),
          cpi_result: "",
          commented: "Sakit karena pulang",
          permission_status: 0,
          val_go_by: "",
          val_back_by: "",
          id_calculated: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 7,
          created_by: 1,

          start_permission: new Date(),
          end_permission: new Date(),
          cpi_result: "",
          commented: "Sakit karena pulang",
          permission_status: 0,
          val_go_by: "",
          val_back_by: "",
          id_calculated: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 8,
          created_by: 1,

          start_permission: new Date(),
          end_permission: new Date(),
          cpi_result: "",
          commented: "Sakit karena pulang",
          permission_status: 0,
          val_go_by: "",
          val_back_by: "",
          id_calculated: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 9,
          created_by: 1,

          start_permission: new Date(),
          end_permission: new Date(),
          cpi_result: "",
          commented: "Sakit karena pulang",
          permission_status: 0,
          val_go_by: "",
          val_back_by: "",
          id_calculated: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          student_id: 10,
          created_by: 1,

          start_permission: new Date(),
          end_permission: new Date(),
          cpi_result: "",
          commented: "Sakit karena pulang",
          permission_status: 0,
          val_go_by: "",
          val_back_by: "",
          id_calculated: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tbl_reqs", null, {});
  },
};
