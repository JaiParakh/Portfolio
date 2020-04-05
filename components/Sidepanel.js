import Logo from './Logo'

class Sidepanel extends React.Component {
    render(){
        return (
            <div className="col-md-3">
                <Logo />
                <div className="side-nav">
                    This is the side panel.
                </div>
                
            
            
            <style jsx>{`
            .col-md-3{
                border-right: 2px solid #fff;
                padding-right: 0px !important;
            }
        `}</style>
            </div>
        );
    }
}

export default Sidepanel;