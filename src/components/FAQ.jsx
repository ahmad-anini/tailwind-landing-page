import React, { useState } from "react";

const FAQ = () => {
  // State to manage open accordion items
  const [openItem, setOpenItem] = useState(null);

  // Function to toggle the accordion item
  const toggleItem = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 pb-12 pt-12 mx-auto lg:pb-24 lg:px-6">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div>
            {/* Accordion Item 1 */}
            <h3>
              <button
                type="button"
                className={`flex items-center justify-between w-full py-5 font-medium text-left ${
                  openItem === 1 ? "text-gray-900" : "text-gray-500"
                } border-b border-gray-200`}
                onClick={() => toggleItem(1)}
              >
                <span>Can I use Landwind in open-source projects?</span>
                <svg
                  className={`w-6 h-6 transform ${
                    openItem === 1 ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h3>
            {openItem === 1 && (
              <div className="py-5 border-b border-gray-200">
                <p className="mb-2 text-gray-500">
                  Generally, it is accepted to use FlowBite in open-source
                  projects, as long as it is not a UI library, a theme, a
                  template, a page-builder that would be considered as an
                  alternative to FlowBite itself.
                </p>
                <p className=" text-gray-500">
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                </p>
                <p className="text-gray-500">
                  {`Find out more information by `}
                  <a href="#" className="text-purple-600 hover:underline">
                    reading the license
                  </a>
                  .
                </p>
              </div>
            )}

            {/* Accordion Item 2 */}
            <h3>
              <button
                type="button"
                className={`flex items-center justify-between w-full py-5 font-medium text-left ${
                  openItem === 2 ? "text-gray-900" : "text-gray-500"
                } border-b border-gray-200`}
                onClick={() => toggleItem(2)}
              >
                <span>Where can I access my download files?</span>
                <svg
                  className={`w-6 h-6 transform ${
                    openItem === 2 ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h3>
            {openItem === 2 && (
              <div className="py-5 border-b border-gray-200">
                <p className="mb-2 text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  eos laborum itaque, ex mollitia iusto. Sit ullam nulla
                  molestias totam laborum facere officiis quisquam ipsam?
                  Temporibus.
                </p>
              </div>
            )}

            {/* Accordion Item 3 */}
            <h3>
              <button
                type="button"
                className={`flex items-center justify-between w-full py-5 font-medium text-left ${
                  openItem === 3 ? "text-gray-900" : "text-gray-500"
                } border-b border-gray-200`}
                onClick={() => toggleItem(3)}
              >
                <span>Can I use FlowBite for commercial purposes?</span>
                <svg
                  className={`w-6 h-6 transform ${
                    openItem === 3 ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h3>
            {openItem === 3 && (
              <div className="py-5 border-b border-gray-200">
                <p className="mb-2 text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  eos laborum itaque, ex mollitia iusto. Sit ullam nulla
                  molestias totam laborum facere officiis quisquam ipsam?
                  Temporibus.
                </p>
              </div>
            )}

            {/* Accordion Item 4 */}
            <h3>
              <button
                type="button"
                className={`flex items-center justify-between w-full py-5 font-medium text-left ${
                  openItem === 4 ? "text-gray-900" : "text-gray-500"
                } border-b border-gray-200`}
                onClick={() => toggleItem(4)}
              >
                <span>What about browser support?</span>
                <svg
                  className={`w-6 h-6 transform ${
                    openItem === 4 ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h3>
            {openItem === 4 && (
              <div className="py-5 border-b border-gray-200">
                <p className="mb-2 text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  eos laborum itaque, ex mollitia iusto. Sit ullam nulla
                  molestias totam laborum facere officiis quisquam ipsam?
                  Temporibus.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
