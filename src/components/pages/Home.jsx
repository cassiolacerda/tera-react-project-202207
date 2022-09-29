import React from "react";

import logo from "../../images/logo.svg";

export default function Home() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://62c4e487abea8c085a7e022a.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select className="home__select-users">
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn))
          .map((user) => (
            <option key={user.id}>{`${user.fn} ${user.ln}`}</option>
          ))}
      </select>
      <button className="button-primary">Entrar</button>
    </div>
  );
}
