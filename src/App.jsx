import "./styles.css";
import { Counter } from "./components/Counter";
const value = 11;
export default function App() {
  return (
    <div className="App">
      <Counter val={value} />
    </div>
  );
}
