import { Link } from "react-router-dom";

const AuthHeader = () => {
    return (
        <>
            <div className="auth-header">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">

                        BlackTribe Fashion
                    </Link>

                </div>
            </div>
        </>
    )
}

export default AuthHeader; 