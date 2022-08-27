import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/product-card.css';
const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  return (
    <div className='product__item'>
      <div className='product__img'>
        <img src={image01} alt='product-img' className='w-50' />
      </div>
      <div className='product__content'>
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className='d-flex align-items-center justify-content-between'>
          <span className='product__price'>${price}</span>
          <button className='addToCart__btn'>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
