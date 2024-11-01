
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Format from './Format.jsx'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Book from './components/Book.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login/>}/>
       <Route path='/for' element={<Format/>}>
        <Route path='' element={<Home/>}/>
        <Route path='Book' element={<Book/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Route>
    </>
  )
)
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
