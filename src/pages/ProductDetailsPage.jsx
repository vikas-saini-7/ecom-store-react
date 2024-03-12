import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { getSingleProduct } from '../redux/actions/productsActions';


const ProductDetailsPage = () => {
  const {loading, singleProduct} = useSelector((state) => state.products)
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSingleProduct(params.productId))
    }, [])
  return (
    <div>
        <h1>ProductDetailsPage</h1>
        <p>{params.productId}</p>
        <Link to=".." relative='path'>Back</Link>

        {loading && <p>Loading...</p>}
        {!loading && <div className="product-card">
          <img src={singleProduct?.image} alt={singleProduct?.title} className="product-image" />
          <div className="product-details">
            <h2 className="product-title">{singleProduct?.title}</h2>
            <p className="product-description">{singleProduct?.description}</p>
            <p className="product-price">${singleProduct?.price}</p>
            <p className="product-category">{singleProduct?.category}</p>
            <div className="product-rating">
              <span className="rating">{singleProduct?.rating?.rate}</span>
              <span>({singleProduct?.rating?.count} reviews)</span>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default ProductDetailsPage