import { useNavigate } from "react-router-dom";

const HomeHero = ({onVideoLoaded}) => {
    const navigate = useNavigate();
    
    const heroVideo = "https://firebasestorage.googleapis.com/v0/b/blacktribefashion.appspot.com/o/videos%2Fblack_tribe_hero_vid.mp4?alt=media&token=fe4943a9-5bd1-4478-ab28-b5dad8752f88";

   
   

    return (
        <>
            <div className="hero-container">
                <div className="row">
                    <div className="col-md-6"> 
                        <div className="hero-content">
                            <div className="hero-mobile">

                            
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
                    </div>
                    <div className="col-md-6">
                        <div className="hero-video-container">
                            <video autoPlay loop muted playsInline width="100%" height="100%" onLoadedData={onVideoLoaded}>
                                <source src={heroVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHero;
