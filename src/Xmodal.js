import React, { useState } from 'react'

import "./Xmodal.css";

const Xmodal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        dob: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.phone.length < 10 || formData.phone.length > 10) {
            alert("Invalid phone number. Please enter a 10-digit phone number.")
            return;
        }



        const today = new Date();

        today.setHours(0,0,0,0)

        const selectedDate = new Date(formData.dob)
        if(selectedDate>today)
        {
            alert("invalid date of birth. Date of birth cannot be in the future.");
            return;
        }


        if (!formData.email.includes('@')) {
            alert("Invalid email. Please check your email address")
            return;
        }

        setIsOpen(false)
    }


    const handleModalOpen = () => {
        setIsOpen(true)
    }

    const handleModalClose = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            setIsOpen(false);
            console.log("clicked outside")
        }
    }
    return (
        <div>
            <h1>User Details Modal</h1>
            <button onClick={handleModalOpen}>Open Form</button>



            {isOpen && (
                <div className="modal modal-overlay open" onClick={handleModalClose}>

                    <div className="modal-content" >

                        <h1>Fill Details</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label style={{ display: "block" }}>Username:</label>
                                <input type="text" id="username" name='username' value={formData.username} onChange={handleInputChange} required />

                            </div>

                            <div>
                                <label style={{ display: "block" }}>Email Address</label>
                                <input type='email' id='email' name='email' value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label style={{ display: "block" }}>Phone Number:</label>
                                <input type='text' id='phone' name='phone' value={formData.phone} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label style={{ display: "block" }}>Date of Birth:</label>
                                <input type='date' id='dob' name='dob' value={formData.dob} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <button type='submit' className='submit-button'>Submit</button>
                            </div>
                        </form>

                    </div>
                </div>

            )}

        </div>
    )
}

export default Xmodal