import gql from 'graphql-tag';

export const fragmentStaff = gql`
  fragment Staff on Staff {
    id
    email
    name
    isSuperuser
    groups {
      permissions {
        code
        name
      }
    }
    avatar {
      url
    }
  }
`;

export const tokenAuthMutation = gql`
  ${fragmentStaff}
  mutation TokenAuth($email: String!, $password: String!) {
    tokenCreateStaff(email: $email, password: $password) {
      token
      errors {
        field
        message
      }
      staff {
        ...Staff
      }
    }
  }
`;

export const tokenVerifyMutation = gql`
  ${fragmentStaff}
  mutation VerifyToken($token: String!) {
    tokenVerifyStaff(token: $token) {
      payload
      staff {
        ...Staff
      }
    }
  }
`;
