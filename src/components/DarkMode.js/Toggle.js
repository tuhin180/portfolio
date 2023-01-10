import React, { useEffect, useState } from "react";

const Toggle = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheming = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="form-control">
        <label className="cursor-pointer label">
          <input
            onChange={handleTheming}
            type="checkbox"
            className="toggle toggle-primary"
          />
        </label>
      </div>
    </div>
  );
};

export default Toggle;
