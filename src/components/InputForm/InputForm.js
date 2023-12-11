import React, { useState } from 'react';
import classes from './Input.module.css';
import Input from "../UI/Input";

const InputForm = (props) => {
  const [candyName, setCandyName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const submitFormHandler = (e) => {
    e.preventDefault();
    const detail = {
      candyName: candyName,
      description: description,
      price: price,
    };
    props.getData(detail);
    console.log(detail);

    setCandyName('');
    setDescription('');
    setPrice('');
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        type="text"
        label="Candy Name"
        value={candyName}
        onChange={(e) => setCandyName(e.target.value)}
      />
      <Input
        type="text"
        label="Description"
        value
        ={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        type="number"
        label="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default InputForm;
