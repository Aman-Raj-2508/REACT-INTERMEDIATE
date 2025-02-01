import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import { Link, NavLink } from 'react-router-dom';
import MainHeader from './components/MainHeader';
function App() {


  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>

        {/* Here we only made div to render different things.But if there is many thing in a homepage the this is no th way.We will make components */}
        {/* <Route path="/" element={<div>Home Page</div>} />
        <Route path="/support" element={<div>Support Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/labs" element={<div>Lab Page</div>} />
        <Route path="*" element={<div>Not Found Page</div>} /> */}

        {/* <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} /> */}

        {/* Nested Routing */}
        {/* Parent Route is Home */}
        <Route path='/' element={<MainHeader />}>
          {/* Default route */}
          <Route index element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />

        </Route>


      </Routes>

    </div>
  );
}

export default App;
