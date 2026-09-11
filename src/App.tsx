import { Suspense, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologySection from "./components/TechnologySection";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";

const fetchDevStackData = async () => {
  const response = await fetch("/data/technology.json");
  const data = await response.json();
  return data;
};

const App = () => {
  const [devStackDataPromise] = useState(() => fetchDevStackData());
  return (
    <>
      <ToastContainer position="top-right" />
      <div className="md:bg-white bg-[#f8f6f6]">
        <Navbar />
        <div className="w-[85%] mx-auto">
          <Hero />
          <Suspense fallback={<Loading />}>
            <TechnologySection devStackDataPromise={devStackDataPromise} />
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
