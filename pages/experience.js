import React from 'react'
import ReactDOM from 'react-dom';
import Timeline from 'react-image-timeline';
import Layout from './../components/Layout';

const events = [{
    date: new Date(2019, 6, 1),
    text: "Created an LMS based website, on which instructors can create their course, quizzes, assignments, and grading system.",
    title: "Fullstack Intern at Techgroomers",
    imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true",
},
{
    date: new Date(2019, 9, 27),
    text: "Organized and Mentored several workshops on web development.",
    title: "Technical Coordinator at DSC JIIT-128",
    imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true",
},
{
    date: new Date(2019, 10, 1),
    text: "Mentored and lead Application Development Track of Google Cloud Month in my college",
    title: "Facilitator of Google Cloud Month Application Development Track",
    imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true",
}]

const CustomHeader = () => {

    
    return <div className="custom-footer">
    </div>;
};

export default class Experiece extends React.Component {
    
    render() {
        return (
            <Layout>
                <div className="container">
				    <Timeline events={events} customComponents={{footer: CustomHeader}}/>
                </div>
                <style jsx>{`
				.container{
                    max-height: 100vh;
					overflow-y: scroll;
                    padding: 2em 4em 1em 4em;
				}
				.container::-webkit-scrollbar { width: 0 !important }
                /*.rt-footer-container{
                    visibility: hidden !important;
                    max-height: 0px !important
                }*/
			`}</style>
            </Layout>
        )
    }
}