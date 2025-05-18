import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Example1 from './states/Example1.jsx'
import Example2 from './states/example2.jsx'
import Example3 from './states/example3.jsx'
import parent from './props/parent.jsx'
import Parent3 from './props/Parent3.jsx'
import Parent4 from './props/parent4.jsx'
import Grandparent from './props/propsDrilling.jsx'
import GrandparentContext from './context/ContextParent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   {/* <Header/>
    <>
    <p>priti</p></>
    <Footer/> */}
{/* 
  <Example1/>
  <Example2/>
  
<Example3/>
<parent/> */}

{/* <Parent3/> */}

{/* <Parent4/> */}
{/* <Grandparent/> */}
<GrandparentContext/>









  </StrictMode>,
)
