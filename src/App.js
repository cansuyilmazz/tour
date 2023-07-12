import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Cards/Card";
import { data } from "./helpers/data";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="card-container">
        {data.map(({ id, title, desc, image }) => (
          <Card key={id} title={title} desc={desc} img={image} />
        ))}
      </div>
    </div>
  );
};

export default App;
