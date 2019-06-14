import React from 'react';

const Title = props => {
  return (
    <div className='container mt-2 mb-2 text-info'>
      <h1 className='text-center text-capitalize'>
        <span className='text-dark'>{props.name} </span>
        {props.title}
      </h1>
    </div>
  );
};

export default Title;
