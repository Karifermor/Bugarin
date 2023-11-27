import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'

import './App.css'
import About from './components/about'
import Decor from './components/decor'
import Events from './components/events'
import Contact from './components/contact'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/decor' element={<ItemListContainer/>}></Route>
        <Route path='/events' element={<Events/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
