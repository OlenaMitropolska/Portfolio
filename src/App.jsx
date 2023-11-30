import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import Errorpage from './components/Errorpage';
import MyProjects from './components/MyProjects';
import portfolioData from "./data/data.json"
import { useState } from 'react';


function App() {

  const [data, setData] = useState(portfolioData)
  // console.log(data[0].name);
 

  return (
    <div className="App">

<Nav />

<div className='main'>
  {/* here create other components and some stuff, nav and footer keep outside so they are throughout all pages */}
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/*' element={<Errorpage />} />
    <Route path='/myprojects' element={<MyProjects data={data} />} />
    {/* {data.map(i => <Card i={i}/>)} */}
  </Routes>
</div>



<Footer />
    </div>
  );
}

export default App;
