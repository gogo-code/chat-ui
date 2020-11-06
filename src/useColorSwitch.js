
import { useState } from 'react';
// 自定义hooks
function useColorSwitch(color1="#ff0000",color2="#00ff00"){
  const [color, setColor] = useState(color1);
  const handleButtonClick = () => {
    setColor('#00ff00');
  };
  return [color,handleButtonClick]
}
export default useColorSwitch;