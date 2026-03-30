import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveMessage({ name: form.name, email: form.email, message: form.message });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;