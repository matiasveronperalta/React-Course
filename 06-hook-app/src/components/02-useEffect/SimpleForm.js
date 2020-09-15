import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect(() => {
        console.log('hey!');
    }, []);

    useEffect(() => {
        console.log('formstate cambio!');
    }, [formState]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };


    return (
        <>
            <h1>useEffects</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="nombre"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@example.com"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {name === 'beto' && <Message />}

        </>
    )
}
