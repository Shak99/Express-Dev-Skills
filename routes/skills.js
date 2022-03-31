var express = require('express');
var router = express.Router();
const skillController = require('../controllers/skills')

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('Lets dive into some skills');
});*/

router.get('/', skillController.index)
router.get('/new', skillController.new)
router.get('/:id', skillController.show);
router.post('/', skillController.create)
router.delete('/:id', skillController.delete)

/*
router.get('/sports', function(req, res, next) {
  res.send('different sports, same skills');
});
*/

module.exports = router;
