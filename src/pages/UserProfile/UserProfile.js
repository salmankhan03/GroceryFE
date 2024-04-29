import React, { useState, useEffect } from 'react';
import AuthServices from '../../services/AuthServices';
import { useSelector } from 'react-redux';
import InputComponent from '../../components/InputComponents/InputComponents';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        dateOfBirth: '',
        email: ''
    });
    const [registerFormDataErrors, setRegisterFormDataErrors] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        contact_no: '',
        email: '',
        password: '',

    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const authData = useSelector(state => state?.AuthReducer?.userData);

    useEffect(() => {
        // Fetch user data from your API
        setUserData(authData);
        setIsLoading(false);
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit user data to your backend or handle it as needed
        console.log('Submitted user data:', userData);
    };
    const formatDate = (dateString) => {
        console.log("date",dateString)
        if (!dateString) return ''; // Return empty string if dateString is not provided
        const date = new Date(dateString);
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        // Add leading zero if month or day is less than 10
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        console.log(`${year}-${month}-${day}`)
        return `${year}-${month}-${day}`;
      }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">User Profile</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name:</label>
                                    <InputComponent
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={userData.first_name}
                                        onChange={handleChange}
                                        customClass={`form-control gray-bg`}//
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                                    <InputComponent
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={userData.last_name}
                                        onChange={handleChange}
                                        customClass={`form-control gray-bg`}//
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Date of Birth:</label>
                                    <InputComponent
                                        type="date"
                                        id="date_of_birth"
                                        customClass={`form-control gray-bg `}//${shippingFormErrors.first_name ? 'validation-error-border' : ''}
                                        value={formatDate(userData.date_of_birth)}
                                        onChange={handleChange}
                                        placeholder=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <InputComponent
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                        customClass={`form-control gray-bg`}//
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contact_no" className="form-label">Conatct No:</label>
                                    <InputComponent
                                        type="number"
                                        id="contact_no"
                                        name="contact_no"
                                        value={userData.contact_no}
                                        onChange={handleChange}
                                        customClass={`form-control gray-bg`}//
                                        required
                                    />
                                </div>
                                {/* Add other form fields similarly */}
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
