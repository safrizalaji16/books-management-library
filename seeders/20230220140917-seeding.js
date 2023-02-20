"use strict";

const { hashPassword } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Authors",
      [
        {
          name: "Tere Liye",
          email: "tereliye@gmail.com",
          password: hashPassword("tereliye"),
        },
        {
          name: "James Clear",
          email: "jamesclear@gmail.com",
          password: hashPassword("jamesclear"),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Novel",
        },
        {
          name: "Self Development",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          tittle: "Bulan",
          description: "Novel bulan",
          AuthorId: 1,
          CategoryId: 1,
        },
        {
          tittle: "Atomic Habits",
          description: "Memiliki habit yang baik",
          AuthorId: 2,
          CategoryId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Authors", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
    await queryInterface.bulkDelete("Books", null, {});
  },
};
