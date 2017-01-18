function removeTags(_html) {
    var newHTML = _html;
    newHTML = newHTML.split("<").join("");
    newHTML = newHTML.split(">").join("");
    return newHTML;
}

var bio = {
    "name" :  "Rafael Nunes",
    "role" :  "Computer Scientist",
    "contacts" :  {
        "mobile" :  "1231231",
        "email" :  "peaonunes@gmail.com",
        "github" :  "peaonunes",
        "twitter" :  "peaonunes",
        "location" :  "Recife"
    },
    "bioPic" :  "images/fry.jpg",
    "welcomeMessage" : "Hello guys.",
    "skills" :  ["bread","hype","space"]
}

var work = {
    "jobs" : [
        {
            "employer":"NASA",
            "title":"Master of Universe",
            "location":"New York, NY",
            "dates":"2010-2016",
            "description":"Role the Universe and Cook breads at NASA."
        },
        {
            "employer":"PAO",
            "title":"PADEIRO",
            "location":"Recife, Brazil",
            "dates":"2001-2010",
            "description":"Fazer os pães."
        }
    ]
};

var education = {
    "schools" : [
        {
            "name":"UFPE",
            "city":"Recife, Brazil",
            "degree":"BsC",
            "majors":["Computer Science"],
            "dates":2016,
            "url":"https://www.ufpe.br"
        }
    ],
    "onlineCourses" : [
        {
            "title":"Design Thinking",
            "school":"Virginia College",
            "dates":2016,
            "url":"www.google.com"
        }
    ]
};

education.display = function () {
    var schools = this.schools;

    for (index in schools){
        $("#education").append(HTMLschoolStart);

        var school = schools[index];

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);

        $(".education-entry:last").append(formattedName+formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", school.city);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);

        $(".education-entry:last").append("<br>");
        $(".education-entry:last").append("<br>");
    }

    var onlineCourses = this.onlineCourses;
    $("#education").append(HTMLonlineClasses);

    for (index in onlineCourses){
        $("#education").append(HTMLschoolStart);
        var course = onlineCourses[index];

        var formattedDegree = HTMLonlineTitle.replace("%data%", course.title);
        var formattedDates = HTMLonlineSchool.replace("%data%", course.school);
        var formattedLocation = HTMLonlineDates.replace("%data%", course.dates);
        var formattedMajor = HTMLonlineURL.replace("%data%", course.url);

        $(".education-entry:last").append(formattedDegree+formattedDates+formattedLocation+formattedMajor);
    }

}

var projects = {
    "projects" : [
        {
            "title":"Spacial Bread",
            "dates":"2010-2016",
            "description":"Breads for spaceships!",
            "images":["images/fry.jpg","images/fry.jpg"]
        },
        {
            "title":"Pao de queijo",
            "dates":"2001-2010",
            "description":"tradicional pao de queijo",
            "images":["images/fry.jpg"]
        }
    ]
}

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedLocation);

    var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(formattedbioPic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    if(bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        var formattedSkill = null;
        for (var i = 0; i < bio.skills.length; i++) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    } else {
        console.log("hello");
    }

    $("#main").append(internationalizeButton);
    $("#mapDiv").append(googleMap);
    initializeMap();
}

var national = true;

function inName() {
    if(national){
        $("#name").text(secondUpperCase(bio.name));
        national = false;
    } else {
        $("#name").text(bio.name);
        national = true;
    }
}

function secondUpperCase(name) {
    var parts = name.split(" ");
    var newName = parts[0]+" "+parts[1].toUpperCase();
    return newName;
}

work.display = function () {
    var jobs = work.jobs;

    for (index in jobs){
        $("#workExperience").append(HTMLworkStart);
        var job = jobs[index];
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDates+formattedLocation+formattedDescription);
    }
}

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

projects.display = function () {
    var projects = this.projects;

    for (index in projects){
        $("#projects").append(HTMLprojectStart);
        var project = projects[index];
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedTitle+formattedDates+formattedDescription);

        for (var i = 0; i < project.images.length; i++) {
            var image = project.images[i];
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        }
    }
}

work.display();
education.display();
bio.display();
projects.display();
