import gql from 'graphql-tag';

export const MUTATION_LOGIN_WITH_EMAIL = gql`
  mutation LoginWithEmail($email: EmailAddress!, $password: NonEmptyString!) {
    loginWithEmail(email: $email, password: $password) {
      user {
        id
        name
        email
      }
      accessToken
      refreshToken
    }
  }
`;
