"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tbl_subkriteria",
      [
        {
          name_sub: "Penyakit Bawaan (Penyakit Lain)",
          id_kriteria: 1,
          value: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Tipus",
          id_kriteria: 1,
          value: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Patah Tulang/ Keseleo/ Nyeri pada persendian",
          id_kriteria: 1,
          value: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Scabies / Gatal-gatal",
          id_kriteria: 1,
          value: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Demam",
          id_kriteria: 1,
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Terluka",
          id_kriteria: 1,
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Batuk",
          id_kriteria: 1,
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Tidak Dapat Ditangani",
          id_kriteria: 2,
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Telah Ditangani",
          id_kriteria: 2,
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Belum Ditangani",
          id_kriteria: 2,
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: ">= 3 Hari",
          id_kriteria: 3,
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "2 Hari",
          id_kriteria: 3,
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name_sub: "1 hari",
          id_kriteria: 3,
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "1 Hari",
          id_kriteria: 4,
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "2 Hari",
          id_kriteria: 4,
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: ">= 3 Hari",
          id_kriteria: 4,
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Orang Tua",
          id_kriteria: 5,
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Saudara Ibu/ Bapak",
          id_kriteria: 5,
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Saudara Jauh/ Teman Orang Tua/ Tetangga",
          id_kriteria: 5,
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Sangat Baik",
          id_kriteria: 6,
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Baik",
          id_kriteria: 6,
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_sub: "Kurang Baik",
          id_kriteria: 6,
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tbl_subkriteria", null, {});
  },
};
