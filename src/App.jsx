import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterPage from "./pages/counter/CounterPage";
import TodoPage from "./pages/todo/TodoPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
