import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please enter the first and last name' });
        } else {
            console.log('Submitted Tech', firstName, lastName);

            // Clear Fields
            setFirstName('');
            setLastName('');
        }
    };

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>Add New Technitian</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input
                            id="lasttName"
                            type="text"
                            name="lasttName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="lastName" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a
                    href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect blue btn"
                >
                    Enter
                </a>
            </div>
        </div>
    );
};

export default AddTechModal;
