import './App.css';
import AnimatedRoutes from '../../components/AnimatedRoutes';
import NavBar from '../../components/NavBar';

export default function App() {

  return (
    <div className="App">
      <div className='App-body'>
        <AnimatedRoutes />
      </div>
      <NavBar />
    </div>
  );
}