/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PermissionEnum } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: Staff
// ====================================================

export interface Staff_groups_permissions {
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

export interface Staff_groups {
  __typename: "Group";
  /**
   * List of group permissions
   */
  permissions: (Staff_groups_permissions | null)[] | null;
}

export interface Staff_avatar {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface Staff {
  __typename: "Staff";
  id: string;
  email: string;
  name: string;
  /**
   * Designates that this user has all permissions without explicitly assigning them.
   */
  isSuperuser: boolean;
  groups: (Staff_groups | null)[] | null;
  avatar: Staff_avatar | null;
}
