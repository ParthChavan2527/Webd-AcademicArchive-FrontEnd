import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminBgAni from './AdminbgAni';
import AdminUpload from './AdminUpload';
import '../Public/Css/admin_bg.css';

export default function Admin() {
  const [mode, setMode] = useState('light');

  const handleDarkMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
        <AdminNavbar handleDarkMode={handleDarkMode} mode={mode} />
            <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <AdminBgAni />
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}>
          <AdminUpload />
        </div>
      </div>
    </>
  );
}
