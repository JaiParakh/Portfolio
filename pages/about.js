import React from 'react'
import Layout from './../components/Layout';

const skills = ["Javascript", "React", "Node.js", "Next.js", "Express", "MongoDB", "Python", "HTML5", "Google Cloud Platform", "CSS3", "PHP", "Wordpress"]

export default class About extends React.Component {
    
    render() {
        return (
            <Layout>
                <div className="about">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid pic" src="/images/demo.jpg" />
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
                </div>
                <style jsx>{`
                .about{
                    height: 91vh;
                }
                    .skills{
                        padding: 2em 2em 2em 3em;
                    }
                    .logo{
                        margin-bottom: 1em;
                        font-size: 2rem !important;
                        font-family: 'Abril Fatface' !important;
                        color: #fff;
                        text-decoration: none;
                        font-family: 'Abril Fatface' !important;
                    }
                    .row{
                        margin: 1em;
                        text-align: justify;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
                    }
                    .pic{
                        padding-right: 2em;
                        margin: 2em 0em 2em 2em;
                        border-right: 2px solid #fff;
                        width: 100%;
                    }
                    .badge{
                        padding: 0.8em;
                        margin: 0.4em 2em 1em 0em !important;
                        font-size: 1rem;
                    }
                `}</style>
            </Layout>
        )
    }
}