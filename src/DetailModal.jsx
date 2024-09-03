/* eslint-disable react/prop-types */
export default function DetailModal({ contact, closeDetailModal }) {
  return (
    <div className="modal">
      <h2>연락처 상세 정보</h2>
      <p>이름: {contact.name}</p>
      <p>전화번호: {contact.phone}</p>
      <p>그룹: {contact.group}</p>
      <p>메모: {contact.memo}</p>
      <button onClick={closeDetailModal}>닫기</button>
    </div>
  );
}
