import Navbar from "./layouts/initial/Navbar";
import Content from "./pages/Content";
import Chat from "./layouts/initial/Chat";
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
