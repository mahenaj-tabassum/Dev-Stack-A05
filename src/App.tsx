import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="md:bg-white bg-[#f8f6f6]">
      <Navbar />
      <div className="w-[80%] mx-auto">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default App;
