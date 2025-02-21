import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CookiePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowPopup(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieAccepted", "false");
    setShowPopup(false);
  };

  return (
    showPopup && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 bg-white p-4 shadow-lg rounded-lg w-80 text-center"
      >
        <p className="text-sm text-gray-700">
          We use cookies to improve your experience. By using our site, you
          accept our use of cookies.
        </p>
        <div className="mt-4 flex justify-around">
          <button
            className="w-1/3 bg-blue-600 text-white py-2 rounded"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="w-1/3 bg-red-600 text-white py-2 rounded"
            onClick={handleReject}
          >
            Reject
          </button>
        </div>
      </motion.div>
    )
  );
}
