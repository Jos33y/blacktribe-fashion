import "../components/component.css";
import { Link } from "react-router-dom";

const DetailsBreadCrumb = ({ breadImg, prod_name, cat_name }) => {
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
                        <h4> {prod_name}  </h4>
                        <div className="breadcrumb">
                            <ul>
                                <li> <Link to="/" className="breadcrumb-link" >Home <i className="fa-solid fa-angle-right"></i> </Link></li>
                                <li> <Link to="/shop" className="breadcrumb-link" >Shop <i className="fa-solid fa-angle-right"></i> </Link></li>
                                <li> <span className="breadcrumb-link"> {cat_name} </span> </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default DetailsBreadCrumb;