import './App.css';
import TitlePage from './TitlePage';

export default function App() {
  return (
    <div className="App">
      <body className='App-body'>
        <TitlePage />
      </body>
      <header className="App-nav">
        <a className='active' href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Projects</a>
        <a href='/'>Skills</a>
        <a href='/'>Experience</a>
        <a href='/'>Certifications</a>
        <a href='/'>Contact</a>
      </header>
    </div>
  );
}