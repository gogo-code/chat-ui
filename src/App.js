import React from 'react';
import './App.css';
import Button from './Button';
import useColorSwitch from './useColorSwitch';
function App() {
  const [color, handleButtonClick1] = useColorSwitch()
  const [color2, handleButtonClick2] = useColorSwitch("#0000ff","#ff00ff")
 
  return (
    <div className="App">
      <Button onClick={handleButtonClick1} label="按钮"></Button>
      <p style={{ color }}>这是第一段文本</p>
      <Button onClick={handleButtonClick2} label="点我"></Button>
      <p style={{ color:color2 }}>这是第二段文本</p>
    </div>
  );
}

export default App;
