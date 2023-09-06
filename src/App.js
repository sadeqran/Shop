import Navbar from "./pages/Navbar";
import Content from "./pages/Content";
import Chat from "./pages/Chat";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Content />
      <Chat />
    </div>
  );
}

export default App;
