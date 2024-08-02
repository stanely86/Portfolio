import React, { forwardRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = forwardRef(({ children, type, onClick, classes }, ref) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render nothing until mounted on the client
  if (!mounted) {
    return null;
  }

  // Determine the button class names based on theme and type
  const classNames = `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
    type === "primary"
      ? theme === "dark"
        ? "bg-white text-black"
        : "bg-black text-white"
      : `flex items-center transition-all ease-out duration-300 ${
          theme === "dark" ? "hover:bg-slate-600 text-white" : "hover:bg-slate-100"
        } hover:scale-105 active:scale-100  tablet:first:ml-0 ${
          data.showCursor && "cursor-none"
        } ${classes} link`
  }`;

  return (
    <button
      onClick={onClick}
      type="button"
      className={classNames}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
