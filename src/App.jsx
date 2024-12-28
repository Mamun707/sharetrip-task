import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "@/pages/Home.jsx";
import Cart from "@/pages/Cart.jsx";
import Navbar from "@/components/Navigation/Navbar.jsx";
function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
