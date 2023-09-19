import React from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const useIsMobile = () => {
  const { width: windowWidth } = useWindowSize();
  return !windowWidth ? null : !!windowWidth && windowWidth < 992;
};

export default useIsMobile;
