import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";

function App() {
  const [listes, setListes] = useState([
    { title: "Faire les courses", status: false },
    { title: "Aroser les plantes", status: false },
  ]);
  const [text, setText] = useState("");
  return (
    <div className="box-app">
      <Header />
      <div className="contenu">
        <Section
          listes={listes}
          setListes={setListes}
          text={text}
          setText={setText}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
