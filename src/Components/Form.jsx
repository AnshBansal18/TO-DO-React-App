import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Form = ({ name, description, setName, setDescription, addData }) => {
  return (
    <div className="form">
      <Stack spacing={2} direction="row">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="standard"
          InputProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Description"
          variant="standard"
          InputProps={{
            style: { color: 'white' },
          }}
        />
        <Button onClick={addData} variant="contained" color="success">
          <AddIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Form;
