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
          status_req: true,
          date_start: "2023-09-20",
          time_start: "17:05:25",
          date_end: "2023-09-21",
          time_end: "17:05:25",
          cpi_result: null,
          commented: "Sakit karena pulang",
          validation: false,
          validation_by: null,
        },
        {
          student_id: 2,
          created_by: 1,
          status_req: true,
          date_start: "2023-09-20",
          time_start: "17:05:25",
          date_end: "2023-09-21",
          time_end: "17:05:25",
          cpi_result: null,
          commented: "Sakit karena pulang",
          validation: false,
          validation_by: null,
        },
        {
          student_id: 3,
          created_by: 1,
          status_req: true,
          date_start: "2023-09-20",
          time_start: "17:05:25",
          date_end: "2023-09-21",
          time_end: "17:05:25",
          cpi_result: null,
          commented: "Sakit karena pulang",
          validation: false,
          validation_by: null,
        },
        {
          student_id: 4,
          created_by: 1,
          status_req: true,
          date_start: "2023-09-20",
          time_start: "17:05:25",
          date_end: "2023-09-21",
          time_end: "17:05:25",
          cpi_result: null,
          commented: "Sakit karena pulang",
          validation: false,
          validation_by: null,
        },
        {
          student_id: 5,
          created_by: 1,
          status_req: true,
          date_start: "2023-09-20",
          time_start: "17:05:25",
          date_end: "2023-09-21",
          time_end: "17:05:25",
          cpi_result: null,
          commented: "Sakit karena pulang",
          validation: false,
          validation_by: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tbl_reqs", null, {});
  },
};
