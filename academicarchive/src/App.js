import React, { useState , useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/SignUp';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import Contributions from './Components/Contribution';
import Upload from './Components/Upload';
import Content from './Components/Content';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Admin from './Components/Admin';
import AdminContributions from './Components/AdminContributions';

function App() {

  const handleDarkMode = ()=>{
    mode === 'light' ? setMode('dark') : setMode('light');
  }

  const [mode , setMode]  = useState('light');

  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const storedUploads = localStorage.getItem('uploads');
    if (storedUploads) {
      setUploads(JSON.parse(storedUploads));
      console.log('Stored uploads:', JSON.parse(storedUploads)); 
    }
  }, []);

  const handleUpload = (upload) => {
    const updatedUploads = [...uploads, upload];
    setUploads(updatedUploads);
    
    localStorage.setItem('uploads', JSON.stringify(updatedUploads));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} /> 
        <Route path="/home" element={<Home handleDarkMode={handleDarkMode} mode = {mode}/>} /> 
        <Route path="/profile" element={<Profile/>} /> 
        <Route path="/settings" element={<Settings/>} /> 
        <Route path="/contribution" element={<Contributions uploads = {uploads}/>} /> 
        <Route path="/upload" element={<Upload onUpload = {handleUpload}/>} /> 
        <Route path="/content" element={<Content/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/admin" element={<Admin />} /> 
        <Route path="/admin/contribution" element={<AdminContributions/>} /> 
      </Routes>
    </Router>
  );

}

export default App;
