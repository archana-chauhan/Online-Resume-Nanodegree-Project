var bio={
    "name" : "Archana Chauhan",
    "role" : "Web Developer",
    "welcomeMessage":"I'm pursuing B.Tech in Final year from University of Delhi. I'm self-motivated and observer too.I'm doing the Front End Web development Nanodegree Course from Udacity. I'm familliar with responsive websites. Currently I'm working on my own project Which is fully responsive website.",
    "bioPic" : "images/pic1.jpg",
    "contacts" : {
        "mobile" : "8826565292",
        "email" : "archana.chauhan1626@gmail.com",
        "location" : "Delhi-NCR",
        "twitter" : "archana-chauhan",
        "github" : "archana-chauhan@github.com",
        "linkedin" : "archana-chauhan",
        "skype" : "archana-chauhan123"
    },
    "skills" : ["Artist","Teaching","Designer","Motivator"]

}


var work={
    "jobs":[
    {
        "employer":"Kushal Sharma",
        "title":"Web Developer",
        "location":"US",
        "dates":"2016-present",
        "description":"I'm Front-End Web developer."
    },
    {
        "employer":"Kunal",
        "title":"Android Developer",
        "location":"Delhi",
        "dates":"2016-present",
        "description":"Here I'm engineer and built some new tools for free."
    }]
};

var projects={
    "project":[
    {
        "title":"Portfolio Webpage",
        "dates":"5th December,2016",
        "description":"This is a static webpage which is responsive by using Bootstrap framework",
        "url":"https://github.com/archana-chauhan/Portfolio-Website",
        "bioPic":["images/1.png","images/2.png","images/3.png","images/4.png"]


    },
    {
        "title":"Online Resume Webpage",
        "dates":"30th December,2016",
        "description":"This is a dynamic webpage by using JavaScript.",
        "url":"https://github.com/archana-chauhan/Online-Resume-webpage",
        "bioPic":["images/pic1.jpg","images/fry.jpg"]
    },
    {
        "title":"Weather Application",
        "dates":"19th November,2016",
        "description":"This is an android application which shares the information about current weather.",
        "bioPic":["images/1.png","images/2.png","images/3.png","images/4.png"]

    }]
};




var education={
    "schools": [{
            "name": "K.C.S School",
            "location": "Sector-49,Noida",
            "degree":"Matriculation",
            "majors":"Science",

            "dates": "2009 - 2011",
            "url":"archana.chauhan@linkendin.com"

        }, {
            "name": "K.V.",
            "location": "Sector-110",
            "degree":"Intermediate",
            "majors":"Science",

            "dates": "2011 - 2013",
            "url":"archana.chauhan@linkedin.com"
        }, {
            "name": "Maharaja Agrasen College",
            "location": "Delhi-110067",
            "degree":"B.Tech",
            "dates": "2013 - 2017",
            "url":"https://mac.du.ac.in",
            "majors" : "Computer Science"

        }],
    "onlineClasses": [{
            "title": "Front-End Web Development Nanodegree Course",
            "school":"Udacity",
            "dates": "2016 - present",
            "url":"https://in.udacity.com"

        }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").append(formattedRole);
    var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
    $("#header").append(formattedImage);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedMessage);

    $("#header").append(HTMLskillsStart);

    for(skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#skills").append(formattedSkills);
    };

    for(contact in bio.contacts) {
        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
        var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedSkype);
    };
};

education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
    }
};

work.display = function() {
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
    }
};

projects.display = function(){
    for(item in projects.project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
        for (image in projects.project[item].bioPic) {
            var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].bioPic[image]);
            $(".project-entry:last").append(formattedImage);
        };
    }
};

function inName(name){
    //console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

    return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);