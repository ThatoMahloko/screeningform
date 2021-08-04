import React, { useState } from 'react'
import '../App.css'

const FormAddCells = ({ addEntry }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [idNumber, setIdNumber] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addEntry(firstName, lastName, idNumber, emailAddress, date, time);
        setFirstName('');
        setLastName('');
        setIdNumber('');
        setEmailAddress('');
        setDate('');
        setTime('');
    }

    return (
        <div>

            <form className="container" onSubmit={handleSubmit}>
                <div className="left ">
                    <input type="text" placeholder="First Name" required onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder="Last Name" required onChange={(e) => setLastName(e.target.value)} />
                    <input type="text" placeholder="ID number" required onChange={(e) => setIdNumber(e.target.value)} />
                </div>

                <div className="right ">
                    <input type="email" placeholder="Email Address" required onChange={(e) => setEmailAddress(e.target.value)} />
                    <input type="date" placeholder="Date" required onChange={(e) => setDate(e.target.value)} />
                    <input type="text" placeholder="time" required onChange={(e) => setTime(e.target.value)} />
                </div>
                <button type="submit">SUBMIT</button>
            </form >

        </div>
    )
}

export default FormAddCells
