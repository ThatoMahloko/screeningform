import React, { useState } from 'react'
import '../App.css'

const FormAddCells = ({ addEntry }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [soreThroat, setSoreThroat] = useState('no');
    const [cough, setCough] = useState('no');
    const [breathing, setBreathing] = useState('no');
    const [id, setID] = useState('no');

    const handleSubmit = (e) => {
        e.preventDefault();
        addEntry(firstName, lastName, idNumber, emailAddress, date, time, soreThroat, cough, breathing, id);
        setFirstName('');
        setLastName('');
        setIdNumber('');
        setEmailAddress('');
        setDate('');
        setTime('');
        setSoreThroat('');
        setCough('');
        setBreathing('');
        setID('');
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
                    <input type="time" placeholder="time" required onChange={(e) => setTime(e.target.value)} />
                </div>

                <div>
                    <label>
                        Do you have a sore throat?<br />
                        <input id="soreYes" type="radio" value="yes" checked={soreThroat === "yes"} onChange={(e) => setSoreThroat(e.target.value)} /><label htmlFor="soreYes">yes</label>
                        <input id="soreNo" type="radio" value="no" checked={soreThroat === "no"} onChange={(e) => setSoreThroat(e.target.value)} /><label htmlFor="soreNo">no</label>
                    </label>
                </div>

                <div>
                    <label>
                        Do you have a cough throat?<br />
                        <input id="coughYes" type="radio" value="yes" checked={cough === "yes"} onChange={(e) => setCough(e.target.value)} /><label htmlFor="coughYes">yes</label>
                        <input id="coughNo" type="radio" value="no" checked={cough === "no"} onChange={(e) => setCough(e.target.value)} /><label htmlFor="coughNo">no</label>
                    </label>
                </div>

                <div>
                    <label>
                        Do you have toruble breathing?<br />
                        <input id="breathingYes" type="radio" value="yes" checked={breathing === "yes"} onChange={(e) => setBreathing(e.target.value)} /><label htmlFor="soreYes">yes</label>
                        <input id="breatingNo" type="radio" value="no" checked={breathing === "no"} onChange={(e) => setBreathing(e.target.value)} /><label htmlFor="soreNo">no</label>
                    </label>
                </div>

                <button type="submit">SUBMIT</button>
            </form >
        </div>
    )
}

export default FormAddCells
