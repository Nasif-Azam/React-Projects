import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateBooks = () => {
  // const [book, setBook] = useState({
  //   title: "",
  //   desc: "",
  //   price: null,
  //   cover: "",
  // });  

  // const handleChange = (e) => {
  //   setBook(previous => ({
  //     ...previous, [e.target.name]: e.target.value
  //   }));
  // };
  const navigate = useNavigate();
  const location = useLocation();
  // Find Update book ID
  // console.log(location.pathname.split("/")[2]);
  const bookID = location.pathname.split("/")[2];

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [cover, setCover] = useState('');

  useEffect(()=>{
    axios.get("http://localhost:8081/edit/" + bookID)
    .then(res => {
      setTitle(res.data[0].title);
      setDesc(res.data[0].desc);
      setPrice(res.data[0].price);
      setCover(res.data[0].cover);
      console.log(res.data[0].title)
    })
    .catch(err => console.log(err))
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault(); // Not refresh page but update
    try {
      await axios.put("http://localhost:8081/books/"+bookID, {title, desc, price, cover});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    // <div className='form'>
    //   <h1>Update Book</h1>
    //   <input type='text' placeholder='Title' onChange={handleChange} name='title' />
    //   <input type='text' placeholder='Description' onChange={handleChange} name='desc' />
    //   <input type='number' placeholder='Price' onChange={handleChange} name='price' />
    //   <input type='text' placeholder='Cover' onChange={handleChange} name='cover' />
    //   <button className='formButton' onClick={handleUpdate}>Update</button>
    // </div>
    <div className='form'>
      <h1>Update Book</h1>
      <input type='text' placeholder='Title' onChange={e => setTitle(e.target.value)} value={title}/>
      <input type='text' placeholder='Description' onChange={e => setDesc(e.target.value)} value={desc} />
      <input type='number' placeholder='Price' onChange={e => setPrice(e.target.value)} value={price} />
      <input type='text' placeholder='Cover' onChange={e => setCover(e.target.value)} value={cover} />
      <button className='formButton' onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default UpdateBooks
