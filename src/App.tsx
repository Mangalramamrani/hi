import {  Routes, Route } from 'react-router-dom';
import  {
  Home,
  Services,
  About,
  Contact,
  Workflow
} from './pages'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-workflow" element={<Workflow />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App