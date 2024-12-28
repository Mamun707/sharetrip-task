import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addToCart, decrementQuantity, removeFromCart} from "@/reduxStore/slices/cartSlice.js";

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex items-center justify-between p-4 border-b">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded-md"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-500">৳ {item.priceAfterDiscount} x {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="px-3 py-1 bg-gray-200 rounded-md"
                                        onClick={() => dispatch(decrementQuantity(item.id))}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="px-3 py-1 bg-gray-200 rounded-md"
                                        onClick={() => dispatch(addToCart(item))}
                                    >
                                        +
                                    </button>
                                    <button
                                        className="px-3 py-1 bg-red-500 text-white rounded-md"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">
                            Total: ৳ {total}
                        </h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
