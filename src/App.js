import Header from "./Header/Index";
import Services from "./ServiceSlide/Services";
import Discount from "./Discount/Index";
import Gallery from "./Gallery/Gallery";
import Commun from "./Commun/Commun";
import Footer from "./Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Chat from "./Chat";
AOS.init();

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Services />
      <Discount />
      <div className="p-10"></div>
      <div className="advertise dollar"></div>
      <div className="p-10"></div>
      <div className="advertise faj">محصولات برتر</div>
      <div className="p-10"></div>
      <Gallery />
      <div className="p-10"></div>
      <div className="advertise faj">راه های ارتباطی</div>
      <div className="p-10"></div>
      <Commun />
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
