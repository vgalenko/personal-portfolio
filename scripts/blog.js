const skills = {
  "myskills": [
    {
      "skill1": "JavaScript",
      "skill2": "jQuery",
      "skill3": "HTML",
      "skill4": "CSS",
      "skill5": "RWD",
      "skill6": "AJAX",
      "skill7": "SQL",
      "skill8": "NODE.js"
    }
  ]
};

$(document).ready(function(){
  let skillsTemplate = $('#template').html();
  let compileSkillsTemplate = Handlebars.compile(skillsTemplate);
  $('.skills-list').html(compileSkillsTemplate(skills.myskills[0]));
});
