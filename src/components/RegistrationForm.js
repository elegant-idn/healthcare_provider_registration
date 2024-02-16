import React, { useState } from 'react';
import { validateForm } from '../utils/validation';
import { modifyNPINumber, modifyPhoneNumber } from '../utils/modification';
import { PHONE_NUMBER_TEMPLATE, KEY_BACKSPACE } from '../utils/enum';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        npiNumber: '',
        businessAddress: '',
        telephoneNumber: PHONE_NUMBER_TEMPLATE,
        emailAddress: ''
    });

    const [errors, setErrors] = useState({});

    const getLastKey = (origin, current) => {
        if (current.length < origin.length) {
            return KEY_BACKSPACE;
        } else {
            return current[current.length - 1];
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Validate & Modify Form Data
        switch (name) {
            case 'telephoneNumber':
                setFormData({ ...formData, [name]: modifyPhoneNumber(name, formData[name], getLastKey(formData[name], value)) });
                break;
            case 'npiNumber':
                setFormData({ ...formData, [name]: modifyNPINumber(value)});
                break;
            default:
                setFormData({ ...formData, [name]: value });
                break;
        }
        
        // Clear error message when user starts typing again
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Here you can implement logic to submit the form data
            console.log('Form Data:', formData);
            alert("Successfully registered!")
            // Reset the form fields after submission
            setFormData({
                firstName: '',
                lastName: '',
                npiNumber: '',
                businessAddress: '',
                telephoneNumber: PHONE_NUMBER_TEMPLATE,
                emailAddress: ''
            });
        }
    };

    return (
        <div className="registration-container">
            <h2>Healthcare Provider Registration</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className='form-container'>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <div className="error">{errors.firstName}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <div className="error">{errors.lastName}</div>}
                    </div>
                </div>
                <div className='form-container'>
                    <div className="form-group">
                        <label htmlFor="npiNumber">NPI Number:</label>
                        <input
                            type="number"
                            id="npiNumber"
                            name="npiNumber"
                            value={formData.npiNumber}
                            onChange={handleChange}
                        />
                        {errors.npiNumber && <div className="error">{errors.npiNumber}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="businessAddress">Business Address:</label>
                        <input
                            type="text"
                            id="businessAddress"
                            name="businessAddress"
                            value={formData.businessAddress}
                            onChange={handleChange}
                        />
                        {errors.businessAddress && <div className="error">{errors.businessAddress}</div>}
                    </div>
                </div>
                <div className='form-container'>
                    <div className="form-group">
                        <label htmlFor="telephoneNumber">Telephone Number:</label>
                        <input
                            type="string"
                            id="telephoneNumber"
                            name="telephoneNumber"
                            value={formData.telephoneNumber}
                            onChange={handleChange}
                        />
                        {errors.telephoneNumber && <div className="error">{errors.telephoneNumber}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailAddress">Email Address:</label>
                        <input
                            type="text"
                            id="emailAddress"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleChange}
                        />
                        {errors.emailAddress && <div className="error">{errors.emailAddress}</div>}
                    </div>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default RegistrationForm;