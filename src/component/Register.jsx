import React, { useState } from 'react';
import { auth, googleProvider } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Rename function to avoid conflict with component name
  function handleRegister() {
    if (!email || !password) {
      alert("Enter email and password!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Registration successful!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function signupWithGoogle() {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        alert("Signed in with Google!");
        console.log(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
      />
      <button onClick={handleRegister} style={{ marginRight: "10px", padding: "8px 16px" }}>
        Register
      </button>
      <button onClick={signupWithGoogle} style={{ padding: "8px 16px" }}>
        Sign in with Google
      </button>
    </div>
  );
}
