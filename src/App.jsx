import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const getLocalItems = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  }
  return [];
};

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState(getLocalItems);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(data));
  }, [data]);

  const addData = () => {
    if (name.trim() !== '' && description.trim() !== '') {
      setData([...data, { sno: data.length + 1, name, description }]);
      setName('');
      setDescription('');
    } else {
      alert('Please enter both name and description.');
    }
  };

  const removeData = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h3>What's your plan for today !!!</h3>
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
        <div className="data">
          <div className="dataval">
            <div>Sno</div>
            <div>Name</div>
            <div>Description</div>
            <div>Remove</div>
          </div>
          {data.map((element, index) => (
            <div className="dataval" key={index}>
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
          ))}
        </div>
      </div>
    </>
  );
}
export default App;