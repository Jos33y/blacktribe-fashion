import ProductCard from "../components/product-card";


const RelatedProducts = ({ products }) => {
    return (
        <>
            <div className="related-wrapper">
                <div className="related-header">
                    <h3 className="main-text"> Related Products </h3>
                    <span className="vertical-line"></span>
                </div>

                <div className="related-section">
                    {products && products.length > 0 ? (
                        <div className="row">
                            {products.slice(0, 4).map((product) => (
                                <div key={product.id} className="col-lg-3 col-md-6 col-sm-6 col-6">
                                    <ProductCard product={product.data} prod_id={product.id} />
                                </div>
                            ))}
                        </div>
                    ) :
                        (<h6>No product available</h6>)
                    }
                </div>
            </div>
        </>
    )
};
export default RelatedProducts;