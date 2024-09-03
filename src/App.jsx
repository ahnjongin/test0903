import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import GroupModal from "./GroupModal";
import DetailModal from "./DetailModal";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [groups, setGroups] = useState(["가족", "친구", "직장", "스터디"]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const openGroupModal = () => {
    setShowGroupModal(true);
    document.querySelector(".App").classList.add("modal-open");
  };

  const closeGroupModal = () => {
    setShowGroupModal(false);
    document.querySelector(".App").classList.remove("modal-open");
  };

  const openDetailModal = (contact) => {
    setSelectedContact(contact);
    setShowDetailModal(true);
    document.querySelector(".App").classList.add("modal-open");
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
    document.querySelector(".App").classList.remove("modal-open");
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups"));
    if (storedGroups) {
      setGroups(storedGroups);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  return (
    <div className="App">
      <h1>연락처 리스트</h1>
      <div className="wrap">
        <ContactForm
          addContact={addContact}
          groups={groups}
          openGroupModal={openGroupModal}
        />
        <ContactList
          contacts={contacts}
          openDetailModal={openDetailModal}
          deleteContact={deleteContact}
        />
      </div>
      {showGroupModal && (
        <>
          <div className="modal-overlay"></div>
          <GroupModal
            closeGroupModal={closeGroupModal}
            groups={groups}
            setGroups={setGroups}
          />
        </>
      )}
      {showDetailModal && selectedContact && (
        <>
          <div className="modal-overlay"></div>
          <DetailModal
            contact={selectedContact}
            closeDetailModal={closeDetailModal}
          />
        </>
      )}
    </div>
  );
}

export default App;
