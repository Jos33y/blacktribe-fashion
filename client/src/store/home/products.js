
import ProductCard from "../components/product-card";

const HomeProducts = ({ products }) => {


    return (
        <>
            <div className="products-wrapper">
                <div className="products-header">
                    <span className="vertical-line"></span>
                    <h3 className="main-text"> POPULAR PRODUCTS </h3>
                </div>

                <div className="products-section">
                    <div className="row">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="col-lg-3 col-md-4 col-sm-4 col-6"
                            >
                                <ProductCard product={product.data} prod_id={product.id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeProducts;
