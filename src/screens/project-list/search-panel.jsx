import React from "react";

export const SearchPanel = ({ param, setParam, users, setUsers }) => {
  return (
    <form action="">
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        />
        <select
          value={param.personId}
          onChange={(evt) => {
            setUsers({ ...param, personId: evt.target.value });
          }}
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
};
