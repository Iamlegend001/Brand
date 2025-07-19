import React from 'react'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import MainRoutes from './Routes/MainRoutes'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainRoutes/>
      {/* <Footer/> */}
    </div>
  )
}

export default App