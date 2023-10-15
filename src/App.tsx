import { BrowserRouter, Routes, Route } from "react-router-dom"
import GoHome from './routes/GoHome';
import React from "react";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GoHome />}>

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
