import Link from 'next/link';

const ProjectList = (props) => {
    return(
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`/images/${props.img}`} className="card-img row" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body mt-3">
                        <h4 className="card-title">{props.name}</h4>
                        {
                            props.name === 'Rex' ? (<p>An all in one CLI Application that can: </p>) : (<div></div>)
                        }
                        <ul className="card-text">{props.body.map(b => {
                            return(
                                <li>{b}</li>
                            )
                        })}</ul>
                        <div className="tech">
                            {props.technologies.map(t => {
                                return(
                                    <span className="badge badge-dark">{t}</span>
                                )
                            })}
                        </div>
                        <div className="links">
                            <Link href={props.link}>
                                <a className="btn btn-code">View Code</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .btn-code{
                    background-color: #1b243f;
                    color: #fff !important;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
                }
                .btn-site{
                    background-color: #282c34;
                    color: #61dafb!important;
                }
                .btn{
                    padding: 0.5em 1em 0.5em 1em;
                    margin: 1em 2em 0em 1em;
                }
                .col-md-4{
                    padding: 1em 0em 0em 1em;
                }
                img{
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
                }
                .badge{
                    margin: 0em 1em 1em 1em !important;
                    font-size: 1rem;
                }
                .card{
                    margin: 1em;
                    background-color: #1e2227;
                    border: none;
                    color: #fff;
                    border-radius: 0;
                    padding: 1em 0em 1em 1em;
                    border-bottom: 2px solid #fff;
                    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
                    margin-bottom: 1em;
                }
                a:hover{
                    text-decoration: none;
                }
                .card-body{
                    text-align: justify;
                    padding: 0em 2em 1em 2em;
                }
                li{
                    margin-bottom: 0.2em;
                }
                
                @media only screen and (max-width: 450px){
                    .card-body{
                        padding: 0em !important;
                    }
                    .card{
                        margin-bottom: 0.5em !important;
                    }
                }
      `}</style>
        </div>
    )
}

export default ProjectList;