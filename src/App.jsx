import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Maths from './pages/Maths.jsx'
import Education from './pages/Education.jsx'
import Contact from './pages/Contact.jsx'
import Sublyne from './pages/Sublyne.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sublyne" element={<Sublyne />} />
        <Route path="/sublyne.html" element={<Sublyne />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
