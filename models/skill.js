const skills = [
    {id: 0, skill: 'Dancing', category: 'arts', have: false},
    {id: 1, skill: 'Gymnastics', category: 'sports', have: true},
    {id: 2, skill: 'Music', category: 'arts', have: true},
    {id: 3, skill: 'Math', category: 'STEM', have: true},
    {id: 4, skill: 'Lying', category: 'social', have: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
	// Use the Array.prototype.find iterator method
	return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    
    skill.have = false;
    skills.push(skill);
  }

  function deleteOne(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
	  skills.splice(idx, 1);
  }