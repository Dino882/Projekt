import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from './constants'
import Pocetna from './pages/Pocetna'
import IgraciDodaj from './pages/igraci/IgraciDodaj'
import Igraci from './pages/igraci/Igraci'
import IgraciPromjena from './pages/igraci/IgraciPromjena'


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path={RoutesNames.HOME} element={<Pocetna />} />

        <Route path={RoutesNames.IGRAC_PREGLED} element={<Igraci />} />
        <Route path={RoutesNames.IGRAC_NOVI} element={<IgraciDodaj />} />
        <Route path={RoutesNames.IGRAC_PROMJENI} element={<IgraciPromjena />} />
        
      </Routes>
    </>
  )
}

export default App
