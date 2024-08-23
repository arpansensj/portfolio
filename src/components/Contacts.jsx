import React, { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xyzgbejd";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  if (submitted) {
    return (
      <div id="contact" className="lg:pt-28 pt-12 flex flex-col items-center">
        <div className="lg:w-[500px] w-full px-4">
          <div className="text-2xl font-bold text-center mb-4 text-[#42446E]">
            Thank you!
          </div>
          <div className="text-md text-center mb-4 text-[#42446E]">
            We'll be in touch soon.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="contact">
      <h2 className="text-[#42446E] lg:font-bold lg:text-3xl font-bold text-2xl text-center pt-12 lg:pt-28">
        Contact Me
      </h2>
      <form
        className="lg:pt-10 lg:w-[500px] p-4 pt-5 mx-auto bg-white"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="pt-0 mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="pt-0 mb-3 flex justify-center">
          <button
            className="w-full hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-gradient-to-r from-pink-500 to-sky-500 rounded shadow outline-none"
            type="submit"
          >
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
