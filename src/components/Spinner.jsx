import { HashLoader } from 'react-spinners';

function Spinner() {
  return (
    // Spinner that works as fallback
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <HashLoader size={40} color="#3b82f6" />
      <p className="mt-4 text-gray-600">Loading, please wait...</p>
    </div>
  );
}

export default Spinner;
