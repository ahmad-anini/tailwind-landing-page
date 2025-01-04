import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Company
            </h3>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Premium
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Affiliate Program
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Get Coupon
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Help and Support
            </h3>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Knowledge Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Premium Support
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Sponsorships
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Learning
            </h3>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Learn Hub
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Manuals
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Tutorials
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Communities
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Resources
            </h3>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Third-Party Tools
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Illustrations
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Themesberg
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Bluehost
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Stock Photos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Legal
            </h3>
            <ul className="text-gray-500">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  EULA
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"
          >
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
            Landwind
          </a>
          <span className="block text-base leading-6 text-center text-gray-500">
            © 2022 Flowbite, Inc. All rights reserved.
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.80078 16.7109C8.80078 16.6406 8.73047 16.5703 8.625 16.5703C8.51953 16.5703 8.44922 16.6406 8.44922 16.7109C8.44922 16.7812 8.51953 16.8516 8.625 16.8164C8.73047 16.8164 8.80078 16.7812 8.80078 16.7109ZM7.71094 16.5352C7.71094 16.6055 7.78125 16.7109 7.88672 16.7109C7.95703 16.7461 8.0625 16.7109 8.09766 16.6406C8.09766 16.5703 8.0625 16.5 7.95703 16.4648C7.85156 16.4297 7.74609 16.4648 7.71094 16.5352ZM9.29297 16.5C9.1875 16.5 9.11719 16.5703 9.11719 16.6758C9.11719 16.7461 9.22266 16.7812 9.32812 16.7461C9.43359 16.7109 9.50391 16.6758 9.46875 16.6055C9.46875 16.5352 9.36328 16.4648 9.29297 16.5ZM11.5781 3C6.72656 3 3 6.72656 3 11.5781C3 15.4805 5.42578 18.8203 8.94141 20.0156C9.39844 20.0859 9.53906 19.8047 9.53906 19.5938C9.53906 19.3477 9.53906 18.1523 9.53906 17.4141C9.53906 17.4141 7.07812 17.9414 6.55078 16.3594C6.55078 16.3594 6.16406 15.3398 5.60156 15.0938C5.60156 15.0938 4.79297 14.5312 5.63672 14.5312C5.63672 14.5312 6.51562 14.6016 7.00781 15.4453C7.78125 16.8164 9.04688 16.4297 9.57422 16.1836C9.64453 15.6211 9.85547 15.2344 10.1367 14.9883C8.16797 14.7773 6.16406 14.4961 6.16406 11.1211C6.16406 10.1367 6.44531 9.67969 7.00781 9.04688C6.90234 8.80078 6.62109 7.88672 7.11328 6.65625C7.81641 6.44531 9.53906 7.60547 9.53906 7.60547C10.2422 7.39453 10.9805 7.32422 11.7188 7.32422C12.4922 7.32422 13.2305 7.39453 13.9336 7.60547C13.9336 7.60547 15.6211 6.41016 16.3594 6.65625C16.8516 7.88672 16.5352 8.80078 16.4648 9.04688C17.0273 9.67969 17.3789 10.1367 17.3789 11.1211C17.3789 14.4961 15.3047 14.7773 13.3359 14.9883C13.6523 15.2695 13.9336 15.7969 13.9336 16.6406C13.9336 17.8008 13.8984 19.2773 13.8984 19.5586C13.8984 19.8047 14.0742 20.0859 14.5312 19.9805C18.0469 18.8203 20.4375 15.4805 20.4375 11.5781C20.4375 6.72656 16.4648 3 11.5781 3ZM6.41016 15.1289C6.33984 15.1641 6.375 15.2695 6.41016 15.3398C6.48047 15.375 6.55078 15.4102 6.62109 15.375C6.65625 15.3398 6.65625 15.2344 6.58594 15.1641C6.51562 15.1289 6.44531 15.0938 6.41016 15.1289ZM6.02344 14.8477C5.98828 14.918 6.02344 14.9531 6.09375 14.9883C6.16406 15.0234 6.23438 15.0234 6.26953 14.9531C6.26953 14.918 6.23438 14.8828 6.16406 14.8477C6.09375 14.8125 6.05859 14.8125 6.02344 14.8477ZM7.14844 16.1133C7.11328 16.1484 7.11328 16.2539 7.21875 16.3242C7.28906 16.3945 7.39453 16.4297 7.42969 16.3594C7.46484 16.3242 7.46484 16.2188 7.39453 16.1484C7.32422 16.0781 7.21875 16.043 7.14844 16.1133ZM6.76172 15.5859C6.69141 15.6211 6.69141 15.7266 6.76172 15.7969C6.83203 15.8672 6.90234 15.9023 6.97266 15.8672C7.00781 15.832 7.00781 15.7266 6.97266 15.6562C6.90234 15.5859 6.83203 15.5508 6.76172 15.5859Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1367 8.62109C19.8398 8.09375 20.4727 7.46094 20.9648 6.72266C20.332 7.00391 19.5938 7.21484 18.8555 7.28516C19.6289 6.82812 20.1914 6.125 20.4727 5.24609C19.7695 5.66797 18.9609 5.98438 18.1523 6.16016C17.4492 5.42188 16.5 5 15.4453 5C13.4062 5 11.7539 6.65234 11.7539 8.69141C11.7539 8.97266 11.7891 9.25391 11.8594 9.53516C8.80078 9.35938 6.05859 7.88281 4.23047 5.66797C3.91406 6.19531 3.73828 6.82812 3.73828 7.53125C3.73828 8.79688 4.37109 9.92188 5.39062 10.5898C4.79297 10.5547 4.19531 10.4141 3.70312 10.1328V10.168C3.70312 11.9609 4.96875 13.4375 6.65625 13.7891C6.375 13.8594 6.02344 13.9297 5.70703 13.9297C5.46094 13.9297 5.25 13.8945 5.00391 13.8594C5.46094 15.3359 6.83203 16.3906 8.44922 16.4258C7.18359 17.4102 5.60156 18.0078 3.87891 18.0078C3.5625 18.0078 3.28125 17.9727 3 17.9375C4.61719 18.9922 6.55078 19.5898 8.66016 19.5898C15.4453 19.5898 19.1367 14 19.1367 9.11328C19.1367 8.9375 19.1367 8.79688 19.1367 8.62109Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7188 3C6.90234 3 3 6.9375 3 11.7188C3 16.5352 6.90234 20.4375 11.7188 20.4375C16.5 20.4375 20.4375 16.5352 20.4375 11.7188C20.4375 6.9375 16.5 3 11.7188 3ZM17.4492 7.04297C18.5039 8.30859 19.1367 9.92578 19.1367 11.6836C18.8906 11.6133 16.4297 11.1211 13.9688 11.4375C13.7578 10.9453 13.582 10.5234 13.3008 9.96094C16.0781 8.83594 17.3086 7.25391 17.4492 7.04297ZM16.6406 6.16406C16.5 6.375 15.375 7.88672 12.7383 8.87109C11.5078 6.62109 10.1719 4.79297 9.96094 4.51172C12.3164 3.94922 14.8125 4.54688 16.6406 6.16406ZM8.51953 5.00391C8.73047 5.28516 10.0664 7.11328 11.2969 9.32812C7.81641 10.2422 4.75781 10.2422 4.40625 10.207C4.89844 7.92188 6.44531 5.98828 8.51953 5.00391ZM4.26562 11.7539C4.26562 11.6836 4.26562 11.6133 4.26562 11.5078C4.58203 11.543 8.20312 11.5781 11.8945 10.4531C12.1406 10.875 12.3164 11.2969 12.5273 11.7188C9.82031 12.4922 7.35938 14.6719 6.16406 16.7109C4.96875 15.4102 4.26562 13.6523 4.26562 11.7539ZM7.11328 17.625C7.92188 16.043 10.0312 13.9688 13.0195 12.9492C14.0742 15.6562 14.4961 17.9414 14.6016 18.6094C12.2109 19.6289 9.32812 19.3477 7.11328 17.625ZM15.8672 17.9062C15.7969 17.4844 15.375 15.3047 14.4258 12.5977C16.7461 12.2461 18.7852 12.8438 19.0664 12.9141C18.7148 14.9883 17.5195 16.7812 15.8672 17.9062Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0352 13.125L16.5273 9.89062H13.3984V7.78125C13.3984 6.86719 13.8203 6.02344 15.2266 6.02344H16.668V3.24609C16.668 3.24609 15.3672 3 14.1367 3C11.5703 3 9.88281 4.58203 9.88281 7.39453V9.89062H7V13.125H9.88281V21H13.3984V13.125H16.0352Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
