import React from 'react'
import Layout from './../components/Layout';

const skills = ["Javascript", "React", "Node.js", "Next.js", "Express", "MongoDB", "Python", "C++", "Web3.js", "Solidity", "Ethereum", "PHP", "React Native", "CSS3", "HTML5", "Google Cloud Platform", "G Suite APIs"]

export default class About extends React.Component {
    
    render() {
        return (
            <Layout>
                <div className="about">
                    <div className="row cust">
                        <div className="col-md-6">
                            <img className="img-fluid pic" src="/images/demo.jpg" alt="Profile Pic" />
                        </div>
                        <div className="col-md-6 skills">
                            <h5 className="card-title logo">My Skills</h5>
                            {
                                skills.map(s => {
                                    return(
                                        <span className="badge badge-dark">{s}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="intro container">
                        <p>I am Jai, 21-year-old currently pursuing Bachelor's degree in Computer Science from Jaypee Institute of Information Technology. 
                        I am a Full stack and Blockchain developer. I code mostly in Javascript and blog about the technologies I use in my projects. Besides that, I am a 
                        core team member at DSC JIIT Noida, where I mentor students on web development.</p>

                        <p>In my free time, I play GTA Online and Star Wars Battlefront-2. I love cycling, swimming, and trekking.</p>
                    </div>
                </div>
                <style jsx>{`
                    .intro{
                        padding: 1em 2em 2em 2em;
                        font-size: 1.4em;
                        font-weight: 100;
                        font-family: 'Abril Fatface';
                        border-top: 2px solid #fff;
                        /*margin-top: 2em;*/
                        /*font-family: 'Avenir', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
                    */
                    }
                    .about{
                        height: 91vh;
                    }
                    .skills{
                        padding: 2em 2em 2em 3em;
                    }

                    @media only screen and (max-width: 450px){
                        .skills{
                            padding: 2em 0em 0em 0em !important;
                            text-align: justify;
                        }
                        .intro{
                            padding: 1em 0em 0em 0em !important;
                            text-align: justify;
                        }
                    }
                    .logo{
                        margin-bottom: 1em;
                        font-size: 2rem !important;
                        font-family: 'Abril Fatface' !important;
                        color: #fff;
                        text-decoration: none;
                        font-family: 'Abril Fatface' !important;
                    }
                    .cust{
                        margin: 1em 1em 0em 1em;
                        text-align: justify;
                    }
                    .pic{
                        margin-right: 2em;
                        /*margin: 2em 0em 2em 2em;*/
                        /*border-right: 2px solid #fff;
                        */
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
                        width: 100%;
                    }
                    .badge{
                        padding: 0.8em;
                        margin: 0.4em 2em 1em 0em !important;
                        font-size: 1rem;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
                    }
                `}</style>
            </Layout>
        )
    }
}