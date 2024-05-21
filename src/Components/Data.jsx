import React from 'react';
import Dataitem from './Dataitem';

const Data = ({ data, removeData }) => {
  return (
    <div className="data">
      <div className="dataval">
        <div>Sno</div>
        <div>Name</div>
        <div>Description</div>
        <div>Remove</div>
      </div>
      {data.map((element, index) => (
        <Dataitem key={index} element={element} index={index} removeData={removeData} />
      ))}
    </div>
  );
};

export default Data;
