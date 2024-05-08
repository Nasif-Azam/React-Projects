import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBooks = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook(previous => ({
            ...previous, [e.target.name]: e.target.value
        }));
    };
    const handleClick = async (e) => {
        e.preventDefault(); // Not refresh page but update
        try {
            await axios.post("http://localhost:8081/books", book);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formdata = new FormData();
    //     formdata.append("name", data.name);
    //     formdata.append("email", data.email);
    //     formdata.append("password", data.password);
    //     formdata.append("address", data.address);
    //     formdata.append("salary", data.salary);
    //     formdata.append("image", data.image);
    //     axios.post('http://localhost:8081/create', formdata)
    //         .then(res => {
    //             navigate('/employee')
    //         })
    //         .catch(err => console.log(err));
    // }

    return (
        // <div className='form' onSubmit={handleSubmit}>
        <div className='form'>
            <h1>Add New Books</h1>
            <input type='text' placeholder='Title' onChange={handleChange} name='title' />
            <input type='text' placeholder='Description' onChange={handleChange} name='desc' />
            <input type='number' placeholder='Price' onChange={handleChange} name='price' />
            <input type='text' placeholder='Cover' onChange={handleChange} name='cover' />
            <div className="col-12 mb-3">
                <label className="form-label" htmlFor="inputGroupFile01">Select Image</label>
                <input type="file" className="form-control" id="inputGroupFile01" />

                {/* onChange={e => setData({ ...data, image: e.target.files[0] })} */}
            </div>
            <button className='formButton' onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddBooks
