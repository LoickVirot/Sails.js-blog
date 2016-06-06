/**
 * HomeContoller
 *
 * @description :: Server-side logic for managing home
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {

    // Post.create({
    //   title: 'This is the second article',
    //   img: 'http://lorempicsum.com/futurama/700/200/3',
    //   content: 'lorem ipsum dolor sit amet..',
    //   tags: 'beta'}).exec(function(err, created){
    //
    //   });

    Post.find({limit: 1}).exec(function(err, records){
      if (err) {
        sails.log.warn("Error : GetPosts failed");
      }
      else {
        console.dir(records);
        return res.view('home', {data: records });
      }
      return res.view('home');
    });
  }
};
