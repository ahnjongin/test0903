/* eslint-disable react/prop-types */
import { useState } from "react";
export default function GroupModal({ closeGroupModal, groups, setGroups }) {
  const [newGroup, setNewGroup] = useState("");

  const addGroup = () => {
    if (newGroup && !groups.includes(newGroup)) {
      setGroups([...groups, newGroup]);
      setNewGroup("");
    }
  };

  const removeGroup = (group) => {
    setGroups(groups.filter((g) => g !== group));
  };
  return (
    <div className="modal">
      <h2>그룹 관리</h2>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>
            {group} <button onClick={() => removeGroup(group)}>삭제</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newGroup}
        onChange={(e) => setNewGroup(e.target.value)}
        placeholder="새 그룹 이름"
      />
      <button onClick={addGroup}>추가</button>
      <button onClick={closeGroupModal}>닫기</button>
    </div>
  );
}
