import React from 'react';
import MyFlowComponent from './components/flowComponent'
import 'reactflow/dist/style.css';
import './App.css';


function App() {
  return (
  <div className="App">
  <h1>My React Flow App</h1>
  <MyFlowComponent /> 
</div>
  )
}

export default App;
