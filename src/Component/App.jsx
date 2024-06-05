
import Accordion from './Accordion/Accordion'
import './App.css'
import Best from './Best/Best'
import Cinama from './Cinama/Cinama'
import Comment from './Comment/Comment'
import Device from './Device/Device'
import Doll from './Doll/Doll'
import End from './Footer/End'
import Footer from './Footer/Footer'
import Freecontent from './Freecontent/Freecontent'
import How from './How/How'
import Menu from './Menu/Menu'
import Slider from './Slider/Slider'

function App() {
  
  return (
    <div className='flex justify-center flex-col w-[100%]'>
    <Menu/>
    <Slider/>
    <Best/>
    <Device/>
    <How/>
    <Freecontent/>
    <Doll/>
    <Cinama/>
    <Comment/>
    <Accordion/>
    <Footer/>
    <End/>
    
    </div>
  )
}

export default App
