import React, { useState } from 'react';
function ProductsCard() {
    const [count, setCount] = useState(0);
    const [showCartOptions, setShowCartOptions] = useState(false);
    const [addtoWishList, setAddtoWishList] = useState(false);
    const addToCart = () => {
        setShowCartOptions(true);
        setCount((prevCount) => prevCount + 1);
    };
    const deleteCart = () => {
        setShowCartOptions(false);
        setCount(0);
    };
    const wishList = () => setAddtoWishList(!addtoWishList);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5'>
            <div className='w-full max-w-sm bg-white border border-transparent rounded-lg shadow-sm hover:border-gray-200 hover:shadow-lg dark:bg-gray-800 dark:border-transparent dark:hover:border-gray-700'>
                <div className='relative group'>
                    <a href='#'>
                        <img
                            className='rounded-lg w-full'
                            src='/images/products/demo1.jpg'
                            alt='img'
                        />
                    </a>
                    <div className='absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto'>
                        <button className='btn-top-right px-3 py-1 ' onClick={wishList}>
                            {addtoWishList ? (
                                <img src='/images/products/addedWishListIcon.svg' alt='img' />
                            ) : (
                                <img src='/images/products/WishlistIcon.svg' alt='img' />
                            )}
                        </button>
                    </div>
                    <div className='absolute mx-3 inset-0 flex flex-col items-center justify-end pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        {showCartOptions ? (
                            <div className='w-full flex items-center justify-between py-1.5 mb-2 bg-[#03A629] text-white border-[1.5px] border-[#FFFFFF4D] rounded-md gap-x-2 px-2'>
                                <button
                                    className='flex items-center justify-center  text-white  w-6 h-6'
                                    onClick={deleteCart}
                                >
                                    <img
                                        src='/images/products/Trash.png'
                                        alt='cart'
                                        className='w-6 h-6'
                                    />
                                </button>
                                <span className='text-center flex-grow text-white'>
                                    {count} Added in Cart
                                </span>
                                <button
                                    className='flex items-center justify-center  text-white  w-6 h-6'
                                    onClick={addToCart}
                                >
                                    <img
                                        src='/images/products/Plus.png'
                                        alt='cart'
                                        className='w-6 h-6'
                                    />
                                </button>
                            </div>
                        ) : (
                            <button
                                className=' w-full justify-center  btn-primary  py-1.5 mb-2 bg-[#FFFFFF4D] text-white border-[1.5px] border-[#FFFFFF4D] rounded-md flex items-center gap-x-2'
                                onClick={addToCart}
                            >
                                <img
                                    src='/images/products/cart.png'
                                    alt='cart'
                                    className='w-4 h-4'
                                />
                                Add to Cart
                            </button>
                        )}

                        <button
                            className='w-full justify-center btn-secondary  py-1.5 bg-[#FFFFFF4D] text-white border-[1.5px] border-[#FFFFFF4D] rounded-md flex items-center gap-x-2'
                            onClick={() => console.log('Button 2')}
                        >
                            <img src='/images/products/eye.png' alt='eye' className='w-4 h-4' />
                            Quick View
                        </button>
                    </div>
                </div>
                <div className='p-2'>
                    <p className='mb-0.5 text-[12px] sm:text-[14px] font-normal text-[#5A6573] leading-4'>
                        Fabrilife
                    </p>

                    <p
                        className='line-clamp-2 max-w-[50ch] text-[#1A2B3D] text-[14px] sm:text-[16px] font-semibold'
                        title='Fabrilife Mens Premium Designer Edition T Shirt - 786'
                    >
                        Fabrilife Mens Premium Designer Edition T Shirt - 786
                    </p>

                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 font-murecho flex gap-2 mt-2'>
                        <span className='text-[#1882FF] font-semibold'>৳ 1500</span>
                        <span className='line-through text-[#77818C] font-normal'>৳ 2500</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;
