import React from 'react';

const BAButton = (props) => {
  const { btnValue, btnClick, style, className } = props;

  return (
    <button
      onClick={btnClick}
      style={style}
      className={className || 'btn btn-danger'}
    >
      {btnValue}
    </button>
  );
};

export default BAButton;
