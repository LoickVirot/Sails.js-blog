/**
 * HomeContoller
 *
 * @description :: Server-side logic for managing home
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    return res.view('home', {});
  }
};
