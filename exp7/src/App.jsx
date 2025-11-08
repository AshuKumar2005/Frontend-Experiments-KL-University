import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import BookList from './BookList'
import BookDetail from './BookDetail'
import './App.css'

function App() {
  const [books] = useState([
    { id: 1, title: "India that is Bharat", author: "J. Sai Deepak", desc: "Explores colonial roots of India's constitution and advocates for a decolonized understanding of Indian civilization", rating: 4.4 },
    { id: 2, title: "Hindus in Hindu Rashtra:", author: "Anand Ranganathan", desc: "Critique of marginalization of Hindus in India and challenges faced by the majority community in a secular democracy", rating: 4.5 },
    { id: 3, title: "Dark Stars to Black Holes", author: "Abhijit Chavda", desc: "Traces the evolution of black hole theory and highlights contributions of Indian scientists", rating: 4.5 },
]);


  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/book/:id" element={<BookDetail books={books} />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App;
