import "./App.css";
import Card from "./pages/Card";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function App() {
  return <div className="App">
    <div className="container">
      <input placeholder="city name search"/>
      <button type="submit">Search</button>
      <Card/>
    </div>
  </div>;
}

export default App;
