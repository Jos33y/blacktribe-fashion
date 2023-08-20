import "./component.css";

const SubscribeForm = () => {
    return (
        <>
            <div className="subscribe-container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="subscribe-form">
                            <div className="subscribe-title">
                                <h4> Subcribe to our Newsletter </h4>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter Email Address" />
                                <button className="btn btn-secondary">Subscribe</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}
export default SubscribeForm;