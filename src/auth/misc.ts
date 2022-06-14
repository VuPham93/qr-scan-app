import {PermissionEnum} from "../types/globalTypes";
import {Staff, Staff_groups} from "./types/Staff";

export const hasPermission = (permission: PermissionEnum, user: Staff) =>
  user.groups.map(group =>
    group.permissions.map(perm => perm.code).includes(permission)
  );

export const getStaffPermission = (staffGroups: Staff_groups[]) => {
  const permissionList = [];
  staffGroups.map(group => {
    group.permissions.map(permission => {
      if (
        permissionList.filter(perm => perm.code === permission.code).length ===
        0
      ) {
        permissionList.push(permission);
      }
    });
  });
  return permissionList;
};
