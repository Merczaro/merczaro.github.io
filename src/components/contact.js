import React, { useState } from "react";
import contact from "../images/contact.jpg";
import SuccessTick from "../images/success-tick.svg";
import Failed from "../images/failed.svg";

const Contact = () => {
  const [user, setUser] = useState({ Name: "", Email: "", Message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to send email using EmailJS
  const sendEmail = () => {
    const templateParams = {
      user_name: user.Name,
      user_email: user.Email,
      user_message: user.Message,
      to_email: user.Email,
    };
    window.emailjs.send("service_8xj723s", "template_hakz5yj", templateParams, "FrVKZE6j-jCb1-IP7")
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setSuccess("Your message has been sent!");
          setUser({ Name: "", Email: "", Message: "" }); // Clear the form

          // Hide success message after 2 seconds
          setTimeout(() => setSuccess(""), 2000);
        },
        (error) => {
          console.error("Failed to send email:", error);
          setError('There was an error sending your message. Please try again.');

          // Hide error message after 2 seconds
          setTimeout(() => setError(""), 2000);
        }
      );
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Ensure Firebase is initialized
      if (window.firestore) {
        const collectionRef = window.firestore.collection("contacts");
        // Reference to 'contacts' collection
        await collectionRef.add(user); // Add user data to Firestore

        // Send Email using EmailJS
        sendEmail();
      } else {
        throw new Error("Firestore is not initialized");
      }
    } catch (error) {
      setError("There was an error sending your message. Please try again.");
      console.error("Error adding document:", error);

      // Hide error message after 2 seconds
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <div className={`max-w-2xl mx-auto ${error || success ? "mb-16" : ""}`}>
        {error && (
          <div className="bg-red-200 text-red-700 p-2 mb-4 border border-white rounded flex items-center gap-2">
            <img
              src={Failed}
              className="h-5 w-5 object-cover rounded-lg"
              alt="Error"
            />
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-200 text-green-700 p-2 mb-4 border border-white rounded flex items-center gap-2">
            <img
              src={SuccessTick}
              className="h-5 w-5 object-cover rounded-lg"
              alt="Success"
            />
            {success}
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
        <div className="flex-1 mt-8 sm:mt-20 mx-2 sm:mx-4">
          <img
            src={contact}
            alt="Join our mailing list"
            className="w-full h-full object-cover rounded-lg order-2 md:order-1"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-8 text-center">
            Join our Mailing List
          </h1>
          <p className="text-justify text-sm sm:text-base px-8">
            Stay updated with the latest news, game releases, and exclusive offers from
            Yorakeys. Join our mailing list by filling out the form below. We value your
            privacy and ensure your information is safe with us.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-4 sm:mt-8 px-2 sm:px-4 md:px-8"
          >
            <label htmlFor="name" className="block text-sm sm:text-base">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="Name"
              className="p-2 border rounded text-sm sm:text-base text-black"
              placeholder="Enter your name"
              value={user.Name}
              onChange={handleInputChange}
            />
            <label htmlFor="email" className="block text-sm sm:text-base">
              Email<sup className="pl-1 text-red-500">*</sup>
            </label>
            <input
              id="email"
              type="email"
              name="Email"
              className="p-2 border rounded text-sm sm:text-base text-black"
              placeholder="Enter your email"
              required
              value={user.Email}
              onChange={handleInputChange}
            />
            <label htmlFor="message" className="block text-sm sm:text-base">
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              className="p-2 border rounded text-sm sm:text-base text-black"
              rows="4"
              placeholder="Any message you'd like to add"
              value={user.Message}
              onChange={handleInputChange}
            />
            <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm">
              <input type="checkbox" disabled checked className="form-checkbox" />
              <span className="text-xs sm:text-sm">
                I understand that my email ID will be stored
              </span>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-1/2 mt-2 bg-blue-600 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
              >
                JOIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
