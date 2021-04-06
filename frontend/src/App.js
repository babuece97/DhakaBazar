import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Review from './components/Review/Review';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Container>
        <h1> Welcome to Subhah's world</h1>
      </Container>

      <div>
        <Header></Header>

        <Router>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/review'>
              <Review></Review>
            </Route>
            <Route path='/order'>
              <Order></Order>
            </Route>
            <Route path='/admin'>
              <Admin></Admin>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
