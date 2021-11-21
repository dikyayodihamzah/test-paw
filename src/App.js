import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MahasiswaList from "./components/MahasiswaList";
import EditMahasiswa from "./components/EditMahasiswa";
import AddMahasiswa from "./components/AddMahasiswa";

function App() {
  return (
    <Router>
    <Navbar />
    <br />
    <Routes>
      <Route exact path="/" component={MahasiswaList} />
      <Route path="/update/:id" component={EditMahasiswa} />
      <Route path="/add" component={AddMahasiswa} />
    </Routes>
  </Router>
  );
}

export default App;