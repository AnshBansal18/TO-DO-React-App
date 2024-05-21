import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Dataitem = ({ element, index, removeData }) => {
  return (
    <div className="dataval">
      <div>{element.sno}</div>
      <div>{element.name}</div>
      <div>{element.description}</div>
      <div>
        <Button
          onClick={() => removeData(index)}
          variant="contained"
          color="error"
          className="delete-btn"
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default Dataitem;
