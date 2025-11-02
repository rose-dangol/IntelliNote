import React, { useState } from 'react';

const LoginNotebook = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCoverClick = () => {
    setIsOpened(true);
  };

  const handleLogin = () => {
    if (username && password) {
      alert(`Welcome, ${username}!`);
    } else {
      alert('Please fill in all fields');
    }
  };
  return (
    <>
      <div className="canvas">
        <div className={`notepad ${isOpened ? 'opened' : ''}`}>
          <div className="cover" onClick={handleCoverClick}>
            <div className="title"></div>
            <div className="subtitle"></div>
            <button className="get-started-btn">Get Started</button>
          </div>
          <div className="page one">
            <div className="login-form">
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Sign In</button>
            </div>
          </div>
          <div className="page two"></div>
          <div className="page three"></div>
          <div className="page four"></div>
        </div>
        <div className="pencil">
          <div className="edge"></div>
        </div>
      </div>

    </>
  )
}

export default LoginNotebook
