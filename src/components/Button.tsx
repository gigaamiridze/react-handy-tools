import React from 'react';

interface IButtonProps {
  label: string;
  width: number;
  height: number;
  fontSize: number;
  fontColor: string;
  backgroundColor: string;
  borderRadius: number;
}

function Button(props: IButtonProps) {
  const { 
    label, 
    width, 
    height, 
    fontSize,
    fontColor,
    backgroundColor,
    borderRadius 
  } = props;

  return (
    <button style={{
      width: `${width}px`,
      height: `${height}px`,
      fontSize: `${fontSize}px`,
      color: fontColor || 'white',
      backgroundColor: backgroundColor || 'black', 
      borderRadius: `${borderRadius}px`,
    }}>
      {label}
    </button>
  )
}

export default Button;
