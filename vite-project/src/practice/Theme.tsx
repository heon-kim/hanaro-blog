import { createContext, useContext, useState, ReactNode } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};
type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("error");
  }

  const { theme, toggleTheme } = context;

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px 20px",
    marginTop: "20px",
  };

  return (
    <button onClick={toggleTheme} style={styles}>
      Toggle Theme
    </button>
  );
}

function Theme() {
  return (
    <ThemeProvider>
      <h1>Theme Switcher</h1>
      <ThemeButton />
    </ThemeProvider>
  );
}

export default Theme;
