import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { useAuth0 } from "@auth0/auth0-react";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;

  const {  isAuthenticated} = useAuth0();
  if(isAuthenticated){
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
      
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
  }else{
    return <div className="card">
    <figure>
      <img src={image} alt={name} />
  
      <figcaption className="caption">{category}</figcaption>
    </figure>

    <div className="card-data">
      <div className="card-data-flex">
        <h3>{name}</h3>
        <p className="card-data--price">{<FormatPrice price={price} />}</p>
      </div>
    </div>
  </div>
  }
};

export default Product;
