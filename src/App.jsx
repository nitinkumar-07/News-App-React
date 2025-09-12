import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'
import { useState, useContext, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [articles, setArticles] = useState([])
  // const [category, setCategory] = useState("general")
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <BrowserRouter>
      <Navbar setArticles={setArticles} />
      <Routes>
        <Route path='/' element={<News country="in" category="general" articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/business' element={<News country="in" category="business" articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/entertainment' element={<News country="in" category="entertainment" articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/health' element={<News country="in" category="health" articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/science' element={<News country="in" category="science" articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/sports' element={<News country="in" category="sports" articles={articles} setArticles={setArticles} />}></Route>
        <Route path='/technology' element={<News country="in" category="technology" articles={articles} setArticles={setArticles} />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App

