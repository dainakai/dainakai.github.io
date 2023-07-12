import './App.css';
import SlideRoutes from 'react-slide-routes';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import { Home } from './components/home';
import { AboutMe } from './components/aboutme';
import { Researches } from './components/researches';
import { Achievements } from './components/achievements';
import { Links } from './components/links';
import { ContactMe } from './components/contactme';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className='header_title'><NavLink exact to="/" className="header_link_title">Dai Nakai</NavLink></h1>
          <nav className='header_nav'>
            <ul className='header_menu'>
              <li><NavLink to="/aboutme" className="header_link">About me</NavLink></li>
              <li><NavLink to="/researches" className="header_link">Research</NavLink></li>
              <li><NavLink to="/achievements" className="header_link">Achievements</NavLink></li>
              <li><NavLink to="/links" className="header_link">Links</NavLink></li>
              <li><NavLink to="/contactme" className="header_link">Contact me</NavLink></li>
            </ul>
          </nav>
        </header>

        <div className="App-body">
          <SlideRoutes duration={500}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/aboutme"} element={<AboutMe />} />
            <Route path={"/researches"} element={<Researches />} />
            <Route path={"/achievements"} element={<Achievements />} />
            <Route path={"/links"} element={<Links />} />
            <Route path={"/contactme"} element={<ContactMe />} />
          </SlideRoutes>
        </div>
        <hr />
        <footer className="App-footer">
          <p className='footer_text'>Latest update: 2023/07/12
           © 2023 Dai Nakai</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;
