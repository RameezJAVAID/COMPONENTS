import React from 'react';

const BAInput = ({ onChange, placeholder }) => {
  return (
    <input type="text" onChange={onChange} placeholder={placeholder} className="form-control" />
  );
};

export default BAInput;
