import React, { useState } from "react";
import UserContext from "./UserContext";

export default function UserState({ children }) {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
