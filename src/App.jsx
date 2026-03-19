import AuthScreen from "./Screens/AuthScreen"
import LandingScreen from "./Screens/LandingScreen"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingScreen />} />
       <Route path="/Authorization" element={<AuthScreen />} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
