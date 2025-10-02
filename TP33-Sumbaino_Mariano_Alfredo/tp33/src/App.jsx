import { useState } from "react";
import {
  Container,
  Title,
  Input,
  Button,
  Nav,
  UserInfo
} from "./component/styles";

function App() {
  const [view, setView] = useState("login");

  const [user, setUser] = useState({ username: "", password: "" });
  const [registeredUser, setRegisteredUser] = useState(null);

  const isLoggedIn = view === "userinfo";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validateUserName = (username) => username.trim().length > 2;
  const validatePassword = (password) => {
    const trimmed = password.trim();
    const hasNumber = /\d/.test(trimmed);
    return trimmed.length > 5 && hasNumber;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isUsernameValid = validateUserName(user.username);
    const isPasswordValid = validatePassword(user.password);

    if (!isUsernameValid || !isPasswordValid) {
      alert("Nombre de usuario o contraseña inválidos");
      return;
    }

    if (
      registeredUser &&
      user.username === registeredUser.username &&
      user.password === registeredUser.password
    ) {
      setView("userinfo");
    } else {
      alert("Usuario no registrado o credenciales incorrectas");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const isUsernameValid = validateUserName(user.username);
    const isPasswordValid = validatePassword(user.password);

    if (!isUsernameValid || !isPasswordValid) {
      alert("Debes completar los campos correctamente");
      return;
    }

    setRegisteredUser({ ...user });
    alert("¡Usuario registrado con éxito!");
    setUser({ username: "", password: "" });
    setView("login");
  };

  const handleLogout = () => {
    setView("login");
    setUser({ username: "", password: "" });
  };

  const renderForm = () => {
    if (view === "login") {
      return (
        <>
          <Title>Iniciar Sesión</Title>
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={user.username}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={user.password}
              onChange={handleChange}
            />
            <Button type="submit">Ingresar</Button>
          </form>
        </>
      );
    }

    if (view === "register") {
      return (
        <>
          <Title>Registro</Title>
          <form onSubmit={handleRegister}>
            <Input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={user.username}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={user.password}
              onChange={handleChange}
            />
            <Button type="submit">Registrarse</Button>
          </form>
        </>
      );
    }

    if (view === "userinfo" && registeredUser) {
      return (
        <>
          <Title>Información del Usuario</Title>
          <UserInfo>
            <p><strong>Nombre:</strong> {registeredUser.username}</p>
            <p><strong>Contraseña:</strong> {"*".repeat(registeredUser.password.length)}</p>
          </UserInfo>
        </>
      );
    }
  };

  return (
    <Container>
      <Nav>
        {!isLoggedIn ? (
          <>
            <Button onClick={() => setView("login")}>Login</Button>
            <Button onClick={() => setView("register")}>Register</Button>
          </>
        ) : (
          <Button onClick={handleLogout}>Cerrar Sesión</Button>
        )}
      </Nav>
      {renderForm()}
    </Container>
  );
}

export default App;