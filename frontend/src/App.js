import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
     <Header></Header>
     <Container>
       <h1> Welcome to Dhaka Bazar</h1>
       </Container>
     <Home></Home>
    
    </div>
  );
}

export default App;
