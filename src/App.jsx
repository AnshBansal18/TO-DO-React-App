import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Data from './Components/Data';

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
        <Form 
          name={name} 
          description={description} 
          setName={setName} 
          setDescription={setDescription} 
          addData={addData} 
        />
        <Data 
          data={data} 
          removeData={removeData} 
        />
      </div>
    </>
  );
}

export default App;
