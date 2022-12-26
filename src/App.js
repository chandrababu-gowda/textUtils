import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [darkBtnText, setDarkBtnText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      typ: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleDarkMode = (e) => {
    if (mode === "light") {
      setMode("dark");
      setDarkBtnText("Disable dark mode");
      document.body.style.backgroundColor = "var(--bs-gray-dark)";
      document.body.style.color = "var(--bs-gray-100)";
      showAlert("success", "Enabled dark mode");
    } else {
      setMode("light");
      setDarkBtnText("Enable dark mode");
      document.body.style.backgroundColor = "var(--bs-gray-100)";
      document.body.style.color = "var(--bs-gray-900)";
      showAlert("success", "Enabled light mode");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        displayMode={mode}
        changeDisplayMode={toggleDarkMode}
        btnText={darkBtnText}
      />
      <Alert alertToAlert={alert} />
      <TextForm displayMode={mode} alertToTextForm={showAlert} />
    </>
  );
}

export default App;
