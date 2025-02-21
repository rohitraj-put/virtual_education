import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    const timeout = setTimeout(scrollToTop, 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
export default ScrollTop;
