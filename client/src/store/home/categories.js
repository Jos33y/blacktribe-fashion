import { useNavigate } from "react-router-dom";
import ModelTwo from "../assets/images/model_2.png";

const HomeCategories = ({ categories }) => {
  const navigate = useNavigate();

  const goToShop = (cat_id) => {
    navigate("/shop", { state: { category_id: cat_id } });
    // console.log("category id:", cat_id);
  };

  return (
    <> 
      <div className="categories-wrapper">
        <div className="categories-header">
          <span className="vertical-line"></span>
          <h3 className="main-text">
            DISCOVER <br /> THE COLLECTIONS
          </h3>
        </div>

        <div className="categories-section">
          <div className="row">
            {categories.slice(0, 2).map((category) => (
              <div key={category.id} className="col-lg-6 col-md-6 col-6">
                <div className="categories-box">
                  <div className="categories-box-wrapper">
                    <div className="img-box">
                      <img
                        src={category.data.categoryImage ? category.data.categoryImage || category.data.categoryImage[0] : ModelTwo}
                        className="img-fluid"
                        alt="Men categories"
                      />
                    </div>
                    <div className="button-box">
                      <button onClick={() => { goToShop(category.data.category_id) }} className="btn btn-secondary">
                        {`${category.data.categoryName.slice(0, 12)}`}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategories;
