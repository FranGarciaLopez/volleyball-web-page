'use client'
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [isMessageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d46a6572-f19d-4e15-a27e-ea06a6d6fe9b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setMessageSent(true);
      toast.success("Message sent!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="card-element max-w-md bg-blue-300 rounded-lg p-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl p-4 md:p-6 mt-6 mb-6 shadow-xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4">
          📞 Contact Us
        </h1>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover-bg-blue-600 text-white text-lg font-medium py-2 rounded-md focus:outline-none"
            >
              Contact
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}