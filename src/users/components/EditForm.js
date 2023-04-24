import { useState } from "react";

export function EditForm({ onEdit, selectedItem, setSelectedItem }) {
  const [newItem, setNewItem] = useState(selectedItem);

  const handleSubmit = (e) => {
    e.preventDefault();
    // onEdit({ ...newItem, text: newItem.text });
    onEdit(newItem);
    setNewItem(null);
    setSelectedItem(null);
  };

  const handleChangeItem = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  if (!newItem) return null;
  return (
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
          fontSize: 24,
          padding: "15px",
          paddingBottom: 0,
          background: "#f0f0f0",
          borderTop: "solid 1px #d1d1d1",
          borderRadius: "10px",
          color: "#373737"
        }}
      >
        {/* <h2>Add Item To List</h2> */}
        Edit List Item
      </legend>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <section
          style={{
            display: "inline-flex",
            // display: "inlineflex",
            width: "100%",
            padding: 15,
            flexDirection: "column",
            gap: "15px"
            // height: 300,
            // justifyContent: "center"
          }}
        >
          <label style={{ width: "100%" }} htmlFor="email">
            email:
            <input
              style={{
                width: "-webkit-fill-available",
                paddingLeft: "10px",
                background: "#fafafa",
                borderRadius: 3,
                // marginTop: -12,
                height: 45
              }}
              required
              name="email"
              type="email"
              id="emailInputField"
              value={newItem.email}
              onChange={handleChangeItem}
            />
          </label>

          <label style={{ width: "100%" }} htmlFor="username">
            username:
            <input
              style={{
                width: "-webkit-fill-available",
                paddingLeft: "10px",
                background: "#fafafa",
                borderRadius: 3,
                // marginTop: -12,
                height: 45
              }}
              required
              name="username"
              // type="username"
              id="usernameInputField"
              value={newItem.username}
              onChange={handleChangeItem}
            />
          </label>

          <label style={{ width: "100%" }} htmlFor="name">
            name:
            <input
              style={{
                width: "-webkit-fill-available",
                paddingLeft: "10px",
                background: "#fafafa",
                borderRadius: 3,
                // marginTop: -12,
                height: 45
              }}
              required
              name="name"
              // type="name"
              id="nameInputField"
              value={newItem.name}
              onChange={handleChangeItem}
            />{" "}
          </label>
          {/* </section> */}

          <button
            style={{
              background: "#fafafa",
              borderRadius: 3,
              width: "100%",
              padding: 15,
              // marginTop: -12,
              height: 45
            }}
            type="submit"
          >
            Edit Item
          </button>
        </section>
      </form>
    </fieldset>
  );
}
