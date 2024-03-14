import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { getSingleProduct } from '../redux/actions/productsActions';
import Loader from '../components/Loader';
import { addToCart } from '../redux/cartSlice';
import { addToFavorites, removeFromFavorites } from '../redux/FavoriteSlice';


const ProductDetailsPage = () => {
  const {loading, singleProduct} = useSelector((state) => state.products)
  const {favItems} = useSelector((state) => state.favorites)
  const [isLiked, setIsLiked] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSingleProduct(params.productId));
      console.log(params.productId)
      console.log(favItems)
      const present = favItems.some(item => item.id == params.productId);
      console.log(present)
      if(present){
        setIsLiked(true)
      }
    }, [])

    function handleAddToCart(){
      dispatch(addToCart(singleProduct))
    }

    const handleLike = () => {
      dispatch(addToFavorites(singleProduct))
      setIsLiked(true)
    }
    const handleRemoveLike=()=> {
      dispatch(removeFromFavorites(singleProduct))
      setIsLiked(false)
    }
  return (
    <div className='custom-container'>
        {/* <Link to=".." relative='path'>Back</Link> */}

        {loading && <div className='p-4'><Loader/></div>}
        {!loading &&
        <div className="grid lg:grid-cols-2 gap-8">
          <div className='p-16 bg-white mt-[16px] relative'>
            <img className="w-full h-[350px] object-contain"  src={singleProduct?.image} alt={singleProduct?.title}/>
            <div>
            {
              !isLiked
              &&
              <>
                <img onClick={handleLike} src="/images/heart.png" className='absolute right-5 top-5 w-8 opacity-50' alt="no img" />
              </>
            }
            {
              isLiked
              &&
              <img onClick={handleRemoveLike} src="/images/heart-filled.png" className='absolute right-5 top-5 w-8' alt="no img" />

            }
            {/* <img src="./images/heart-filled.png" className='' alt="" /> */}
            </div>
          </div>
          <div className="mt-[16px]">
            <h2 className="product-title">{singleProduct?.title}</h2>
            <p className="product-description text-gray-500">{singleProduct?.description}</p>
            <p className="product-price">${singleProduct?.price}</p>
            <p className="product-category">{singleProduct?.category}</p>
            <div className="product-rating">
              <span className="rating">{singleProduct?.rating?.rate}</span>
              <span>({singleProduct?.rating?.count} reviews)</span>
            </div>
            <div>
              <button className="border w-full border-gray-400 py-2 mt-4 mb-8 hover:bg-yellow-400 hover:border-black rounded" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default ProductDetailsPage