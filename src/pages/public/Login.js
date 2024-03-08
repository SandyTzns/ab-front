import { useDispatch } from "react-redux";
import axios from "axios";
import Nav from "../../components/public/Nav";
import "../../styles/main.css";
// import { addUser } from "../../store/auth/auth-slice";

export default function Login() {
  // const dispatch = useDispatch();
  const BASE_URL = "http://localhost:3001/api/v1/user";

  async function submit(e) {
    e.preventDefault();
    // see what FormData do
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    // appel axios pour savoir si ce que j'ai récupéré se trouve dans la base de donnée, si oui renvoie un token
    // difference entre appel API backend et database
    // on récup le token puis on transforme le token pour recup les données
    // async appel axios

    let response;
    try {
      response = await axios.post(`${BASE_URL}/login`, { email, password });
      console.log(response);

      let config = {
        headers: {
          Authorization: `Bearer ${response.data.body.token}`,
        },
      };
      let user = await axios.post(`${BASE_URL}/profile`, null, config);
      console.log(user);
      // let userEmail = user.data.body.email;
      // let userFirstName = user.data.body.firstName;
      // let userId = user.data.body.id;
      // let userLastName = user.data.body.lastName;
      console.log();
    } catch (error) {
      console.log(error);
    }

    // QUESTIONS : j'ai compris comment récuperer les données grâce au TOKEN, comment je les envoie à REDUX via Dispatch et qu'est -ce qu'il se passe après?

    // dispatch(addUser(true, { userEmail, userFirstName, userId, userLastName }));
  }

  return (
    <>
      <Nav />
      <div className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={submit}>
            <div className="input-wrapper">
              <label>Username</label>
              <input type="email" id="username" name="email" />
            </div>

            <div className="input-wrapper">
              <label>Password</label>
              <input type="password" id="password" name="password" />
            </div>

            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label>Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </div>{" "}
    </>
  );
}
