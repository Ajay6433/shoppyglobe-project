import { Link } from 'react-router-dom';

function Header() {
return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">ShoppyGlobe</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/cart" className="hover:underline">Cart</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
)
}

export default Header