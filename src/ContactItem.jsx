/* eslint-disable react/prop-types */
export default function ContactItem({ contact, onDelete, onDetail }) {
  return (
    <div className="contact-item">
      <span>
        {contact.name} {contact.phone} {contact.group}
      </span>
      <div>
        <button className="add-button" onClick={onDetail}>
          세부사항
        </button>
        <button className="delete-button" onClick={onDelete}>
          삭제
        </button>
      </div>
    </div>
  );
}
