'use strict';
/**
 * 系统枚举
 */
module.exports = {
  /**
     * 角色数据范围 枚举
     */
  enumRoleDataScope: {
    ALL: 1,
    ALL_name: '全部数据',
    Custom: 2,
    Custom_name: '按明细设置',
    DepartmentBelow: 3,
    DepartmentBelow_name: '所在公司（部门）及以下数据',
    Department: 4,
    Department_name: '所在公司（部门）数据',
    Self: 5,
    Self_name: '仅本人数据'
  }
};
