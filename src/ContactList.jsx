import ContactItem from "./ContactItem";
/* eslint-disable react/prop-types */
export default function ContactList({
  contacts,
  openDetailModal,
  deleteContact,
}) {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          contact={contact}
          onDelete={() => deleteContact(index)}
          onDetail={() => openDetailModal(contact)}
        />
      ))}
    </div>
  );
}
