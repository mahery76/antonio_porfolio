import { useState, useEffect } from "react";
const useWindowWidth = () => {
  const [isClient, setIsClient] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
    );

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return width;
};

export default useWindowWidth;
