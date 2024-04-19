import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1/user";

export default class apiCalls {
  static getToken = async (email, password) => {
    try {
      let token = await axios.post(`${BASE_URL}/login`, { email, password });
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };
}


import Nav from "../../components/public/Nav";
import "../../styles/main.css";

import apiCalls from "../../service/apiCalls";
import { useState, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setEmail(formData.get("email"));
    setPassword(formData.get("password"));
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getToken(email, password);
      if (!response) return alert("cannot get API");
      setData(response.data);
    };
    fetchData();
  }, [email, password]);

  console.log(email, password);}
