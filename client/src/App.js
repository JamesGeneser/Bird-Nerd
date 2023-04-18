import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import IdentifyBird from "./pages/IdentifyBird";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostSighting from "./pages/PostSighting";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identify" element={<IdentifyBird />} />
          <Route path="/post" element={<PostSighting />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
