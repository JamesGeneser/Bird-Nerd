import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOG_BIRD = gql`
  mutation logBird($size: String!, $bodyColor: String!, $headColor: String!) {
    logBird(size: $size, bodyColor: $bodyColor, headColor: $headColor) {
      size
      bodyColor
      headColor
    }
  }
`;
