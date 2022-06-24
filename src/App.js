import { Routes, Route, NavLink ,Navigate} from 'react-router-dom'
import Page from './components/Page'
import Destination from './components/Destination'
import Experiences from './components/Experiences'
import Help from './components/Help'
import Telangana from './components/Telangana'
import Maha from './components/Maha'
import Up from './components/Up'
import Tamil from './components/Tamil'
import Andhra from './components/Andhra'
import Jammu from './components/Jammu'



function App() {
  return (
    <div >

      {/* navbar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Incredible India</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* link for home */}
              <li className="nav-item">
                <NavLink className="nav-link" to=""></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Destination">Destination</NavLink>
              </li>
              {/* link for users */}
              <li className="nav-item">
                <NavLink className="nav-link" to="Experiences">Experiences</NavLink>
              </li>
                           
              <li className="nav-item">
                <NavLink className="nav-link" to="Help">Help</NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>


      {/* Create routes for components */}
      <Routes>
        <Route path="" element={<Page/>}/>
        {/* route for home */}
        <Route path="Destination" element={ <Destination />} >
        
         <Route path="Telangana" element={<Telangana/>}/>
         <Route path="Maha" element={<Maha/>}/>
         <Route path="Up" element={<Up/>}/>
         <Route path="Tamil" element={<Tamil/>}/>
         <Route path="Andhra" element={<Andhra/>}/>
         <Route path="Jammu" element={<Jammu/>}/>
      </Route>

        {/* router for users */}
        <Route path="Experiences" element={<Experiences />} />
        
        <Route path='Help' element={<Help/>}/> 

      </Routes>

    </div>
  );
}

export default App;
