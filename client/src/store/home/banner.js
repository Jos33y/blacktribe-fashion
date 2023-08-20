import { useNavigate } from "react-router-dom";
import BeastOne from "../assets/images/beast_1_temp.png";

const HomeBanner = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="home-banner">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-img">
                            <img
                                src={BeastOne}
                                alt="the beast within"
                                className="img-fluid"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-text">
                            <p className="text-one"> #NEW SUMMER COLLECTION 2023</p>
                            <p className="text-two"> THE BEAST WITHIN </p>
                            <button onClick={() => {
                                navigate("/shop");
                            }} className="btn btn-secondary">Shop Now </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeBanner;
