import React, { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";

const apiUrl = process.env.REACT_APP_API_URL;

console.log(apiUrl);

export const ProjectListScrens = () => {
  const [param, setParam] = useState({ name: "", personId: "" });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects`).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [param]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);
  return (
    <div>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
        setUsers={setUsers}
      />
      <List list={list} users={users} />
    </div>
  );
};
