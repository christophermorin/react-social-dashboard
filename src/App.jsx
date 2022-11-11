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

  if(darkMode){
    document.querySelector('body').style.background = "linear-gradient(to top, hsl(230, 17%, 14%) 75%,hsl(232, 19%, 15%) 25% )"
  }
  else{
    document.querySelector('body').style.background = "linear-gradient(to top, hsl(0, 0%, 100%) 75%,hsl(225, 100%, 98%) 25% )"
  }
  
  return (
    <div className={`${mode}main--body`}>
      <Nav 
        toggleDarkmode={toggleDarkmode} 
        darkMode={darkMode} 
        mode={mode}/>
      <Hero mode={mode}/>
      <Overview mode={mode}/>
      <Footer mode={mode}/>
    </div>
  )
}

export default App
