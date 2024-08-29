// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
        <footer className="portfolio-footer mt-2">
        {/* Link the user back to the homepage. The to prop is used in place of an href */}
        <div> 
       
        <a href="https://github.com/mandi7469"> <i className="bi bi-github pe-2" style={{color: "#65AFFF"}}></i></a>
        <a href="https://www.linkedin.com/in/amanda-changa/"><i className="bi bi-linkedin" style={{color: "#65AFFF"}}></i></a>
        
        </div>
      </footer>
      </main>
    </>
  );
}

export default App;