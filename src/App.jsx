import { Route, Routes } from "react-router-dom"
import Header from "./Components/molecules/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"
import Footer from "./Components/molecules/Footer"

function App() {
  return (
    <div className="w-full min-h-screen bg-primary font-primary overflow-x-hidden">
      <Header />
      <main className="relative pt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App