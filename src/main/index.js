import "./index.css";
import axios from "axios";

function MainPageComponent() {
  axios
    .get("https://89b09afd-1ec6-4ff1-a33c-f23d1ea46e20.mock.pstmn.io/products")
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.error("error : ", error);
    });
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list"></div>
        <div className="product-card">
          <div>
            <img className="product-img" src="images/products/keyboard1.jpg" />
          </div>
          <div className="products-contents">
            <span className="product-name">키보드</span>
            <span className="product-price">50000원</span>
            <div className="product-seller">
              <img className="product-avatar" src="images/icons/avatar.png" />
              <sapn>그랩</sapn>
            </div>
          </div>
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPageComponent;
