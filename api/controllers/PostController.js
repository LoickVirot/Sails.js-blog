/**
 * PostContoller
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {

    Post.findOne({id: req.param('id')}).exec(function(err, record){
      if (err) {
        return res.view('404');
      }
      if (!record) {
        return res.view('404');
      }
      else {
        return res.view('post', {data: record });
      }
    });
  }
};
