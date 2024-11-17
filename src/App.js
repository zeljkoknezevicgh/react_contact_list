import { useState, useEffect } from 'react';
import ImenikItem from './components/ImenikItem';

function App() {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

     
     useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        setContacts(storedContacts);
    }, []);

    
    useEffect(() => {
        if (contacts.length > 0) {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
    }, [contacts]);

    const handleAddContact = () => {
        if (name && phone) {
            const newContact = { id: Date.now(), name, phone };
            setContacts([...contacts, newContact]);
            setName('');
            setPhone('');
        }
    };

    const handleDeleteContact = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
    };

    return (
        <div
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'url("https://media.istockphoto.com/id/1297112490/photo/email-marketing-and-newsletter-concept-direct-email-sending-for-company.jpg?s=612x612&w=0&k=20&c=8-2N89tSOyUUpRmpOKwB73TGBx86A3_eURCxFbhOCKs=")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.9,
            }}
        >
            <div
                style={{
                    maxWidth: '500px',
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '50px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    fontFamily: 'Arial, sans-serif',
                    color: '#333',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <h1 style={{ textAlign: 'center', color: 'black', marginBottom: '35px' }}>
                    <i className="fas fa-address-book"></i> Zeljko - Contact List
                </h1>
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '30px', 
                    marginBottom: '20px', 
                    alignItems: 'center'
                }}>
                    <input
                        type="text"
                        placeholder="Enter your Name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            padding: '20px',
                            borderRadius: '5px',
                            border: '1px solid black',
                            fontSize: '16px',
                            display: 'block',
                            width: '80%',
                            maxWidth: '400px',
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Enter your Phone..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                            padding: '20px',
                            borderRadius: '5px',
                            border: '1px solid black',
                            fontSize: '16px',
                            display: 'block',
                            width: '80%',
                            maxWidth: '400px'
                        }}
                    />
                    <button
                        onClick={handleAddContact}
                        style={{
                            padding: '20px',
                            borderRadius: '5px',
                            border: 'none',
                            backgroundColor: 'black',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}
                    >
                        <i className="fas fa-plus"></i> Add Contact
                    </button>
                </div>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {contacts.map(contact => (
                        <ImenikItem
                            key={contact.id}
                            contact={contact}
                            onDelete={handleDeleteContact}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
