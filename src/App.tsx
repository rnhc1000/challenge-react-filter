import { BrowserRouter, Routes, Route } from "react-router-dom"
import GoHome from './routes/GoHome';
import { useState } from "react";
import { ContextProductCount } from "./utils/products-context";

function App() {

  const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (
    <>
      <ContextProductCount.Provider value={{ contextProductCount, setContextProductCount }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GoHome />}>

            </Route>

          </Routes>
        </BrowserRouter>
      </ContextProductCount.Provider>
    </>
  )
}

export default App
