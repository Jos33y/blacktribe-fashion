import { useNavigate } from "react-router-dom";
import "./component.css";
import { formatPrice, formatSymbol } from "./format-price";

const ProductCard = ({ product, prod_id }) => {

    const navigate = useNavigate()

    const goToDetails = () => {
        navigate(`/shop/product/${prod_id}`);
    }

    return (
        <>
            <div onClick={goToDetails} className="product-box">
                <div className="product-img-box">
                    <img
                        src={product.imgUrls[0]}
                        alt={product.productName}
                        className="img-fluid"
                        loading="lazy"
                    />
                </div>
                <div className="product-body">
                    <p className="product-name"> {product.productName}</p>
                    {product.discountOffer ? (
                        <p className="product-price">
                            <span className="discount-price"> {formatSymbol()}{formatPrice(product.productPrice)} </span> {formatSymbol()}{formatPrice(product.productDiscountPrice)}
                        </p>
                    ) : (
                        <p className="product-price"> {formatSymbol()}{formatPrice(product.productPrice)} </p>

                    )}

                </div>
                <div className="product-button">
                    <button onClick={() => { goToDetails(prod_id) }} className="btn btn-md btn-secondary">
                        Add to cart <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
export default ProductCard;