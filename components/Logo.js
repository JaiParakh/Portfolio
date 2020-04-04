const Logo = () => (
    <div>
        <div className="main-logo">
            <h2 className="logo">JAI PARAKH</h2>
            <p className="logo logo-desc">Fullstack Developer | Mentor | Jedi</p>
        </div>
        <style jsx>{`
            .main-logo{
                padding: 1em 2em 0em 2em;
                border: 2px solid #fff;
                border-right: none;
            }
            .logo{
                font-size: 3.4rem;
                font-family: 'Abril Fatface';
                border-bottom: 2px solid #fff;
                padding-bottom: 0.5rem;
            }
            .logo-desc{
                font-size: 1.2rem;
                text-align: center;
                padding-top: 0.5rem;
                border-bottom: none;
            }
        `}</style>
    </div>
)

export default Logo;