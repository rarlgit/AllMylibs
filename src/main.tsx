import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './components/Button'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>AllMylibs - React Components Library</h1>
      <p>Test your components locally before publishing to NPM</p>
      
      <div className="components-showcase">
        <h2>Component Examples</h2>
        
        <div className="button-group">
          <h3>Button Component</h3>
          <Button label="Primary Button" variant="primary" />
          <Button label="Secondary Button" variant="secondary" />
          <Button label="Danger Button" variant="danger" />
          <Button label="Disabled Button" disabled />
          <Button 
            label="Click Me" 
            onClick={() => alert('Button clicked!')} 
            variant="primary"
          />
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
