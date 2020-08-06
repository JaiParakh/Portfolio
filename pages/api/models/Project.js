const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: Array
    },
    
})

const projects = [
	{
		name: "Cura (Google Build For Digital India)",
		description: ["Cura is an application that lets users add the food items they are allergic to and predict the ingredient/item responsible, using Apriori algorithm.","My team was amongst the 61 teams selected across India from 3.3k+ teams for the Feedback Phase."],
		technologies: ["Javascript", "React", "Node.js", "Python", "Firebase ML Kit", "Firebase"],
		link: "https://github.com/JaiParakh/Cura",
		img: "Cura.png"
	},
	{
		name: "Rex",
		description: ["Parse the mail body for dates and then add a Google Calendar Event", "Parse Medium Daily Digest Mails and open blog links in the browser.", "Upload, download and share files on Google Drive", "Maintain a record of all applied internships/jobs and Manage Todos"], 
		technologies: ["Node.js", "Javascript", "GMAIL API","Google Drive API","Google Calendar API"],
		link: "https://github.com/JaiParakh/Rex",
		img: "Rex-2.png"
	},
	{
		name: "Study Jamm",
		description: ["A MERN Stack application that lets users ﬁnd mentors in their vicinity.","It Detects the user's location and plots all tutors within the specified radius.","It was up and running for 6 days, during which it had 60 users registered on the platform and around 8 active users on the day of project evaluation."],
		technologies: ["MongoDB", "React", "Node.js", "Express", "Openlayers Map"],
		link: "https://github.com/JaiParakh/Study-Jamm",
		img: "Study-Jamm-2.png"
	},
	/*{
		name: "Coretech",
		description: ["Created an online store for Coretech."],
		technologies: ["Wordpress", "Bootstrap-4"],
		link: "https://coretech.net.in/",
		img: "Coretech-2.png"
	}*/
]