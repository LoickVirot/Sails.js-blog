/**
 * Post.js
 *
 * @description :: Model that manage posts
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mysqlServer',
  attributes: {
      title: {type: 'string', required: 'true' },
      img: {type: 'string', required: 'true'},
      content: {type: 'text', required: 'true'},
      tags: {type: 'string'}
  }
};
