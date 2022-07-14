import { Link } from "react-router-dom";

import forRent from "../assets/jpg/forRent.jpg";
import forSale from "../assets/jpg/forSale.jpg";

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        {/*<Slider />*/}

        <div className="exploreCategories">
          <Link to="/category/rent">
            <img src={forRent} alt="rent" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img src={forSale} alt="sell" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
