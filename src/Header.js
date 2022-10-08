import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDown, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <>
      <div>
        <header>
          <div className="d-flex justify-content-between align-items-center container py-3">
            <div>
              <a>
                <img src={require("./Assets/1.png")}></img>
              </a>
            </div>
            <div className="vr"></div>
            <div>
              <ul className="d-flex align-items-center my-auto main-menu"> 
                <li className="mx-2">
                  <a className="p-3" href="/">
                    <span>HOME</span>
                  </a>
                </li>
                <li className="mx-2">
                  <a className="p-3">
                    <span>ABOUT</span>
                  </a>
                </li>
                <li className="mx-2">
                  <a className="p-3">
                    <span>SERVICES</span>
                    <FaAngleDown />
                  </a>
                  <ul className="sub-menu px-3">
                  <li>
                      <a>
                        <span>Private Label</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>IT Solutions</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Real Estate</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Finance</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Asset Management</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mx-2 menu-hvr">
                  <a className="p-3">
                    <span>SHOP</span>
                    <FaAngleDown />
                  </a>
                  <ul className="sub-menu px-3">
                    <li>
                      <a>
                        <span>Natural Products</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Organic Products</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Synthetic Products</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mx-2">
                  <a className="p-3">
                    <span>BLOG</span>
                    <FaAngleDown />
                  </a>
                  <ul className="sub-menu px-3">
                    <li>
                      <a>
                        <span>Latest</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Trending</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>In News</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="mx-2">
                  <a className="p-3">
                    <span>E-MALL</span>
                    <FaAngleDown />
                  </a>
                  <ul className="sub-menu px-3">
                    <li>
                      <a>
                        <span>Mobile Accessories</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Computer Accessories</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Men's Accessories</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>women's Accessories</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Clothing</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span>Electronics</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="vr"></div>

            <div>
              <ul className="d-flex align-items-center my-auto">
                <li className="mx-2">
                  <a className="p-3">
                    <FaShoppingCart  className="cart-search"/>
                  </a>
                </li>
                <li className="ml-2">
                  <a className="pl-3 py-3">
                    <FaSearch  className="cart-search"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <hr className="container"></hr> */}
        </header>
      </div>
    </>
  );
}

export default Header;
