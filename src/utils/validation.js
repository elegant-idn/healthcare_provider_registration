export const validateForm = (data) => {
    const errors = {};
    // Validate each field
    if (!data.firstName.trim()) {
        errors.firstName = 'First Name is required';
    }
    if (!data.lastName.trim()) {
        errors.lastName = 'Last Name is required';
    }
    if (!data.npiNumber.trim()) {
        errors.npiNumber = 'NPI Number is required';
    }
    if (!data.businessAddress.trim()) {
        errors.businessAddress = 'Business Address is required';
    }
    if (data.telephoneNumber.indexOf('_') >= 0) {
        errors.telephoneNumber = 'Telephone Number must be 10 digits';
    }
    if (!data.emailAddress.trim()) {
        errors.emailAddress = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(data.emailAddress.trim())) {
        errors.emailAddress = 'Email Address is invalid';
    }
    return errors;
};