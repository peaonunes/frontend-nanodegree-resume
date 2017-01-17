//$("#main").append("Rafael Nunes");

var email = "peaonunes@udacity.com";

var name = "Peao Nunes";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Computer Scientist";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["wow", "such", "much"];

var bio = {
    "name" :  name,
    "role" :  role,
    "contacts" :  {
        "mobile" :  "1231231",
        "email" :  email,
        "github" :  "peaonunes",
        "twitter" :  "peaonunes",
        "location" :  "Recife"
    },
    "bioPic" :  "images/fry.jpg",
    "welcomeMessage" : "Hello guys.",
    "skills" :  skills
}

$("#main").append(bio.name);

var work = {};
work.position = "Bla";
work.employer = "None";
work.years = 0;

var education = {};
education["name"] = "High School";
education["years"] = "2001-1210";
education["city"] = "Recife, PE, Brazil";
/*
work
work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.

projects
projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images.

bio
bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings. The contacts object should contain a mobile number, email address, github username, twitter handle and location. The twitter property is optional.

education
education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings.
*/
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
