import "./App.css";
import { Header } from "./components/layout/Header";
import { Catalog } from "./components/layout/Catalog";
import { Footer } from "./components/layout/Footer";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Header />
      <Catalog />
      <Toaster richColors duration={2000} position="top-center" />
      <Footer />
    </>
  );
}

export default App;
