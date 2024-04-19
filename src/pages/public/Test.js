import { useState } from "react";

const Login = () => {
  // Au lieu d'écrire comme ça

  //   const [login, setLogin] = useState("");
  //   const [password, setPassword] = useState("");

  // On va créer un objet dans le STATE
  const [credentials, setCredentials] = useState({
    login: "",
    password: "",
  });

  const onChange = (e) => {
    console.log(e.target.name); //NAME permet de savoir dans quel input je suis
    // Avec le spread operator ... je vais fusionner les anciennes valeurs du state avec les nouvelles que je reçois
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(login, password);
  };

  return (
    <form>
      <div>
        <label htmlFor="login">Identifiant</label>
        <input
          type="text"
          name="login"
          value={credentials.login}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="login">Mot de passe</label>
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
      </div>
      <div>
        <button>Connexion</button>
      </div>
    </form>
  );
};
