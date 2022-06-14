/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PermissionEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: TokenAuth
// ====================================================

export interface TokenAuth_tokenCreateStaff_errors {
  __typename: "Error";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface TokenAuth_tokenCreateStaff_staff_groups_permissions {
  __typename: "PermissionDisplay";
  /**
   * Internal code for permission.
   */
  code: PermissionEnum;
  /**
   * Describe action(s) allowed to do by permission.
   */
  name: string;
}

export interface TokenAuth_tokenCreateStaff_staff_groups {
  __typename: "Group";
  /**
   * List of group permissions
   */
  permissions: (TokenAuth_tokenCreateStaff_staff_groups_permissions | null)[] | null;
}

export interface TokenAuth_tokenCreateStaff_staff_avatar {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface TokenAuth_tokenCreateStaff_staff {
  __typename: "Staff";
  id: string;
  email: string;
  name: string;
  /**
   * Designates that this user has all permissions without explicitly assigning them.
   */
  isSuperuser: boolean;
  groups: (TokenAuth_tokenCreateStaff_staff_groups | null)[] | null;
  avatar: TokenAuth_tokenCreateStaff_staff_avatar | null;
}

export interface TokenAuth_tokenCreateStaff {
  __typename: "CreateTokenStaff";
  token: string | null;
  errors: (TokenAuth_tokenCreateStaff_errors | null)[];
  staff: TokenAuth_tokenCreateStaff_staff | null;
}

export interface TokenAuth {
  tokenCreateStaff: TokenAuth_tokenCreateStaff | null;
}

export interface TokenAuthVariables {
  email: string;
  password: string;
}
