import { useEffect } from "react";
import Form from "./forms";
import { useTheme } from "pocdemo";
import "pocdemo/src/App.css";
import "pocdemo/src/lib/components/styles/theme.css";

function App() {
  const { setTheme, setFontSize, getFontValue, getThemeValue } = useTheme();
  const theme = getThemeValue();
  const zoom = getFontValue();
  const keydownHandler = (e) => {
    e.preventDefault();
    if (e.keyCode === 32) {
      setTheme();
    }
    if (e.keyCode === 38 || e.keyCode === 40) {
      setFontSize();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, [theme, zoom]);

  return (
    <>
      <div className={`App ${theme}`}>
        <header className={`App-header ${zoom}`}>
          <h2>Hello, I am Accessability POC </h2>
          <Form />
        </header>
      </div>
    </>
  );
}

export default App;
