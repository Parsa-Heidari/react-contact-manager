import { useEffect, useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import Update from "./components/Update";
import ViewContact from "./components/ViewContact";

function App() {

  const navigate = useNavigate()
  useEffect(() => {
    navigate("/contacts")
  }, [])

  const [searchParams, setSearchParams] = useState()

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact])
  }

  return (
    <div className="App">
      <Navbar contacts={contacts} searchParams={searchParams} setSearchParams={setSearchParams} />
      <Routes>
        <Route path="/contacts" element={<Contacts contacts={contacts} setContacts={setContacts} searchParams={searchParams} />} />
        <Route path="/contacts/add" element={<AddContact addNewContact={addNewContact} />} />
        <Route path=":id/update" element={<Update contacts={contacts} addNewContact={addNewContact} setContacts={setContacts} />} />
        <Route path=":id" element={<ViewContact contacts={contacts} />} />
      </Routes>
    </div>
  );
}

export default App;
