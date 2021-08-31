import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' });
        } else {
            console.log('Submitted Log', message, tech, attention);

            // Clear Fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
    };

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter system log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            id="message"
                            type="text"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            id="tech"
                            value={tech}
                            className="browser-default"
                            onChange={(e) => setTech(e.target.value)}
                        >
                            <option value="" disabled="disabled">
                                Select Technitian
                            </option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Sarah Willson">Sarah Willson</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={() => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
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

const modalStyle = {
    width: '75%',
    heigth: '75%',
};

export default AddLogModal;
