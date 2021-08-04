import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import FormAddCells from './FormAddCells';
import '../App.css'

const Table = () => {
    const [cells, setCells] = useState([]);

    const addEntry = (firstName, lastName, idNumber, emailAddress, date, time) => {
        setCells([...cells, { firstName, lastName, idNumber, emailAddress, date, time }])
    }
 
    const handleDelete = val => {
        setCells(cells.filter(dataEntry => dataEntry.id !== val));
    }

    return (
        <div>
            <FormAddCells addEntry={addEntry} />
        </div>
    )
}

export default Table
