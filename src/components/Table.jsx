import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import FormAddCells from './FormAddCells';
import '../App.css'

const Table = () => {
    const [cells, setCells] = useState([]);

    const addEntry = (firstName, lastName, idNumber, emailAddress, date, time, soreThroat, cough, breathing, id) => {
        setCells([...cells, { firstName, lastName, idNumber, emailAddress, date, time, soreThroat, cough, breathing, id: uuid() }])
    }

    const handleDelete = val => {
        setCells(cells.filter(dataEntry => dataEntry.id !== val));
    }

    return (
        <div>
            <FormAddCells addEntry={addEntry} />
            <div className="table">
                {cells.length === 0 ? <div> </div> :
                    <table>
                        <thead>
                            <tr>
                                <th>first name</th>
                                <th>last name</th>
                                <th>id number</th>
                                <th>email address</th>
                                <th>date</th>
                                <th>time</th>
                                <th>sore throat</th>
                                <th>cough</th>
                                <th>trouble breating</th>
                            </tr>
                            {cells.map(entry => {
                                <tr key={entry.id}>
                                    <td>{entry.firstName}</td>
                                    <td>{entry.lastName}</td>
                                    <td>{entry.idNumber}</td>
                                    <td>{entry.emailAddress}</td>
                                    <td>{entry.date}</td>
                                    <td>{entry.time}</td>
                                    <td>{entry.soreThroat}</td>
                                    <td>{entry.cough}</td>
                                    <td>{entry.breathing}</td>
                                    <td><button onClick={handleDelete}>DELETE</button></td>
                                </tr>
                            })}
                        </thead>
                    </table>
                }

 </div>
        </div>
    )
}

export default Table
