import React from "react";
import { useNavigate } from 'react-router-dom';
import RatingComponents from "../RatingComponents/RatingComponents";
import ImageComponent from "../ImageComponents/ImageComponents";
import {notifySuccess} from "../ToastComponents/ToastComponents";
import {addtoCartItems} from "../../redux/action/cart-action";
import {useDispatch, useSelector} from "react-redux";




function ProductListing(props) {
    const cartItems = useSelector(state => state.CartReducer.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productItem } = props;
    const truncateString = (str, maxLength) => {
        if (str?.length <= maxLength) return str;
        return str.substr(0, maxLength) + "...";
    };

    const addToCart = (event, productItem ) => {
        event.stopPropagation();
        const existingCartItem = cartItems.find(item => item.id === productItem.id);
        let message = truncateString(productItem?.name, 60)
        if (existingCartItem) {
            notifySuccess(`${message} already added in the cart!`);
        } else {
            let cartObj = {
                id: productItem.id,
                name: productItem.name,
                image: productItem.images,
                description: productItem.description,
                price: productItem.sell_price,
                sku: productItem.sku,
                purchaseQty: 1,
                totalPrice: 1 * JSON.parse(productItem.sell_price),
                is_tax_apply:productItem?.is_tax_apply
            };
            notifySuccess(`${message} added to the cart!`);
            dispatch(addtoCartItems(cartObj));
        }
    }

    return (


        <div className="product-item men m-md-4 mt-5 prductsListBorder">
        
                <div
                    className="product discount product_filter"
                    onClick={() =>
                        navigate(`/products-details/${productItem.id}`, {
                            state: {
                                id: productItem.id
                            }
                        })
                    }
                >
                    {productItem?.images?.length > 0 ? (
                        <div className="product_image">
                            {productItem.images[0].name ? (
                                <ImageComponent src={productItem.images[0].name} alt={"products Image"} />) : (
                                <p>Image not available</p>
                            )}
                        </div>
                    ) : (
                        <div className="product_image">
                            <ImageComponent src="https://backend.kingsmankids.com/uploads/template_images/2024/01/laravel-c136ade819e33b5afcda41d1271d247c.webp" alt={"products Image"} />
                        </div>
                    )}
                    <div className="product_info">
                        <h6 className="product_name">
                            <div>{truncateString(productItem?.name, 80)}</div>
                        </h6>
                        <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center'}}>
                            <div className="product_price">
                                $ {productItem?.sell_price ? productItem?.sell_price : productItem.price}
                                <span> $ {(parseFloat(productItem.price)).toFixed(2)}</span>
                            </div>
                            <div className="checkout">
                                <i style={{fontSize: 20}} onClick={(event) => addToCart(event, productItem)} className="fas fa-shopping-bag"></i>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default ProductListing;
