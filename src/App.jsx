import "./App.css";
import { Search } from "./components/Search/Search";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <div className="card">
      <Title />
      <Search />
    </div>
  );
}

export default App;
