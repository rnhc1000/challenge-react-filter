import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import { ContextProductCount } from "./utils/products-context";
import GoHome from './routes/GoHome';

function App() {

  const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (

    <>
      <ContextProductCount.Provider value={{ contextProductCount, setContextProductCount }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GoHome />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextProductCount.Provider>
    </>
  )

}

export default App
