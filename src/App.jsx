import { Route, Routes } from "react-router-dom"
import Header from "./Components/molecules/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"

function App() {
  return (
    <div className="w-full min-h-screen bg-primary font-primary overflow-x-hidden">
      <Header />
      <main className="relative pt-[160px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App