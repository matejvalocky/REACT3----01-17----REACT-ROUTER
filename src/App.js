import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/movies" element={<h1>Movies</h1>} />
      <Route path="/serials" element={<h1>Serials</h1>} />
      <Route path="/new" element={<h1>New</h1>} />
    </Routes>
  </BrowserRouter>
}

export default App