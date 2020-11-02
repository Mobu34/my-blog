import "./App.css";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <NavigationMenu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
