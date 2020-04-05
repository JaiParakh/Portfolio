import React from 'react'
import Layout from './../components/Layout';
import ProjectList from './../components/ProjectList';

const projects = [
	/*{
		name: "Rex",
		description: ["An all in one CLI Application that can: ", "Parse the mail body for dates and then add a Google Calendar Event", "Parse Medium Daily Digest Mails and open blog links in the browser.", "Upload, download and share files on Google Drive", "Maintain a record of all applied internships/jobs", "Manage Todos"], 
		technologies: ["Node.js", "Javascript", "GMAIL API","Google Drive API","Google Calendar API."],
		link: "https://github.com/JaiParakh/Rex",
		img: ""
	},*/
	{
		name: "Cura (Google Build For Digital India)",
		description: ["Cura is an application that lets users add the food items they are allergic to and predicts the ingredient/item responsible, using Apriori algorithm.","My team was amongst the 61 teams selected across India from 3.3k+ teams."],
		technologies: ["Javascript", "React", "Node.js", "Python", "Firebase ML Kit", "Firebase"],
		link: "https://github.com/JaiParakh/Cura",
		img: "Cura-3.jpg"
	},
	{
		name: "Study Jamm",
		description: ["A MERN Stack application that lets users ﬁnd mentors in their vicinity.","It Detects the user's location and plots all tutors within the specified radius.","It was up and running for 6 days, during which it had 60 users registered on the platform and around 8 active users on the day of project evaluation."],
		technologies: ["MongoDB", "React", "Node.js", "Express", "Openlayers Map"],
		link: "https://github.com/JaiParakh/Study-Jamm",
		img: "Study-Jamm-2.png"
	}
]

export default class Projects extends React.Component {
    
    render() {
        return (
            <Layout>
				{
					projects.map((p) => {
						return <ProjectList name={p.name} body={p.description} technologies={p.technologies} link={p.link} img={p.img} />
					})
				}
            </Layout>
        )
    }
}