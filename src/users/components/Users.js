import { useState, useMemo, useEffect } from "react";
import { UsersTable } from "./UsersTable";
import { AddForm } from "./AddForm";
import { EditForm } from "./EditForm";
import { userAPI } from "../utils/axios";
import { sortUsers } from "../utils/sortUsers";

export function Users() {
  const [listItems, setListItems] = useState(() => {
    console.log("useState--listItems.setListItems");
    return {
      timestamp: Date.now(),
      users: []
    };
  });
  const [selectedItem, setSelectedItem] = useState(() => {
    console.log("useState--SelectedItem.setSelectedItem");
    return null;
  });
  // useState(null);
  const [sortBy, setSortBy] = useState(() => {
    console.log("useState--SortBy.setSortBy");
    return { direction: "", key: "" };
  });
  //useState({ direction: "", key: "" });
  // const [sortByOrder, setSortByOrder] = useState([sortBy]);
  const [sortByOrder, setSortByOrder] = useState(() => [
    { direction: "ascending", key: "username", type: "string" },
    { direction: "descending", key: "email", type: "string" },
    { direction: "ascending", key: "name", type: "string" },
    { direction: "ascending", key: "purchaseprice", type: "number" },
    { direction: "ascending", key: "dateofbirth", type: "date" }
  ]);
  useEffect(() => {
    userAPI
      .get("/users")
      // .then(({ data }) => setListItems(sortUsers(data ?? [], sortByOrder)))
      .then(
        ({ data }) => setListItems({ timestamp: Date.now(), users: data })
        // sortUsers(data ?? [], sortByOrder))
      )
      .catch((message) => console.error({ message }));
  }, []);

  const handleAddItem = (item) => {
    console.log("i ran in handleAddItem");
    // setListItems(() => sortUsers([...listItems.users, item], sortByOrder));
    setListItems({ users: [...listItems.users, item], timestamp: Date.now() });
  };

  const handleEditItem = (editedItem) => {
    const users = listItems?.users?.map((item) =>
      item.id === editedItem.id ? (item = editedItem) : item
    );

    setListItems({ users, timestamp: Date.now() });
  };

  // const sortedUsers = useMemo(() => {
  //   // return sortUsers(listItems, sortBy);
  //   return sortUsers(listItems, sortBy);
  // }, [listItems, sortBy]);
  const sortedUsers = useMemo(() => {
    // return sortUsers(listItems, sortBy);
    console.log("i ran on likne 57 in useMemo");
    return sortUsers(listItems?.users, sortByOrder);
  }, [
    // JSON.stringify(listItems?.users),
    // JSON.stringify(sortByOrder),
    listItems.timestamp
  ]);

  return (
    <div
      style={{
        // alignItems: "center",
        display: "flex",
        // flexDirection: "row",
        width: "880px",
        margin: "0 auto",
        fontFamily: "sans-serif",
        gap: 45,
        padding: 15
      }}
    >
      <fieldset
        style={{
          background: "#f0f0f0",
          border: "solid 1px #d1d1d1",
          borderRadius: "10px",
          color: "#373737"
        }}
      >
        <legend
          style={{
            fontSize: 32
          }}
        >
          Users
        </legend>
        <UsersTable
          users={sortedUsers.users}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
        <EditForm
          key={selectedItem?.id}
          onEdit={handleEditItem}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <AddForm
          onAdd={handleAddItem}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </fieldset>
    </div>
  );
}
