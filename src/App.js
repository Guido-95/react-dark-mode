
import './App.css';
import data from './data';
import Article from './components/Article'
import {useState,useEffect} from 'react';


function App() {
  const controlThemeLocalStorage = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      return "light-theme";
    }
  }
  const [theme, setTheme] = useState(controlThemeLocalStorage());
  
  useEffect(()=>{
    
   
  
    if(theme ==='dark-theme'){
      document.body.style.setProperty('transition', '0.5s');
      document.body.classList.add('dark-theme-body')
    }else{
      document.body.classList.remove('dark-theme-body')
    }
      
    
      
    localStorage.setItem("theme", theme);
  },[theme]);

  const cambiaTema = ()=>{
    if(theme === "light-theme"){
      setTheme("dark-theme");

    }else{
      setTheme("light-theme");
    }
  }
 
  return (
    <div className="App">
     
      <button className={` ${theme ==='dark-theme' ? 'dark-theme-button' : 'change-theme'} `} onClick={cambiaTema}>cambia</button>
      <div className='articles'>
        {data.map(el=>{
          return <Article {...el} tema={theme} key={el.id}/>
        })}
       </div>
    </div>
  );
}

export default App;
