import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [history, setHistory] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleShorten = () => {
    if (!url.trim()) return;

    const short = `short.ly/${Math.random().toString(36).substring(7)}`;
    const newEntry = { original: url, shortened: short };

    setHistory([newEntry, ...history]);
    setUrl('');
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1000);
  };

  return (
    <div className="container">
      <h2>URL Shortener</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleShorten}>Shorten</button>
      </div>

      <div className="history-title">Shortened History</div>
      <div className="history">
        {history.map((item, index) => (
          <div key={index} className="history-item">
            <p><strong>Original:</strong> {item.original}</p>
            <p>
              <strong>Shortened:</strong> {item.shortened}{' '}
              <button
                className="copy-btn"
                onClick={() => handleCopy(item.shortened, index)}
              >
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
