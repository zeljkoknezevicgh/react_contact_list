import React from 'react';

function ImenikItem({ contact, onDelete }) {
    return (
        <li
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px',
                marginBottom: '10px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-user-circle" style={{ fontSize: '24px', color: '#4CAF50' }}></i>
                <span style={{ fontSize: '16px' }}>{contact.name} - {contact.phone}</span>
            </div>
            <button
                onClick={() => onDelete(contact.id)}
                style={{
                    padding: '5px 10px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#f44336',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >
                <i className="fas fa-trash"></i> Delete contact
            </button>
        </li>
    );
}

export default ImenikItem;
