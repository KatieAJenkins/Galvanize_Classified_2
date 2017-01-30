'use strict';

module.exports = {

  development: {
    client: 'pg',
    // connection: 'postgres://localhost/classifieds_dev'
    connection: {
      database: process.env.DATABASE_URL || 'classifieds_dev'
    }
  },

  test: {
    client: 'pg',
    // connection: 'postgres://localhost/classifieds_test'
    connection: {
      database: process.env.DATABASE_URL || 'classifieds_test'
   }
 },

   production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
