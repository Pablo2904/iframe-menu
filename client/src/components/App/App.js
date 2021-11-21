import "./App.css";
import { useEffect, useState } from "react";
import Menu from "../Menu";
import { useNavigate } from "react-router-dom";

function App() {
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState("");
  const [selectedUrl, setSelectedUrl] = useState("");
  const [selectedSlug, setSelectedSlug] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const defaultError = "Something went wrong, please try again later.";
    const getMenu = async () => {
      try {
        const req = await fetch("http://localhost:3001/api/v1/menu");
        if (req.status !== 200) {
          setError(defaultError);
        } else {
          const data = await req.json();
          setMenuData(data);
        }
      } catch (error) {
        setError(error && error.message ? error.message : defaultError);
      }
    };
    getMenu();
  }, []);

  return (
    <div className="App">
      {error && <div className="error">{error}</div>}
      {menuData.length > 0 &&
        Menu({
          items: menuData,
          setSelectedUrl,
          setSelectedSlug,
          navigate,
        })}
      <main>
        <div className="container">
          {selectedUrl && (
            <iframe
              className="responsive-iframe"
              title={selectedSlug}
              src={selectedUrl}
              frameBorder="0"
              sandbox="allow-top-navigation allow-scripts allow-forms"
            ></iframe>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
