import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/movies" element={<h1>Movies</h1>} />
      <Route path="/serials" element={<h1>Serials</h1>} />

      <Route path="/new" element={<div>
        <h1>Sledujte nové</h1>
        <h2>Seriály</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia maxime vero numquam minus natus deserunt omnis nemo totam eos at illum quam perferendis earum, error distinctio autem eveniet provident itaque!</p>
        <h2>Filmy</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, esse?</p>
      </div>} />
      
    </Routes>
  </BrowserRouter>
}

export default App