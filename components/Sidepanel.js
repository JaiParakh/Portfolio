import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faMediumM, faGithub,faMandalorian } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from './Link';

class Sidepanel extends React.Component {
    render(){
        return (
            <div className="col-md-3">
                <Logo />
                <div className="side-nav">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link activeClassName='active' href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName='active' href="/about">
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName='active' href="/projects">
                                <a className="nav-link">Projects</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName='active' href="/blog">
                                <a className="nav-link">Blog</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClassName='active' href="/experience">
                                <a className="nav-link">Experience</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="contact">
                        <div className="row">
                            <div className="icon">
                                <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=contact.jaiparakh@gmail.com&tf=1">
                                    <a>
                                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                    </a>
                                </Link>
                            </div>
                            <div className="icon">
                                <Link href="https://www.linkedin.com/in/jai-parakh-5626b4178/">
                                    <a>
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                    </a>
                                </Link>
                            </div>
                            <div className="icon">
                                <Link href="https://github.com/JaiParakh">
                                    <a>
                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                    </a>
                                </Link>
                            </div>
                            <div className="icon">
                                <Link href="https://medium.com/@parakh.js">
                                    <a>
                                        <FontAwesomeIcon icon={faMediumM} size="2x" />
                                    </a>
                                </Link>
                            </div>
                            <div className="icon">
                                <Link href="https://twitter.com/parakh_js">
                                    <a>
                                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            
            
            <style jsx>{`
            .active{
                border-left: 2px solid #fff;
                /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6);*/
            }
 
            .contact{
                border-left: 2px solid #fff;
                border-bottom: 2px solid #fff;
            }
            .row{
                margin-left: 2em;
                margin-bottom: 2em;
            }
            .icon{
                margin-left: 1em;
                margin-top: 2em;
                margin-right: 2em;
            }
            .nav{
                border-bottom: 2px solid #fff;
                border-left: 2px solid #fff;
                padding: 1em 2em 1em 2em;
            }
            /*.side-nav{
                text-align: center;
            }*/
            .nav-item{
                font-size: 1.5em;
                color: #fff !important;
                text-decoration: none;
            }
            li, a{
                color: #fff !important;
                text-decoration: none;
            }
            .col-md-3{
                margin-left: 0px !important;
                border-right: 2px solid #fff;
                padding-right: 0px !important;
            }
        `}</style>
            </div>
        );
    }
}

export default Sidepanel;