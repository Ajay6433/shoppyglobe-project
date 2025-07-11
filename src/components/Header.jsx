import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-semibold text-gray-800">
          <Link to="/">ShoppyGlobe</Link>
        </h1>
        <nav>
          <ul className="flex gap-6 text-sm text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-600 transition-colors">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
