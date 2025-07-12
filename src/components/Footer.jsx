import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t bg-white text-gray-600 text-sm mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
        {/* Year will be updated dynamically as the year goes by */}
        <p>&copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          {/* Footer Links */}
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/cart" className="hover:text-blue-600 transition-colors">Cart</Link>
          <a href="https://github.com/Ajay6433/shoppyglobe-project" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
