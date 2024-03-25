// App.js
import './App.css';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Home } from './components/home';
import { AboutMe } from './components/aboutme';
import { Researches } from './components/researches';
import { Achievements } from './components/achievements';
import { Links } from './components/links';
import { ContactMe } from './components/contactme';
import { NewsItem } from './components/NewsItem';
import { NewsList } from './components/NewsList';
import { useState } from 'react';
import { LAST_UPDATE } from './lastUpdate';

// ページ遷移にフェードイン・アウトのアニメーションを適用
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/aboutme', name: 'About Me', Component: AboutMe },
  { path: '/researches', name: 'Research', Component: Researches },
  { path: '/achievements', name: 'Achievements', Component: Achievements },
  { path: '/links', name: 'Links', Component: Links },
  { path: '/contactme', name: 'Contact Me', Component: ContactMe },
  { path: '/news/:id', name: 'News Item', Component: NewsItem },
  { path: '/news', name: 'News List', Component: NewsList },
];

function App() {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header_title'><NavLink exact to="/" className="header_link_title" onClick={() => setIsOpen(false)}>Dai Nakai</NavLink></h1>
        <nav className="header_nav">
          <ul className='header_menu'>
            {routes.slice(1, 6).map(route => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className="header_link"
                  activeClassName="header_active_link"
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`hamburger_menu ${isOpen ? 'open' : ''}`} onClick={handleHamburgerClick}>
          <div className="hamburger_menu_line"></div>
          <div className="hamburger_menu_line"></div>
          <div className="hamburger_menu_line"></div>
        </div>
      </header>

      <nav className={`mobile_menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {routes.slice(1, 6).map(route => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className="header_link"
                activeClassName="header_active_link"
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`App-body ${isOpen ? 'open' : ''}`}>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            <Routes location={location}>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
        <footer className="App-footer">
          <p className='footer_text'>Latest update: {LAST_UPDATE}
           © 2024 Dai Nakai</p>
        </footer>
    </div>
  );
}

export default App;