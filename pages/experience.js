import React from 'react'
import Layout from './../components/Layout';
import EventList from './../components/EventList';

const events = [{
    start_date: "9th August 2019",
    end_date: "Present",
    text: "Organized and Mentored several workshops on web development.",
    title: "Technical Coordinator at DSC JIIT-128",
    img: "dsclogo.jpg",
},
{
    start_date: "1st October 2019",
    end_date: "4th November 2019",
    text: "Mentored and lead Application Development Track of Google Cloud Month in my college",
    title: "Facilitator of Google Cloud Month Application Development Track",
    img: "studyjam.jpeg",
},
{
    start_date: "1st June 2019",
    end_date: "1st August 2019",
    text: "Created an LMS based website, on which instructors can create their course, quizzes, assignments, and grading system.",
    title: "Fullstack Intern at Techgroomers",
    img: "techgroomers.jpeg",
}]

export default class Experiece extends React.Component {
    
    render() {
        return (
            <Layout>
                {
                    events.map(e => {
                        return <EventList start_date={e.start_date} end_date={e.end_date} text={e.text} title={e.title} img={e.img} />
                    })
                }
            </Layout>
        )
    }
}