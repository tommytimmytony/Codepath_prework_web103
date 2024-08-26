import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowCreators from './pages/ShowCreators';
import ViewCreator from "./pages/ViewCreator";
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import Header from "./components/Header";
import "./styles/App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/view" element={<ViewCreator />} />
          <Route path="/add" element={<AddCreator />} />
          <Route path="/edit" element={<EditCreator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
