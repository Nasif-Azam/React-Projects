import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import AddBooks from "./pages/AddBooks";
import UpdateBooks from "./pages/UpdateBooks";
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add_books" element={<AddBooks/>}/>
          <Route path="/update_book/:id" element={<UpdateBooks/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
