const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section - Copyright and tagline */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm md:text-base font-light">
              © {currentYear} Madhan Jetti. All rights reserved.
            </p>
            <p className="text-xs md:text-sm text-gray-400 mt-1">
              Transforming ideas into scalable digital experiences.
            </p>
          </div>

          {/* Right section - Links */}
          
        </div>

        {/* Optional additional footer note */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          Built with passion using ReactJs, Tailwind CSS, and TypeScript.
        </div>
      </div>
    </footer>
  );
};

export default Footer;