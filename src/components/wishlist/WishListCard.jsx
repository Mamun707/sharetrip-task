import ProductsCard from "@/components/products/ProductsCard.jsx";

const WishListCard = () => {
    const wishlist= JSON.parse(localStorage.getItem('wishlist')) || [];
console.log("wishlist",wishlist);
    return (
       <><ProductsCard allProducts={wishlist}/></>
    );
};

export default WishListCard;
