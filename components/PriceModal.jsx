"use client";

// e08c8aeb-ee56-4506-93d3-ac3209c0b7a7 ---Tanzil
// 3b729f1f-c883-4903-9f0c-6da2b73faa3e --- Akash

import { useState } from "react";

const PriceModal = ({ isOpen, onClose, packageDetails }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    const form = event.target;
    const formData = new FormData(form);

    // Append package details to the form data
    formData.append("access_key", "3b729f1f-c883-4903-9f0c-6da2b73faa3e");
    formData.append("package_details", JSON.stringify(packageDetails)); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
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
        setMessage("Your message has been sent successfully!");
        form.reset();
      } else {
        setMessage("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 text-4xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Call for Price</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="text"
              name="org_name"
              placeholder="Enter Organization Name"
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Mobile Number"
              required
              className="w-full border rounded-lg p-2"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              required
              className="w-full border rounded-lg p-2"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-accent text-white px-4 py-2 mt-4 rounded-lg w-full disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          {message && (
            <div
              className={`mt-4 text-center ${
                message.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PriceModal;
