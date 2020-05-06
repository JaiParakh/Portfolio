import Link from 'next/link';

const BlogList = (props) => {
    return(
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-3">
                <img src={`/images/${props.img}`} className="card-img" alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="card-body mt-3">
                        <Link href={props.link}>
                            <a><h5 className="card-title logo">{props.title}</h5></a>
                        </Link>
                        <p className="card-text">{props.body}</p>
                        <p className="card-text"><small className="text-muted">{props.date}</small></p>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .card{
            margin: 1em;
            background-color: #1e2227;
            border: none;
            color: #fff;
            border-bottom: 2px solid #fff;
            border-radius: 0;
            padding: 1em 0em 1em 0em;
        }
        a:hover{
            text-decoration: none;
        }
        .logo{
            font-size: 2rem !important;
            font-family: 'Abril Fatface' !important;
            color: #fff;
            text-decoration: none;
        }
        .card-body{
            padding: 0;
            padding-left: 2em;
        }
      `}</style>
        </div>
    )
}

export default BlogList;