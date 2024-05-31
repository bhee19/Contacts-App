import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  const handleContactClick = (contact) => {
    setSelectedContact(contact === selectedContact ? null : contact);
  };

  return (
    <div className="App">
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} onClick={() => handleContactClick(contact)}>
            <h2>{contact.id}. {contact.name}</h2>
            {selectedContact === contact && (
              <div className="details">
               <div className="contact-container">
                <div className="left-side">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/${contact.name}.jpeg`} 
                  alt={contact.name}  
                  style={{ width: '200px', height: '150px' }} 
                />
                  <p>"{contact.username}"</p>
                  <p><b>Email:</b> {contact.email}</p>
                  <p><b>Phone:</b> {contact.phone}</p>
                </div>
                <div className="right-side">
                  <p><b>Address:</b></p>
                  <p>
                    {contact.address.street} {contact.address.suite ? `, ${contact.address.suite}` : ''} {/* Conditionally add suite if it exists */}
                    <br />
                    {contact.address.city}, {contact.address.zipcode}
                    <br />
                    {contact.address.geo.lat}°, {contact.address.geo.lng}°
                  </p>
                  
                  <p><b>Company:</b></p>
                  <p>
                    {contact.company.name}
                    <br />
                    "{contact.company.catchPhrase}"
                    <br />
                    {contact.company.bs}!
                  </p>
                  <p><b>Website:</b> {contact.website}</p>
                </div>
              </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setContacts(data));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Contacts</h1>
//       <ul>
//         {contacts.map(contact => (
//           <li key={contact.id}>
//             <h2>{contact.name}</h2>
//             <p>{contact.email}</p>
//             <p>{contact.phone}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;