import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <h1>Contact Me</h1>

      <div className="contact-info">
        <p>Email: <a href="mailto:ganaendra@gmail.com">ganaendra@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ganaendra-ravindra/" target="_blank" rel="noopener noreferrer">Ganaendra Ravindra</a></p>
        <p>GitHub: <a href="https://github.com/gananana97" target="_blank" rel="noopener noreferrer">gananana97</a></p>
      </div>

      <form>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.name && <span>{errors.name}</span>}
        </label>

        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.email && <span>{errors.email}</span>}
        </label>

        <label>
          Message:
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.message && <span>{errors.message}</span>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
