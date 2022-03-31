// This is where we'll import our model to perform db logic
const res = require('express/lib/response');
const Skill = require('../models/skill');
// model by convention is always singular and capitalized (Not just JS, like every language)

module.exports = {
	index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
	// shorthand for 
	// index: index
}

function index(req, res){

	res.render('skills/index', {
		skills: Skill.getAll()
	})
}

function show(req, res){
console.log(req.params, "<-req.params in show function")
	res.render('skills/show', {
        skillNum: req.params.id,
		skill: Skill.getOne(req.params.id)
	})
}

function newSkill(req, res){
        res.render('skills/new')
}

function create(req, res){
    console.log(req.body, "<-req.body, contents of the forms")
    Skill.create(req.body)
    res.redirect('/skills');
}

function deleteSkill(req, res){
    console.log(req.params.id, ' < - this id the id of the todo we are deleting')
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}
