const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* LOGO */}
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <img src="/favicon.svg" className="h-8 me-3" loading="lazy"/>
              <span className="text-2xl font-semibold dark:text-white">
                Ecom
              </span>
            </a>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">React</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">Github</li>
                <li>Discord</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2026 Ecom™. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;