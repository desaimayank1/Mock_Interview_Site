
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Format from './Format.jsx'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Book from './components/Book.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import ProtectedRoute from './Protected/Protectedroute.jsx'
import LoginRoute from './Protected/Loginroute.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Format/>}>
        <Route path='' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='Book' element={<ProtectedRoute><Book/></ProtectedRoute>}/>
        <Route path='About' element={<ProtectedRoute><About/></ProtectedRoute>}/>
        <Route path='Contact' element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
      </Route>
      <Route path='/login' element={<LoginRoute><Login/></LoginRoute>}/>
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
