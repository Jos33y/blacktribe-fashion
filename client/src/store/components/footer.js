import React, { useEffect, useRef, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import "./component.css";
import { Link } from "react-router-dom";
import BlackTemp from "../assets/images/black_temp_icon.png";
import BlackText from "../assets/images/black_text.png";
import GoToTop from "./go-to-top";

const FooterNav = () => {

    const store_unique_id = 'black-tribe-fashion';
    const isMounted = useRef()
    const [storeData, setStoreData] = useState(null)

    const getStoreInfo = async () => {

        try {
            const storeRef = doc(db, 'store_info', store_unique_id)
            const storeSnap = await getDoc(storeRef)

            if (storeSnap.exists()) {
                setStoreData(storeSnap.data())
            }
        }
        catch (error) {
            console.log({ error })
        }

    }


    useEffect(() => {

        if (isMounted) {

            getStoreInfo().then();
        }
        return () => {
            isMounted.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted])

    return (
        <>
            <div className="Footer-nav">
                <div className="row">

                    {/* column section */}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="footer-about">
                            <div className="footer-img">
                                <img src={BlackTemp} alt="footer logo" className="img-fluid" />
                                <img src={BlackText} alt="footer logo" className="img-text" />
                            </div>
                        </div>


                    </div>

                    {/* column section */}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="footer-lists">
                            <ul>
                                <li> <Link className="footer-link" to="/">Home </Link></li>
                                <li> <Link className="footer-link" to="/shop">Collections </Link></li>
                                <li> <Link className="footer-link" to="/contact">Contact </Link></li>

                            </ul>
                        </div>
                    </div>

                    {/* column section */}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="footer-lists">
                            <ul>
                                <li> <Link className="footer-link" to="/track">Track Order </Link></li>
                                <li> <Link className="footer-link" to="/cart">Your Cart </Link></li>
                                <li> <Link className="footer-link" to="/checkout">Your Checkout </Link></li>
                                <li> <Link className="footer-link" to="/admin/login">Admin </Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* column section */}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-6">

                        <div className="footer-address">
                            <p>  {storeData ? (`${storeData.storeAddress}`) : ('')}</p>
                            <p> <span className="phone-one">{storeData ? (`+${storeData.businessPhoneOne}`) : ('')}</span> </p>
                            <p> {storeData ? (`${storeData.businessEmail}`) : ('')}</p>
                        </div>
                        <div className="social-lists">
                            <ul className="social-icons">
                                <li> <Link className="footer-icons" to={storeData ? (`${storeData.twitterLink}`) : ('')}> <i className="fa-brands fa-square-x-twitter"></i> </Link> </li>
                                <li> <Link className="footer-icons" to={storeData ? (`${storeData.instagramLink}`) : ('')}> <i className="fa-brands fa-square-instagram"></i> </Link> </li>
                            </ul>
                        </div>
                    </div>


                </div>
                <hr />
                <div className="footer-copy">
                    <p> Copyright <i className="fa-regular fa-copyright"></i> 2023 <span className="name"> BlackTribeFashion </span> | Designed with <i className="fa-solid fa-heart"></i>  by <Link to="https://www.instagram.com/boy__programmer/" className="name-link"> Boy Programmer </Link>  </p>
                </div>
            </div>


            <GoToTop />
        </>
    );
}

export default FooterNav;