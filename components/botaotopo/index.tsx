import { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const checkScrollTop = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 bg-orange-500 text-white rounded-full shadow-lg transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      &#8679;
    </button>
  );
};

export default BackToTopButton;
