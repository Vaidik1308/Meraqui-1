
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Contact from './components/Contact';
import MEngine from './components/MEngine';
import Services from './components/Services';
import About from './components/About';
// import Solutions from './components/Solutions';
import ScrollToTop from './components/ScrollToTop';
import { Missing } from './components/Missing';




function App() {
  return (
    <div className=" App max-w-full min-h-screen bg-white">
      <Header/>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/engine' element={<MEngine/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/> 
          {/* <Route path='/solutions' element={<Solutions/>}/>   */}
          <Route path='/*' element={<Missing/>}/>  
        </Routes>
      </ScrollToTop>
     
      <Footer/>








  
    </div>
  );
}

export default App;
