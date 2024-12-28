import {Link} from "react-router-dom";
import React,{useState} from "react";
import CartIcon from "@/components/products/CartIcon.jsx";

const Navbar=()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return(
        <>
    <nav className="bg-white shadow-md py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
            {/* Logo */}
            <Link to="/" className="text-xl font-semibold text-gray-800">
                MyStore
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
                {/*<Link to="/" className="text-lg text-gray-700 hover:text-green-500">Home</Link>*/}
                {/*<Link to="/products" className="text-lg text-gray-700 hover:text-green-500">Products</Link>*/}
                <Link to="/cart" >
                   <CartIcon/>
                </Link>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
                {isMenuOpen ? 'X' : '☰'}
            </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white py-4`}>
            <div className="flex flex-col items-center space-y-4">
                <Link to="/" className="text-lg text-gray-700 hover:text-green-500">Home</Link>
                <Link to="/products" className="text-lg text-gray-700 hover:text-green-500">Products</Link>
                <Link to="/cart" >
                    <CartIcon/>
                </Link>
            </div>
        </div>
    </nav></>)
}

export default Navbar;