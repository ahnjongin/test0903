/* eslint-disable react/prop-types */
import { useState } from "react";
export default function ContactForm({ addContact, groups, openGroupModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [group, setGroup] = useState(groups[0]);
  const [memo, setMemo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone.match(/^\d{3}-\d{4}-\d{4}$/)) {
      alert("올바른 형식을 입력하세요");
      return;
    }
    addContact({ name, phone, group, memo });
    setName("");
    setPhone("");
    setMemo("");
  };
  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <div className="name">
        <p>이름</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          required
        />
      </div>
      <div className="phone">
        <p>전화번호</p>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="전화번호"
          required
        />
      </div>
      <div className="group">
        <p>그룹</p>
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          {groups.map((group, index) => (
            <option key={index} value={group}>
              {group}
            </option>
          ))}
        </select>
        <button type="button" onClick={openGroupModal}>
          조직 추가
        </button>
      </div>
      <div className="">
        <p>간단한 기록</p>
        <input
          type="text"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="간단한 기록"
        />
      </div>
      <button className="saveButton" type="submit">
        저장
      </button>
    </form>
  );
}
