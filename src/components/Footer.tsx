import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-400">&copy; 2024 Making Chip. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <Link href="/privacy-policy">
            <a className="text-sm text-gray-300 hover:text-white transition duration-300">Privacy Policy</a>
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/terms-and-conditions">
            <a className="text-sm text-gray-300 hover:text-white transition duration-300">Terms and Conditions</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
