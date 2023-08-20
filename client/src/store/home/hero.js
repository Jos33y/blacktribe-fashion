import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import BlackTribeVideo  from "../assets/videos/black_tribe_hero_vid.mp4";

const HomeHero = () => {
    const navigate = useNavigate();
 
    return (
        <>
            <div className="hero-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="hero-content">
                            <h3 className="hero-tag-one">
                                Own Your Style and Define Your
                                <span className="main-text"> Fashion Identity! </span>
                            </h3>
                            <p className="hero-tag-two">
                                Step into a World of Fashion that Reflects You Perfectly
                            </p>

                            <button
                                onClick={() => {
                                    navigate("/shop");
                                }}
                                className="btn btn-md btn-primary"
                            >
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="hero-video-container">
                            <ReactPlayer
                                url={BlackTribeVideo} // Replace with your video URL
                                playing={true} // Autoplay
                                controls={false} // Hide controls
                                loop={true} // Loop the video
                                muted={true} // Mute the video
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHero;
