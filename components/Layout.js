import Head from 'next/head';
import Sidepanel from './Sidepanel';

const Layout = (props) => {
    
    return (
        <div className="row bg">
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
                <script src="https://kit.fontawesome.com/0eb4df6af5.js" crossOrigin="anonymous"></script>
            </Head>
            <Sidepanel />
            <div className="col-md-9">
                <div className="container cont">
                    {props.children}
                </div>
            </div>
            <style jsx global>{`
        body{
            overflow-x: hidden;
            margin: 0;
            padding: 0;
        }
        .bg{
            background-color: #1e2227;
            overflow-x: hidden;
            color: #fff;
            /*display: flex;*/
        }
        .cont{
			max-height: 100vh;
			overflow-y: scroll;
			padding: 1em 1em 2em 0em;
		}
		.container::-webkit-scrollbar { width: 0 !important }
      `}</style>
        </div>
    )
    
}

export default Layout;