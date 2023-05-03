import logo from './logo.svg';
import './App.css';

function App() {

  const number = 555;
  const person = {
    name: 'Abdur Rahman',
    job: 'ML engineer'
  }

  const personStyle = {
    backgroundColor: 'red',
    color: 'white'
  }

  return (
    <div className="App">
      <Person name="JS library (React)" job="complete specific task"></Person>
      <Person name="JS framework (Angular)" job="provides a structure for developing software applications"></Person>

      <header className="App-header">
        <h3>Welcome to react's world</h3>
        <p>Happy React</p>
        <div className="container">
          <h3>This is inside container...</h3>
          <p>the number is: {47 + 56}</p>
          <h5 style={{ color: 'blue', fontSize: "40px" }}>Person name: {person.name + ' shajib'}</h5>
          <h5 style={personStyle}>Person profession: {person.job}</h5>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Machine Learning is Love...</h3>
      </header>

    </div>
  );
}

function Person(props) {
  console.log(props);
  const person = {
    borderRadius: "20px"
  }
  return (
    <div className='person' style={person}>
      <h2>Name: {props.name}</h2>
      <h4>Profession: {props.job}</h4>
    </div>
  );
}

export default App;
