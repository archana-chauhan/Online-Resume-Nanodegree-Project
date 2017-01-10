var bio = {
    "name": "Archana Chauhan",
    "role": "Web Developer",
    "welcomeMessage": "I'm pursuing B.Tech in Final year from University of Delhi. I'm self-motivated and observer too.I'm doing the Front End Web development Nanodegree Course from Udacity. I'm familliar with responsive websites. Currently I'm working on my own project Which is fully responsive website.",
    "biopic": "images/pic1.jpg",
    "contacts": {
        "mobile": "9999999999",
        "email": "archanachauhan920@gmail.com",
        "location": "Delhi-NCR",
        "github": "archana-chauhan@github.com",
        "skype": "archana-chauhan123"
    },
    "skills": ["Artist", "Teaching", "Designer", "Motivator"]
};

var work = {
    "jobs": [{
        "employer": "Kushal Sharma",
        "title": "Web Developer",
        "location": "US",
        "dates": "2016-present",
        "description": "I'm Front-End Web developer."
    }, {
        "employer": "Kunal",
        "title": "Android Developer",
        "location": "Delhi",
        "dates": "2016-present",
        "description": "Here I'm engineer and built some new tools for free."
    }]
};

var projects = {
    "project": [{
            "title": "Portfolio Webpage",
            "dates": "5th December,2016",
            "description": "This is a static webpage which is responsive by using Bootstrap framework",
            "images": ["images/1.jpg", "images/2.jpg", "images/3.jpeg", "images/4.jpg"]
        }, {
            "title": "Online Resume Webpage",
            "dates": "30th December,2016",
            "description": "This is a dynamic webpage by using JavaScript.",
            "images": ["images/pic1.jpg", "images/fry.jpg"]
        }, {
            "title": "Weather Application",
            "dates": "19th November,2016",
            "description": "This is an android application which shares the information about current weather.",
            "images": ["images/bg.jpg"]

        }]
};

var education = {
    "schools": [{
        "name": "K.C.S School",
        "location": "Sector-49,Noida",
        "degree": "Matriculation",
        "majors": ["Science"],
        "dates": "2009 - 2011",
        "url": "archana.chauhan@linkendin.com"
    }, {
        "name": "K.V.",
        "location": "Sector-110",
        "degree": "Intermediate",
        "majors": ["Science","Mathematics"],
        "dates": "2011 - 2013",
        "url": "archana.chauhan@linkedin.com"
    }, {
        "name": "Maharaja Agrasen College",
        "location": "Delhi-110067",
        "degree": "B.Tech",
        "dates": "2013 - 2017",
        "url": "https://mac.du.ac.in",
        "majors": ["Computer Science"]
    }],
    "onlineClasses": [{
        "title": "Front-End Web Development Nanodegree Course",
        "school": "Udacity",
        "dates": "2016 - present",
        "url": "https://in.udacity.com"
    }]
};

bio.display = function() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", "skype").replace("%data%", bio.contacts.skype));
    $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        $("#skills").append(HTMLskills.replace("%data%", skill));
    });

    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLcontactGeneric.replace("%contact%", "skype").replace("%data%", bio.contacts.skype));
    $("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

};

bio.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineClasses.forEach(function(item) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", item.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", item.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", item.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", item.url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
    });
};

education.display();

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLoc = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedLoc, formattedDates, formattedDescription);
    });
};

work.display();

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    projects.project.forEach(function(item) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", item.title);
        var formattedDates = HTMLprojectDates.replace("%data%", item.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", item.description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        item.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};

projects.display();

function inName(name) {
    //console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
    return newName;
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);