import Navbar from './component/navbar/navbar'
import './App.css'
import Home from './pages/Home/Home'
import FindDoctor from './pages/FindDoctor/FindDoctor'
import SignUp from './component/SignUp/SignUp'
import About from './pages/About/About'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='findDoctor' element={<FindDoctor />} />
      <Route path='about' element={<About />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
      {/* <Home /> */}
      {/* <SignUp /> */}
      {/* <FindDoctor /> */}
      {/* <About /> */}



    </>
  )
}

export default App
