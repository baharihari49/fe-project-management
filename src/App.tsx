import { Sidebar } from './layouts/sidebar'
import { Navbar } from './layouts/navbar';
import {Main} from "./layouts/main"
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <div className=''>
          <Navbar/>
          <Sidebar />
        </div>
        <Main />
      </Router>
    </>
  )
}

export default App
