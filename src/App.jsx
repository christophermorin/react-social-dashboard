import Nav from './components/Nav'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Footer from './components/Footer'
import {useState}  from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(true) 
  function toggleDarkmode () {
        setDarkMode(prevState => !prevState)
    }
  const mode = darkMode ? '' : 'light--'
  
  return (
    <div className={`${mode}main--body`}>
      <Nav toggleDarkmode={toggleDarkmode} darkMode={darkMode} mode={mode}/>
      <Hero mode={mode}/>
      <Overview mode={mode}/>
      <Footer mode={mode}/>
    </div>
  )
}

export default App
