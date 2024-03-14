import React, { useEffect, useState } from 'react'
import { removeFromCart, addToCart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/FavoriteSlice';

const CartItem = ({product}) => {
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);
    const {favItems} = useSelector((state) => state.favorites);

    useEffect(() => {
      const present = favItems.some((item) => item.id === product.id);
      if(present){
        setIsLiked(true)
      }
    }, [])

    const handleLike = () => {
      dispatch(addToFavorites(product))
      setIsLiked(true)
    }
    const handleRemoveLike=()=> {
      dispatch(removeFromFavorites(product))
      setIsLiked(false)
    }

    function addToCartHandler(){
      dispatch(addToCart(product))
    }
    function removeFromCartHandler(){
      dispatch(removeFromCart(product.id))
    }

  return (
    <div key={product.id} className="xl:flex bg-white mb-4 rounded-lg gap-4">
        <div className="flex flex-1 p-4 items-center">
            <img style={{height: '60px', marginRight: '16px'}} src={product.image} alt="" />
            <p>{product.title}</p>
        </div>
        <div className='flex items-center gap-4 p-4 justify-between'>
          <div>
              {
                !isLiked
                &&
                <img onClick={handleLike} src="./images/heart.png" className='w-6 opacity-50' alt="" />
              }
              {
                isLiked
                &&
                <img onClick={handleRemoveLike} src="./images/heart-filled.png" className='top-5 w-6' alt="" />
              }
          </div>
          <div className="product-actions">
              
              <p className='price'>${product.price}</p>
              <button className="quantity-button" onClick={removeFromCartHandler}>-</button>
              <span className="quantity">{product.quantity}</span>
              <button className="quantity-button" onClick={addToCartHandler}>+</button>
          </div>
        </div>
    </div>
  )
}

export default CartItem