import Head from 'next/head';
import Sidepanel from './Sidepanel';

const Layout = (props) => {
    
    return (
        <div className="row bg">
            <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
            </Head>
            <Sidepanel />
            <div className="col-md-9">
                {props.children}
            </div>
            <style jsx>{`
        .bg{
            background-color: #1e2227;
            height: 100vh;
            color: #fff;
            display: flex;
        }
      `}</style>
        </div>
    )
    
}

export default Layout;