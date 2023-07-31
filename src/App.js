import Header from "./Header/Index";
import Services from "./ServiceSlide/Services";
import Discount from "./Discount/Index";

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Services />
      <Discount />
      <div className="p-2"></div>

    </div>
  );
}

export default App;
