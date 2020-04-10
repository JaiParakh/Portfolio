import Navbar from './Navbar';
import Logo from './Logo';

class Sidepanel extends React.Component {
    render(){
        return (
            <div className="col-md-3">
                    <Logo />
                    <Navbar />
                
            <style jsx>{`
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