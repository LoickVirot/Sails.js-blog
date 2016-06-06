/**
 * HomeContoller
 *
 * @description :: Server-side logic for managing home
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {

    Post.find({limit: 2, sort: 'createdAt desc'}).exec(function(err, records){
      if (err) {
        sails.log.warn("Error : GetPosts failed");
      }
      else {
        return res.view('home', {data: records });
      }
    });
  }
};
