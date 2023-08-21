import ProductCard from "../components/product-card";

const MostViewed = ({ products }) => {
   

    return (
        <>
            <div className="viewed-wrapper">
                <div className="viewed-header">
                    <h3 className="main-text"> Most Viewed </h3>
                    <span className="vertical-line"></span>
                </div>

                <div className="viewed-section">
                    <div className="row">

                        {products.slice(1, 4).map((product) => (
                            <div key={product.id} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <ProductCard product={product.data} prod_id={product.id} />
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        </>
    );
};

export default MostViewed;
