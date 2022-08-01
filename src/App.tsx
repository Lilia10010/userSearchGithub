import StyleGlobal from "./styles/global";
import Home from "../src/pages/Home";
import Footer from "../src/components/Footer";

const App = () => {
  return (
    <div className="App">
      <StyleGlobal />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
