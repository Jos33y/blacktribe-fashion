import "../components/component.css";
import breadImg from "../assets/images/check_2.jpg";

const CheckoutBreadCrumb = ({ page }) => {
    return (
        <>

            <div className="bread-header">
                <div className="bread-header-bg">
                    <img
                        src={breadImg}
                        alt="check out section"
                        className="img-fluid"
                        loading="lazy"
                    />
                </div>

                <div className="bread-width">
                    <div className="bread-header-text">
                        <h4> {page}  </h4>
                        <div className="breadcrumb">
                            <ul>
                                <li> <span className="breadcrumb-link" >Cart <i className="fa-solid fa-angle-right"></i> </span></li>
                                <li className={`${page === 'checkout' ? ('active') : ('')}`} > <span className="breadcrumb-link"> Contact<i className="fa-solid fa-angle-right"></i> </span>  </li>
                                <li className={`${page === 'shipping' ? ('active') : ('')}`} > <span className="breadcrumb-link"> Shipping <i className="fa-solid fa-angle-right"></i> </span>  </li>
                                <li className={`${page === 'payment' ? ('active') : ('')}`} > <span className="breadcrumb-link"> Payment  <i className="fa-solid fa-angle-right"></i> </span> </li>
                                <li className={`${page === 'order confirmation' ? ('active') : ('')}`} > <span className="breadcrumb-link"> Order confirmation <i className="fa-solid fa-angle-right"></i>  </span></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default CheckoutBreadCrumb;