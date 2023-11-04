import React from "react";

export default function DocsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="card-element max-w-md bg-blue-300 rounded-lg p-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl p-4 md:p-6 mt-6 mb-6 shadow-xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4">
          📞 Contact Us
        </h1>
        <form className="w-full max-w-md">
          <div className="form-group mb-4">
            <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Your Name" />
          </div>
          <div className="form-group mb-4">
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Your Email" />
          </div>
          <div className="form-group mb-4">
            <input type="text" id="phone" name="phone" className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none" placeholder="Your Phone" />
          </div>
          <div className="form-group mb-6">
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-2 rounded-md focus:outline-none">
              Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
