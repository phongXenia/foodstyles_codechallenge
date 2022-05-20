import gql from 'graphql-tag';
import { USER_FRAGMENT } from '@app/src/services/apollo/fragment';

export const MUTATION_LOGIN_WITH_EMAIL = gql`
  ${USER_FRAGMENT}
  mutation LoginWithEmail($email: EmailAddress!, $password: NonEmptyString!) {
    loginWithEmail(email: $email, password: $password) {
      user {
        ...UserFields
      }
      accessToken
      refreshToken
    }
  }
`;

export const MUTATION_REGISTER_WITH_EMAIL = gql`
  ${USER_FRAGMENT}
  mutation RegisterWithEmail(
    $name: NonEmptyString!
    $email: EmailAddress!
    $password: Password!
  ) {
    signUpWithEmail(name: $name, email: $email, password: $password) {
      user {
        ...UserFields
      }
      accessToken
      refreshToken
    }
  }
`;

export const MUTATION_UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile($name: NonEmptyString!, $email: EmailAddress!) {
    updateUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;
