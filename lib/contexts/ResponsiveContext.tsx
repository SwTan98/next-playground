import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const ResponsiveContext = createContext({
  breakpoint: {
    sm: false,
    md: false,
    lg: false,
    xl: false,
  },
});

export function ResponsiveProvider({ children }: { children: ReactElement }) {
  const [width, setWidth] = useState(
    typeof window === "undefined" ? 0 : window?.innerWidth
  );

  const handleResize = () => setWidth(window?.innerWidth);

  const breakpoint = useMemo(() => {
    const Breakpoints = {
      sm: 568,
      md: 768,
      lg: 992,
      xl: 1200,
    };
    return Object.fromEntries(
      Object.entries(Breakpoints).map(([key, value]) => [[key], width >= value])
    );
  }, [width]);

  useEffect(() => {
    if (!window) return;
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={{ width, breakpoint }}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export const useResponsive = () => {
  const responsive = useContext(ResponsiveContext);
  return responsive;
};
