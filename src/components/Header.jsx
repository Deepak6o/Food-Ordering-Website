import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://www.pngitem.com/pimgs/m/22-227226_delivery-logo-food-delivery-service-hd-png-download.png"
    />
  );
};

// const isLoggedIn = () => {
//   // check authorisaton
//   return false;
// };
const Header = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="header">
        <Title />

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
        {login ? (
          <button onClick={() => setLogin(false)}>Login</button>
        ) : (
          <button onClick={() => setLogin(true)}>Logout</button>
        )}
      </div>
    </>
  );
};
export default Header;
