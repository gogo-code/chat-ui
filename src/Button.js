import React from 'react';




function Button({ onClick, label, children }) {
  return (
    <div onClick={onClick}>
      <button>{label}</button>
    </div>
  );
}
export default Button;
