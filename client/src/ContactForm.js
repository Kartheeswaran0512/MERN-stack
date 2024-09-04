// src/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, like sending data to a server
        console.log('Form data submitted:', formData);
        // Clear the form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="name">Name:</label>
                <input
                    style={inputStyle}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="email">Email:</label>
                <input
                    style={inputStyle}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="message">Message:</label>
                <textarea
                    style={textareaStyle}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button style={buttonStyle} type="submit">Submit</button>
        </form>
    );
};



const formStyle = {
    
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
};

const formGroupStyle = {
    marginBottom: '15px'
};

const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
    color : '#FFFFFF'
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc'
};

const textareaStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px'
};

const buttonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
};
export default ContactForm;