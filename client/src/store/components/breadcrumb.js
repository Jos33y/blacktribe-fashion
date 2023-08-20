import "./component.css";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title, breadImg }) => {
    return (
        <>
            <div className="bread-header">
                <div className="bread-header-bg">
                    <img
                        src={breadImg}
                        alt="the beast within"
                        className="img-fluid"
                        loading="lazy"
                    />
                </div>

                <div className="bread-width">
                    <div className="bread-header-text">
                        <h4> {title}  </h4>
                        <div className="breadcrumb">
                            <ul>
                                <li> <Link to="/" className="breadcrumb-link" >Home <i className="fa-solid fa-angle-right"></i> </Link></li>
                                <li> <span className="breadcrumb-link"> {title} </span> </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default BreadCrumb