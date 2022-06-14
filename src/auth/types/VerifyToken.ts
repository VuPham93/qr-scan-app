/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PermissionEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: VerifyToken
// ====================================================

export interface VerifyToken_tokenVerifyStaff_staff_groups_permissions {
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

export interface VerifyToken_tokenVerifyStaff_staff_groups {
  __typename: "Group";
  /**
   * List of group permissions
   */
  permissions: (VerifyToken_tokenVerifyStaff_staff_groups_permissions | null)[] | null;
}

export interface VerifyToken_tokenVerifyStaff_staff_avatar {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VerifyToken_tokenVerifyStaff_staff {
  __typename: "Staff";
  id: string;
  email: string;
  name: string;
  /**
   * Designates that this user has all permissions without explicitly assigning them.
   */
  isSuperuser: boolean;
  groups: (VerifyToken_tokenVerifyStaff_staff_groups | null)[] | null;
  avatar: VerifyToken_tokenVerifyStaff_staff_avatar | null;
}

export interface VerifyToken_tokenVerifyStaff {
  __typename: "VerifyTokenStaff";
  payload: any | null;
  staff: VerifyToken_tokenVerifyStaff_staff | null;
}

export interface VerifyToken {
  /**
   * Mutation that confirms if token is valid and also returns user data.
   */
  tokenVerifyStaff: VerifyToken_tokenVerifyStaff | null;
}

export interface VerifyTokenVariables {
  token: string;
}
