import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Example01 from './examples/example01';
import Example02 from './examples/example02';
import Example03 from './examples/example03';
import Example04 from './examples/example04';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/example01">
          <Example01 />
        </Route>
        <Route path="/example02">
          <Example02 />
        </Route>
        <Route path="/example03">
          <Example03 />
        </Route>
        <Route path="/example04">
          <Example04 />
        </Route>
        <Route path="/">
          <nav>
            <ul>
            <li>
                <Link to="/example01">Example #1</Link>
              </li>
              <li>
                <Link to="/example02">Example #2</Link>
              </li>
              <li>
                <Link to="/example03">Example #3</Link>
              </li>
              <li>
                <Link to="/example04">Example #4</Link>
              </li>
            </ul>
          </nav>          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
