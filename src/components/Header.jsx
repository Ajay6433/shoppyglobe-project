import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  //function for counting the items to be displayed along the cart icon
  const itemsCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

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
              <Link
                to="/cart"
                className="relative flex items-center gap-1 hover:text-blue-600 transition-colors"
              >
                {/* Cart Icon */}
                <FiShoppingCart className="text-xl" />

                {/* Badge */}
                {itemsCount > 0 && (
                  <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full px-1.5">
                    {itemsCount}
                  </span>
                )}

                <span className="ml-1">Cart</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
