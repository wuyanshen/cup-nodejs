/*
 Navicat Premium Data Transfer

 Source Server         : mac_mysql_5.7
 Source Server Type    : MySQL
 Source Server Version : 50729
 Source Host           : localhost:3306
 Source Schema         : cupserver

 Target Server Type    : MySQL
 Target Server Version : 50729
 File Encoding         : 65001

 Date: 04/12/2020 20:05:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cup_config
-- ----------------------------
DROP TABLE IF EXISTS `cup_config`;
CREATE TABLE `cup_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(50) DEFAULT NULL COMMENT '配置名称',
  `key` varchar(50) DEFAULT NULL COMMENT '配置键',
  `value` varchar(50) DEFAULT NULL COMMENT '配置值',
  `status` varchar(1) DEFAULT '0' COMMENT '状态 0正常 1停用',
  `is_sys` varchar(1) DEFAULT '0' COMMENT '是否系统内置 0否 1是',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `del_flag` int(11) DEFAULT '0' COMMENT '是否删除 0否 1是',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='系统配置表';

-- ----------------------------
-- Records of cup_config
-- ----------------------------
BEGIN;
INSERT INTO `cup_config` VALUES (1, '默认初始密码', 'sys_password_init', '123456', '0', '1', '默认初始密码', '2020-11-29 13:20:14', '2020-11-29 15:17:31', 0);
INSERT INTO `cup_config` VALUES (2, '测试', 'test', '123123123', '1', '0', '测试', '2020-11-29 13:23:40', '2020-11-30 23:37:52', 0);
COMMIT;

-- ----------------------------
-- Table structure for cup_dict
-- ----------------------------
DROP TABLE IF EXISTS `cup_dict`;
CREATE TABLE `cup_dict` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `name` varchar(50) DEFAULT NULL COMMENT '字典名称',
  `type` varchar(50) DEFAULT NULL COMMENT '字典类型',
  `status` varchar(1) DEFAULT '0' COMMENT '状态 0正常 1停用',
  `remark` varchar(100) DEFAULT NULL COMMENT '备注',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `del_flag` int(11) DEFAULT '0' COMMENT '是否删除 0否 1是',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='字典表';

-- ----------------------------
-- Records of cup_dict
-- ----------------------------
BEGIN;
INSERT INTO `cup_dict` VALUES (1, '系统状态', 'sys_common_status', '0', '系统状态', '2020-11-27 17:23:45', '2020-11-29 11:50:18', 0);
INSERT INTO `cup_dict` VALUES (5, '系统模块', 'sys_module', '0', '系统模块', '2020-11-30 23:14:31', '2020-11-30 23:14:38', 0);
INSERT INTO `cup_dict` VALUES (8, '日志状态', 'sys_log_status', '0', '日志状态', '2020-11-30 23:28:00', NULL, 0);
COMMIT;

-- ----------------------------
-- Table structure for cup_dict_item
-- ----------------------------
DROP TABLE IF EXISTS `cup_dict_item`;
CREATE TABLE `cup_dict_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `label` varchar(50) DEFAULT NULL COMMENT '字典标签',
  `value` varchar(50) DEFAULT NULL COMMENT '字典值',
  `type` varchar(50) DEFAULT NULL COMMENT '字典类型',
  `status` varchar(1) DEFAULT '0' COMMENT '状态 0正常 1停用',
  `remark` varchar(100) DEFAULT NULL COMMENT '备注',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `del_flag` int(11) DEFAULT '0' COMMENT '是否删除 0否 1是',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='字典项表';

-- ----------------------------
-- Records of cup_dict_item
-- ----------------------------
BEGIN;
INSERT INTO `cup_dict_item` VALUES (5, '正常', '0', 'sys_common_status', '0', '正常', '2020-11-28 23:24:01', '2020-11-29 11:11:47', 0);
INSERT INTO `cup_dict_item` VALUES (6, '停用', '1', 'sys_common_status', '0', '停用', '2020-11-28 23:24:15', '2020-11-29 11:11:52', 0);
INSERT INTO `cup_dict_item` VALUES (9, '用户管理', 'user', 'sys_module', '0', '用户管理', '2020-11-30 23:15:00', NULL, 0);
INSERT INTO `cup_dict_item` VALUES (10, '角色管理', 'role', 'sys_module', '0', '角色管理', '2020-11-30 23:15:14', NULL, 0);
INSERT INTO `cup_dict_item` VALUES (11, '菜单管理', 'menu', 'sys_module', '0', '菜单管理', '2020-11-30 23:16:38', NULL, 0);
INSERT INTO `cup_dict_item` VALUES (12, '部门管理', 'org', 'sys_module', '0', '部门管理', '2020-11-30 23:16:54', NULL, 0);
INSERT INTO `cup_dict_item` VALUES (13, '字典管理', 'dict', 'sys_module', '0', '字典管理', '2020-11-30 23:17:53', NULL, 0);
INSERT INTO `cup_dict_item` VALUES (14, '参数设置', 'config', 'sys_module', '0', '参数设置', '2020-11-30 23:18:13', NULL, 0);
INSERT INTO `cup_dict_item` VALUES (15, '日志管理', 'log', 'sys_module', '0', '日志管理', '2020-11-30 23:18:28', NULL, 0);
INSERT INTO `cup_dict_item` VALUES (16, '正常', '0', 'sys_log_status', '0', '正常', '2020-11-30 23:28:25', NULL, 0);
INSERT INTO `cup_dict_item` VALUES (18, '异常', '1', 'sys_log_status', '0', '异常', '2020-11-30 23:28:54', NULL, 0);
INSERT INTO `cup_dict_item` VALUES (19, '登录/登出', 'auth', 'sys_module', '0', '登录/登出', '2020-12-01 00:15:36', NULL, 0);
INSERT INTO `cup_dict_item` VALUES (20, '字典项', 'dictItem', 'sys_module', '0', '字典项', '2020-12-01 00:16:31', NULL, 0);
COMMIT;

-- ----------------------------
-- Table structure for cup_log
-- ----------------------------
DROP TABLE IF EXISTS `cup_log`;
CREATE TABLE `cup_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `module` varchar(50) DEFAULT NULL COMMENT '模块名称',
  `url` varchar(100) DEFAULT NULL COMMENT '请求url',
  `method` varchar(10) DEFAULT NULL COMMENT '请求方式',
  `method_name` varchar(50) DEFAULT NULL COMMENT '请求方法名称',
  `params` text COMMENT '请求参数',
  `response` text COMMENT '返回参数',
  `oper_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '操作时间',
  `oper_name` varchar(20) DEFAULT NULL COMMENT '操作人员',
  `oper_ip` varchar(20) DEFAULT NULL COMMENT '主机地址',
  `oper_location` varchar(50) DEFAULT NULL COMMENT '操作地点',
  `status` varchar(10) DEFAULT NULL COMMENT '操作状态 0正常 1异常',
  `error_msg` text COMMENT '错误信息',
  `error_no` varchar(10) DEFAULT NULL COMMENT '请求状态码',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=268 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='操作日志表';

-- ----------------------------
-- Records of cup_log
-- ----------------------------
BEGIN;
INSERT INTO `cup_log` VALUES (256, 'log', '/admin/log/clear', 'DELETE', 'clear', NULL, '{\"errno\":0,\"errmsg\":\"清空成功\",\"data\":\"\"}', '2020-12-04 16:03:50', 'admin', '221.205.152.43', '山西省太原市', '0', NULL, '0');
INSERT INTO `cup_log` VALUES (257, 'auth', '/admin/auth/logout', 'POST', 'logout', NULL, '{\"errno\":0,\"errmsg\":\"\",\"data\":\"退出成功\"}', '2020-12-04 16:06:48', NULL, '221.205.152.43', '山西省太原市', '0', NULL, '0');
INSERT INTO `cup_log` VALUES (258, 'auth', '/admin/auth/login', 'POST', 'login', '{\"username\":\"admin\",\"password\":\"123456\"}', '{\"errno\":0,\"errmsg\":\"登录成功\",\"data\":{\"userInfo\":{\"id\":5,\"username\":\"admin\"},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTYwNzA2OTIxNCwiZXhwIjoxNjA3MDcxMDE0fQ.1hSkUVLKNqn2k0DSLPaZM6zngfnZmOjshpbwOQo3BeQ\"}}', '2020-12-04 16:06:54', 'admin', '221.205.152.43', '山西省太原市', '0', NULL, '0');
INSERT INTO `cup_log` VALUES (259, 'auth', '/admin/auth/login', 'POST', 'login', '{\"username\":\"admin\",\"password\":\"123456\"}', '{\"errno\":0,\"errmsg\":\"登录成功\",\"data\":{\"userInfo\":{\"id\":5,\"username\":\"admin\"},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTYwNzA4MjExOSwiZXhwIjoxNjA3MDgzOTE5fQ.xi1j7EcnkK-mzrFOcSryHpp1J9rBhwIXPG9eXLHK6q0\"}}', '2020-12-04 19:42:04', 'admin', '221.205.152.43', '山西省太原市', '0', NULL, '0');
INSERT INTO `cup_log` VALUES (260, 'auth', '/admin/auth/login', 'POST', 'login', '{\"username\":\"admin\",\"password\":\"123456\"}', '{\"errno\":0,\"errmsg\":\"登录成功\",\"data\":{\"userInfo\":{\"id\":5,\"username\":\"admin\"},\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTYwNzA4MjE0OSwiZXhwIjoxNjA3MDgzOTQ5fQ.ONRIUQ6CF3de7OpVtnhdnihRRnhCFM2eh2VWCIstCMA\"}}', '2020-12-04 19:42:31', 'admin', '221.205.152.43', '山西省太原市', '0', NULL, '0');
INSERT INTO `cup_log` VALUES (261, 'user', '/admin/user/update', 'PUT', 'update', '{\"id\":9,\"username\":\"test\",\"password\":\"5a2e54ee57e5b7273b9a8fed78c1ebd8\",\"nickname\":\"测试用户1\",\"avatar\":\"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\",\"org_id\":1,\"phone\":\"18911111111\",\"email\":\"22@qq.com\",\"status\":\"1\",\"create_time\":\"2020-11-25 18:25:00\",\"update_time\":\"2020-12-04 16:07:02\",\"del_flag\":0,\"role\":[{\"id\":3,\"name\":\"普通用户\",\"code\":\"customer\",\"remark\":\"\",\"ds_type\":5,\"ds_scope\":\"6,9,10\",\"status\":\"0\",\"create_time\":\"2020-11-24 22:02:32\",\"update_time\":\"2020-12-04 15:17:12\",\"del_flag\":0,\"user_id\":9}],\"org\":{\"id\":1,\"pid\":0,\"pids\":\"0\",\"name\":\"cup山西分公司\",\"address\":\"山西太原\",\"phone\":\"18988888888\",\"sort_num\":0,\"status\":\"0\",\"create_time\":\"2020-10-28 14:24:43\",\"update_time\":\"2020-10-28 14:31:11\",\"del_flag\":0},\"roleIds\":[3]}', '{\"errno\":0,\"errmsg\":\"更新成功\",\"data\":\"\"}', '2020-12-04 19:45:39', 'admin', '221.205.152.43', '山西省太原市', '0', NULL, '0');
INSERT INTO `cup_log` VALUES (262, 'user', '/admin/user/update', 'PUT', 'update', '{\"id\":9,\"username\":\"test\",\"password\":\"5a2e54ee57e5b7273b9a8fed78c1ebd8\",\"nickname\":\"测试用户1\",\"avatar\":\"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\",\"org_id\":1,\"phone\":\"18911111111\",\"email\":\"22@qq.com\",\"status\":\"1\",\"create_time\":\"2020-11-25 18:25:00\",\"update_time\":\"2020-12-04 19:44:20\",\"del_flag\":0,\"role\":[{\"id\":3,\"name\":\"普通用户\",\"code\":\"customer\",\"remark\":\"\",\"ds_type\":5,\"ds_scope\":\"6,9,10\",\"status\":\"0\",\"create_time\":\"2020-11-24 22:02:32\",\"update_time\":\"2020-12-04 15:17:12\",\"del_flag\":0,\"user_id\":9}],\"org\":{\"id\":1,\"pid\":0,\"pids\":\"0\",\"name\":\"cup山西分公司\",\"address\":\"山西太原\",\"phone\":\"18988888888\",\"sort_num\":0,\"status\":\"0\",\"create_time\":\"2020-10-28 14:24:43\",\"update_time\":\"2020-10-28 14:31:11\",\"del_flag\":0},\"roleIds\":[3]}', '{\"errno\":1000,\"errmsg\":\"更新失败\"}', '2020-12-04 19:46:57', 'admin', '221.205.152.43', '山西省太原市', '1', '\"更新失败\"', '1000');
INSERT INTO `cup_log` VALUES (263, 'user', '/admin/user/update', 'PUT', 'update', '{\"id\":9,\"username\":\"test\",\"password\":\"5a2e54ee57e5b7273b9a8fed78c1ebd8\",\"nickname\":\"测试用户1\",\"avatar\":\"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\",\"org_id\":1,\"phone\":\"18911111111\",\"email\":\"22@qq.com\",\"status\":\"1\",\"create_time\":\"2020-11-25 18:25:00\",\"update_time\":\"2020-12-04 19:44:20\",\"del_flag\":0,\"role\":[{\"id\":3,\"name\":\"普通用户\",\"code\":\"customer\",\"remark\":\"\",\"ds_type\":5,\"ds_scope\":\"6,9,10\",\"status\":\"0\",\"create_time\":\"2020-11-24 22:02:32\",\"update_time\":\"2020-12-04 15:17:12\",\"del_flag\":0,\"user_id\":9}],\"org\":{\"id\":1,\"pid\":0,\"pids\":\"0\",\"name\":\"cup山西分公司\",\"address\":\"山西太原\",\"phone\":\"18988888888\",\"sort_num\":0,\"status\":\"0\",\"create_time\":\"2020-10-28 14:24:43\",\"update_time\":\"2020-10-28 14:31:11\",\"del_flag\":0},\"roleIds\":[3]}', '{\"errno\":1000,\"errmsg\":\"更新失败\"}', '2020-12-04 19:52:03', 'admin', '221.205.152.43', '山西省太原市', '1', '\"更新失败\"', '1000');
INSERT INTO `cup_log` VALUES (264, 'user', '/admin/user/update', 'PUT', 'update', '{\"id\":9,\"username\":\"test\",\"password\":\"5a2e54ee57e5b7273b9a8fed78c1ebd8\",\"nickname\":\"测试用户1\",\"avatar\":\"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\",\"org_id\":1,\"phone\":\"18911111111\",\"email\":\"22@qq.com\",\"status\":\"1\",\"create_time\":\"2020-11-25 18:25:00\",\"update_time\":\"2020-12-04 19:44:20\",\"del_flag\":0,\"role\":[{\"id\":3,\"name\":\"普通用户\",\"code\":\"customer\",\"remark\":\"\",\"ds_type\":5,\"ds_scope\":\"6,9,10\",\"status\":\"0\",\"create_time\":\"2020-11-24 22:02:32\",\"update_time\":\"2020-12-04 15:17:12\",\"del_flag\":0,\"user_id\":9}],\"org\":{\"id\":1,\"pid\":0,\"pids\":\"0\",\"name\":\"cup山西分公司\",\"address\":\"山西太原\",\"phone\":\"18988888888\",\"sort_num\":0,\"status\":\"0\",\"create_time\":\"2020-10-28 14:24:43\",\"update_time\":\"2020-10-28 14:31:11\",\"del_flag\":0},\"roleIds\":[3]}', '{\"errno\":1000,\"errmsg\":\"更新失败\"}', '2020-12-04 19:54:05', 'admin', '221.205.152.43', '山西省太原市', '1', '\"更新失败\"', '1000');
INSERT INTO `cup_log` VALUES (265, 'user', '/admin/user/update', 'PUT', 'update', '{\"id\":9,\"username\":\"test\",\"password\":\"5a2e54ee57e5b7273b9a8fed78c1ebd8\",\"nickname\":\"测试用户1\",\"avatar\":\"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\",\"org_id\":1,\"phone\":\"18911111111\",\"email\":\"22@qq.com\",\"status\":\"1\",\"create_time\":\"2020-11-25 18:25:00\",\"update_time\":\"2020-12-04 19:44:20\",\"del_flag\":0,\"role\":[{\"id\":3,\"name\":\"普通用户\",\"code\":\"customer\",\"remark\":\"\",\"ds_type\":5,\"ds_scope\":\"6,9,10\",\"status\":\"0\",\"create_time\":\"2020-11-24 22:02:32\",\"update_time\":\"2020-12-04 15:17:12\",\"del_flag\":0,\"user_id\":9}],\"org\":{\"id\":1,\"pid\":0,\"pids\":\"0\",\"name\":\"cup山西分公司\",\"address\":\"山西太原\",\"phone\":\"18988888888\",\"sort_num\":0,\"status\":\"0\",\"create_time\":\"2020-10-28 14:24:43\",\"update_time\":\"2020-10-28 14:31:11\",\"del_flag\":0},\"roleIds\":[3]}', '{\"errno\":1000,\"errmsg\":\"更新失败\"}', '2020-12-04 19:54:33', 'admin', '221.205.152.43', '山西省太原市', '1', '\"更新失败\"', '1000');
INSERT INTO `cup_log` VALUES (266, 'user', '/admin/user/update', 'PUT', 'update', '{\"id\":9,\"username\":\"test\",\"password\":\"5a2e54ee57e5b7273b9a8fed78c1ebd8\",\"nickname\":\"测试用户1\",\"avatar\":\"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\",\"org_id\":1,\"phone\":\"18911111111\",\"email\":\"22@qq.com\",\"status\":\"1\",\"create_time\":\"2020-11-25 18:25:00\",\"update_time\":\"2020-12-04 19:44:20\",\"del_flag\":0,\"role\":[{\"id\":3,\"name\":\"普通用户\",\"code\":\"customer\",\"remark\":\"\",\"ds_type\":5,\"ds_scope\":\"6,9,10\",\"status\":\"0\",\"create_time\":\"2020-11-24 22:02:32\",\"update_time\":\"2020-12-04 15:17:12\",\"del_flag\":0,\"user_id\":9}],\"org\":{\"id\":1,\"pid\":0,\"pids\":\"0\",\"name\":\"cup山西分公司\",\"address\":\"山西太原\",\"phone\":\"18988888888\",\"sort_num\":0,\"status\":\"0\",\"create_time\":\"2020-10-28 14:24:43\",\"update_time\":\"2020-10-28 14:31:11\",\"del_flag\":0},\"roleIds\":[3]}', '{\"errno\":1000,\"errmsg\":\"更新失败\"}', '2020-12-04 19:56:22', 'admin', '221.205.152.43', '山西省太原市', '1', '\"更新失败\"', '1000');
INSERT INTO `cup_log` VALUES (267, 'user', '/admin/user/update', 'PUT', 'update', '{\"id\":9,\"username\":\"test\",\"password\":\"5a2e54ee57e5b7273b9a8fed78c1ebd8\",\"nickname\":\"测试用户1\",\"avatar\":\"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\",\"org_id\":1,\"phone\":\"18911111111\",\"email\":\"22@qq.com\",\"status\":\"1\",\"create_time\":\"2020-11-25 18:25:00\",\"update_time\":\"2020-12-04 19:44:20\",\"del_flag\":0,\"role\":[{\"id\":3,\"name\":\"普通用户\",\"code\":\"customer\",\"remark\":\"\",\"ds_type\":5,\"ds_scope\":\"6,9,10\",\"status\":\"0\",\"create_time\":\"2020-11-24 22:02:32\",\"update_time\":\"2020-12-04 15:17:12\",\"del_flag\":0,\"user_id\":9}],\"org\":{\"id\":1,\"pid\":0,\"pids\":\"0\",\"name\":\"cup山西分公司\",\"address\":\"山西太原\",\"phone\":\"18988888888\",\"sort_num\":0,\"status\":\"0\",\"create_time\":\"2020-10-28 14:24:43\",\"update_time\":\"2020-10-28 14:31:11\",\"del_flag\":0},\"roleIds\":[3]}', '{\"errno\":1000,\"errmsg\":\"更新失败ReferenceError: avatar is not defined\"}', '2020-12-04 19:57:51', 'admin', '221.205.152.43', '山西省太原市', '1', '\"更新失败ReferenceError: avatar is not defined\"', '1000');
COMMIT;

-- ----------------------------
-- Table structure for cup_menu
-- ----------------------------
DROP TABLE IF EXISTS `cup_menu`;
CREATE TABLE `cup_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `pid` int(11) DEFAULT NULL COMMENT '父id',
  `path` varchar(255) DEFAULT NULL COMMENT '路由地址',
  `permission` varchar(50) DEFAULT NULL COMMENT '按钮权限',
  `component` varchar(50) DEFAULT NULL COMMENT '组件路径',
  `name` varchar(50) DEFAULT NULL COMMENT '菜单名称',
  `icon` varchar(50) DEFAULT NULL COMMENT '菜单图标',
  `visible` int(11) DEFAULT '1' COMMENT '是否显示 1是 0否',
  `status` varchar(1) DEFAULT '1' COMMENT '状态 1停用 0正常',
  `is_cache` int(11) DEFAULT '1' COMMENT '是否缓存 1是 0否',
  `is_frame` int(11) DEFAULT '0' COMMENT '是否为外链（1是 0否）',
  `type` int(11) DEFAULT NULL COMMENT '类型：1菜单 2按钮 3目录',
  `sort_num` int(11) DEFAULT '0' COMMENT '排序',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `del_flag` int(11) DEFAULT '0' COMMENT '是否删除 1是 0否',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='菜单表';

-- ----------------------------
-- Records of cup_menu
-- ----------------------------
BEGIN;
INSERT INTO `cup_menu` VALUES (1, 13, 'user', '', 'system/user/index', '用户管理', 'user', 1, '0', 1, 0, 1, 0, '2020-11-23 23:34:41', '2020-11-29 09:10:09', 0);
INSERT INTO `cup_menu` VALUES (2, 13, 'role', '', 'system/role/index', '角色管理', 'peoples', 1, '0', 1, 0, 1, 0, '2020-11-23 23:34:41', '2020-11-29 09:10:09', 0);
INSERT INTO `cup_menu` VALUES (3, 13, 'menu', '', 'system/menu/index', '菜单管理', 'table', 1, '0', 1, 0, 1, 0, '2020-11-23 23:34:41', '2020-11-29 12:26:50', 0);
INSERT INTO `cup_menu` VALUES (4, 1, '', '/user/add', '', '用户新增', '', 0, '0', 1, 0, 2, 0, '2020-11-23 23:34:41', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (5, 1, '', '/user/delete', '', '用户删除', '', 0, '0', 1, 0, 2, 0, '2020-11-23 23:34:41', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (6, 1, '', '/user/update', '', '用户修改', '', 0, '0', 1, 0, 2, 0, '2020-11-23 23:34:41', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (7, 1, '', '/user/retrieve', '', '用户查询', '', 0, '0', 1, 0, 2, 0, '2020-11-23 23:34:41', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (12, 13, 'org', '', 'system/org/index', '部门管理', 'tree', 1, '0', 1, 0, 1, 0, '2020-11-24 00:05:44', '2020-11-29 09:10:09', 0);
INSERT INTO `cup_menu` VALUES (13, 0, 'system', '', NULL, '系统管理', 'system', 1, '0', 1, 0, 3, 1, '2020-11-24 19:37:00', '2020-12-01 15:58:43', 0);
INSERT INTO `cup_menu` VALUES (15, 3, '', '/menu/add', '', '菜单新增', '', 0, '0', 1, 0, 2, 0, '2020-11-26 14:49:00', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (16, 2, '', '/role/add', '', '角色新增', '', 0, '0', 1, 0, 2, 0, '2020-11-26 14:57:41', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (17, 2, '', '/role/update', '', '角色修改', '', 0, '0', 1, 0, 2, 0, '2020-11-26 14:57:58', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (18, 2, '', '/role/delete', '', '角色删除', '', 0, '0', 1, 0, 2, 0, '2020-11-26 14:58:18', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (19, 2, '', '/role/retrieve', '', '角色查询', '', 0, '0', 1, 0, 2, 0, '2020-11-26 14:58:46', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (20, 3, '', '/menu/update', '', '菜单修改', '', 0, '0', 1, 0, 2, 0, '2020-11-26 14:59:44', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (21, 3, '', '/menu/retrieve', '', '菜单查询', '', 0, '0', 1, 0, 2, 0, '2020-11-26 15:00:16', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (22, 3, '', '/menu/delete', '', '菜单删除', '', 0, '0', 1, 0, 2, 0, '2020-11-26 15:01:20', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (23, 12, '', '/org/add', '', '部门新增', '', 0, '0', 1, 0, 2, 0, '2020-11-26 15:02:08', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (24, 12, '', '/org/delete', '', '部门删除', '', 0, '0', 1, 0, 2, 0, '2020-11-26 15:02:34', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (25, 12, '', '/org/update', '', '部门修改', '', 0, '0', 1, 0, 2, 0, '2020-11-26 15:02:52', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (26, 12, '', '/org/retrieve', '', '部门查询', '', 0, '0', 1, 0, 2, 0, '2020-11-26 15:03:32', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (27, 2, '', '/role/authorization', '', '授权', '', 0, '0', 1, 0, 2, 0, '2020-11-26 15:07:10', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (28, 1, '', '/user/resetPwd', '', '重置密码', '', 0, '0', 1, 0, 2, 0, '2020-11-26 15:20:03', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (29, 13, 'dict', '', 'system/dict/index', '字典管理', 'dict', 1, '0', 1, 0, 1, 0, '2020-11-28 16:45:16', '2020-12-03 14:19:24', 0);
INSERT INTO `cup_menu` VALUES (30, 29, '', '/dict/add', '', '字典新增', '', 0, '0', 1, 0, 2, 0, '2020-11-29 11:30:55', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (31, 29, '', '/dict/retrieve', '', '字典查询', '', 0, '0', 1, 0, 2, 0, '2020-11-29 11:32:06', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (32, 29, '', '/dict/delete', '', '字典删除', '', 0, '0', 1, 0, 2, 0, '2020-11-29 11:33:35', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (33, 29, '', '/dict/update', '', '字典修改', '', 0, '0', 1, 0, 2, 0, '2020-11-29 11:46:15', '2020-11-29 16:30:08', 0);
INSERT INTO `cup_menu` VALUES (34, 13, 'config', '', 'system/config/index', '参数设置', 'edit', 1, '0', 1, 0, 1, 0, '2020-11-29 11:54:56', NULL, 0);
INSERT INTO `cup_menu` VALUES (35, 0, 'https://lvcoding.com', '', NULL, '博客', 'star', 1, '0', 0, 1, 3, 3, '2020-11-29 15:48:18', '2020-12-01 15:58:58', 0);
INSERT INTO `cup_menu` VALUES (36, 0, 'https://gitee.com/wuyanshen/cup-nodejs', '', NULL, '去码云给个star', 'button', 1, '0', 1, 1, 3, 4, '2020-11-29 15:57:09', '2020-12-01 15:59:02', 0);
INSERT INTO `cup_menu` VALUES (37, 34, '', '/config/add', NULL, '参数新增', '', 0, '0', 1, 0, 2, 0, '2020-11-29 16:19:41', '2020-11-29 16:28:11', 0);
INSERT INTO `cup_menu` VALUES (38, 34, '', '/config/update', NULL, '参数修改', '', 0, '0', 1, 0, 2, 0, '2020-11-29 16:27:57', NULL, 0);
INSERT INTO `cup_menu` VALUES (39, 34, '', '/config/retrieve', NULL, '菜单查询', '', 0, '0', 1, 0, 2, 0, '2020-11-29 16:28:48', '2020-11-29 16:29:03', 0);
INSERT INTO `cup_menu` VALUES (40, 34, '', '/config/delete', NULL, '参数删除', '', 0, '0', 1, 0, 2, 0, '2020-11-29 16:29:26', NULL, 0);
INSERT INTO `cup_menu` VALUES (41, 45, 'log', '', 'system/log/index', '操作日志', 'log', 1, '0', 1, 0, 1, 0, '2020-11-30 22:47:38', '2020-12-02 18:03:51', 0);
INSERT INTO `cup_menu` VALUES (43, 41, '', '/log/retrieve', NULL, '日志查询', '', 0, '0', 1, 0, 2, 0, '2020-11-30 23:54:57', NULL, 0);
INSERT INTO `cup_menu` VALUES (44, 41, '', '/log/clear', NULL, '清空日志', '', 0, '0', 1, 0, 2, 0, '2020-11-30 23:55:21', NULL, 0);
INSERT INTO `cup_menu` VALUES (45, 0, '', '', NULL, '系统监控', 'monitor', 1, '0', 1, 0, 3, 2, '2020-12-01 15:53:22', '2020-12-01 15:58:51', 0);
INSERT INTO `cup_menu` VALUES (46, 45, 'monitor', '', 'system/monitor/index', '服务监控', 'server', 1, '0', 1, 0, 1, 0, '2020-12-01 15:56:10', NULL, 0);
INSERT INTO `cup_menu` VALUES (47, 45, 'http://localhost:9999/static/apidoc/index.html', '', NULL, '接口API', 'documentation', 1, '0', 1, 1, 3, 0, '2020-12-03 14:39:46', NULL, 0);
COMMIT;

-- ----------------------------
-- Table structure for cup_org
-- ----------------------------
DROP TABLE IF EXISTS `cup_org`;
CREATE TABLE `cup_org` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `pid` int(11) DEFAULT '0' COMMENT '机构父id',
  `pids` varchar(100) DEFAULT NULL COMMENT '所有父级id',
  `name` varchar(50) DEFAULT NULL COMMENT '机构名称',
  `address` varchar(50) DEFAULT NULL COMMENT '机构地址',
  `phone` varchar(20) DEFAULT NULL COMMENT '手机号',
  `sort_num` int(11) DEFAULT '0' COMMENT '排序',
  `status` varchar(1) DEFAULT '0',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `del_flag` int(11) DEFAULT '0' COMMENT '删除标记 0未删除 1已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='机构表';

-- ----------------------------
-- Records of cup_org
-- ----------------------------
BEGIN;
INSERT INTO `cup_org` VALUES (1, 0, '0', 'cup山西分公司', '山西太原', '18988888888', 0, '0', '2020-10-28 14:24:43', '2020-10-28 14:31:11', 0);
INSERT INTO `cup_org` VALUES (2, 1, '0', '技术部', '山西太原', '111', 2, '0', '2020-10-28 14:26:02', '2020-12-03 16:47:15', 0);
INSERT INTO `cup_org` VALUES (3, 1, '0', '财务部', '山西太原', '18911111111', 0, '0', '2020-10-28 14:26:21', '2020-11-29 15:42:35', 0);
INSERT INTO `cup_org` VALUES (4, 1, '0', '业务部', '山西太原', NULL, 0, '0', '2020-10-28 14:26:31', '2020-10-28 14:31:26', 0);
INSERT INTO `cup_org` VALUES (5, 1, '0', '人事部', '山西太原', '18822222222', 1, '0', '2020-10-28 14:26:34', '2020-12-03 16:47:33', 0);
INSERT INTO `cup_org` VALUES (6, 0, '0', 'cup北京分公司', '山西太原', '18688888888', 0, '0', '2020-10-28 14:27:22', '2020-10-28 14:31:30', 0);
INSERT INTO `cup_org` VALUES (7, 6, '6', '技术部', '山西太原', NULL, 0, '0', '2020-10-28 14:26:02', '2020-10-28 14:31:35', 0);
INSERT INTO `cup_org` VALUES (8, 6, '6', '财务部', '山西太原', NULL, 0, '0', '2020-10-28 14:26:02', '2020-10-28 14:31:35', 0);
INSERT INTO `cup_org` VALUES (9, 6, '6', '业务部', '山西太原', '111', 0, '1', '2020-10-28 14:26:02', '2020-11-25 16:38:26', 0);
INSERT INTO `cup_org` VALUES (10, 6, '6', '技术部', '山西太原', '188', 0, '1', '2020-10-28 14:26:02', '2020-11-25 16:38:20', 0);
COMMIT;

-- ----------------------------
-- Table structure for cup_qrcode
-- ----------------------------
DROP TABLE IF EXISTS `cup_qrcode`;
CREATE TABLE `cup_qrcode` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `qrcode` longtext COMMENT '二维码图片base64字符串',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='二维码图片表';

-- ----------------------------
-- Records of cup_qrcode
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for cup_role
-- ----------------------------
DROP TABLE IF EXISTS `cup_role`;
CREATE TABLE `cup_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(20) DEFAULT NULL COMMENT '角色名称',
  `code` varchar(20) DEFAULT NULL COMMENT '角色编码',
  `remark` varchar(50) DEFAULT NULL COMMENT '备注',
  `ds_type` int(11) DEFAULT '1' COMMENT '数据权限：1全部数据  2按明细设置  3所在公司（部门）及以下数据 4所在公司（部门）数据 5仅本人数据 ',
  `ds_scope` varchar(100) DEFAULT NULL COMMENT '数据范围(数据权限是2按明细设置时有值)',
  `status` varchar(1) DEFAULT '0' COMMENT '是否启用 0是 1否',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `del_flag` int(11) DEFAULT '0' COMMENT '是否删除 0否 1是',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='角色表';

-- ----------------------------
-- Records of cup_role
-- ----------------------------
BEGIN;
INSERT INTO `cup_role` VALUES (1, '管理员', 'admin', '我是管理员', 1, '1,3,4,5', '0', '2020-11-24 22:02:32', '2020-11-29 12:40:36', 0);
INSERT INTO `cup_role` VALUES (3, '普通用户', 'customer', '', 5, '6,9,10', '0', '2020-11-24 22:02:32', '2020-12-04 15:17:12', 0);
INSERT INTO `cup_role` VALUES (7, '测试角色', 'test', 't', 1, '', '1', '2020-11-26 13:31:22', '2020-11-29 16:08:30', 0);
COMMIT;

-- ----------------------------
-- Table structure for cup_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `cup_role_menu`;
CREATE TABLE `cup_role_menu` (
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `menu_id` int(11) NOT NULL COMMENT '菜单id',
  PRIMARY KEY (`role_id`,`menu_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='角色菜单表';

-- ----------------------------
-- Records of cup_role_menu
-- ----------------------------
BEGIN;
INSERT INTO `cup_role_menu` VALUES (1, 1);
INSERT INTO `cup_role_menu` VALUES (1, 2);
INSERT INTO `cup_role_menu` VALUES (1, 3);
INSERT INTO `cup_role_menu` VALUES (1, 4);
INSERT INTO `cup_role_menu` VALUES (1, 5);
INSERT INTO `cup_role_menu` VALUES (1, 6);
INSERT INTO `cup_role_menu` VALUES (1, 7);
INSERT INTO `cup_role_menu` VALUES (1, 12);
INSERT INTO `cup_role_menu` VALUES (1, 13);
INSERT INTO `cup_role_menu` VALUES (1, 15);
INSERT INTO `cup_role_menu` VALUES (1, 16);
INSERT INTO `cup_role_menu` VALUES (1, 17);
INSERT INTO `cup_role_menu` VALUES (1, 18);
INSERT INTO `cup_role_menu` VALUES (1, 19);
INSERT INTO `cup_role_menu` VALUES (1, 20);
INSERT INTO `cup_role_menu` VALUES (1, 21);
INSERT INTO `cup_role_menu` VALUES (1, 22);
INSERT INTO `cup_role_menu` VALUES (1, 23);
INSERT INTO `cup_role_menu` VALUES (1, 24);
INSERT INTO `cup_role_menu` VALUES (1, 25);
INSERT INTO `cup_role_menu` VALUES (1, 26);
INSERT INTO `cup_role_menu` VALUES (1, 27);
INSERT INTO `cup_role_menu` VALUES (1, 28);
INSERT INTO `cup_role_menu` VALUES (1, 29);
INSERT INTO `cup_role_menu` VALUES (1, 30);
INSERT INTO `cup_role_menu` VALUES (1, 31);
INSERT INTO `cup_role_menu` VALUES (1, 32);
INSERT INTO `cup_role_menu` VALUES (1, 33);
INSERT INTO `cup_role_menu` VALUES (1, 34);
INSERT INTO `cup_role_menu` VALUES (1, 35);
INSERT INTO `cup_role_menu` VALUES (1, 36);
INSERT INTO `cup_role_menu` VALUES (1, 37);
INSERT INTO `cup_role_menu` VALUES (1, 38);
INSERT INTO `cup_role_menu` VALUES (1, 39);
INSERT INTO `cup_role_menu` VALUES (1, 40);
INSERT INTO `cup_role_menu` VALUES (1, 41);
INSERT INTO `cup_role_menu` VALUES (1, 43);
INSERT INTO `cup_role_menu` VALUES (1, 44);
INSERT INTO `cup_role_menu` VALUES (1, 45);
INSERT INTO `cup_role_menu` VALUES (1, 46);
INSERT INTO `cup_role_menu` VALUES (1, 47);
INSERT INTO `cup_role_menu` VALUES (2, 2);
INSERT INTO `cup_role_menu` VALUES (2, 3);
INSERT INTO `cup_role_menu` VALUES (3, 1);
INSERT INTO `cup_role_menu` VALUES (3, 2);
INSERT INTO `cup_role_menu` VALUES (3, 3);
INSERT INTO `cup_role_menu` VALUES (3, 7);
INSERT INTO `cup_role_menu` VALUES (3, 12);
INSERT INTO `cup_role_menu` VALUES (3, 13);
INSERT INTO `cup_role_menu` VALUES (3, 19);
INSERT INTO `cup_role_menu` VALUES (3, 21);
INSERT INTO `cup_role_menu` VALUES (3, 26);
INSERT INTO `cup_role_menu` VALUES (8, 1);
INSERT INTO `cup_role_menu` VALUES (8, 2);
INSERT INTO `cup_role_menu` VALUES (8, 3);
INSERT INTO `cup_role_menu` VALUES (8, 4);
INSERT INTO `cup_role_menu` VALUES (8, 5);
INSERT INTO `cup_role_menu` VALUES (8, 6);
INSERT INTO `cup_role_menu` VALUES (8, 7);
INSERT INTO `cup_role_menu` VALUES (8, 12);
INSERT INTO `cup_role_menu` VALUES (8, 13);
INSERT INTO `cup_role_menu` VALUES (8, 15);
INSERT INTO `cup_role_menu` VALUES (8, 16);
INSERT INTO `cup_role_menu` VALUES (8, 17);
INSERT INTO `cup_role_menu` VALUES (8, 18);
INSERT INTO `cup_role_menu` VALUES (8, 19);
INSERT INTO `cup_role_menu` VALUES (8, 20);
INSERT INTO `cup_role_menu` VALUES (8, 21);
INSERT INTO `cup_role_menu` VALUES (8, 22);
INSERT INTO `cup_role_menu` VALUES (8, 23);
INSERT INTO `cup_role_menu` VALUES (8, 24);
INSERT INTO `cup_role_menu` VALUES (8, 25);
INSERT INTO `cup_role_menu` VALUES (8, 26);
INSERT INTO `cup_role_menu` VALUES (8, 27);
INSERT INTO `cup_role_menu` VALUES (8, 28);
INSERT INTO `cup_role_menu` VALUES (8, 29);
INSERT INTO `cup_role_menu` VALUES (8, 30);
INSERT INTO `cup_role_menu` VALUES (8, 31);
INSERT INTO `cup_role_menu` VALUES (8, 32);
INSERT INTO `cup_role_menu` VALUES (8, 33);
INSERT INTO `cup_role_menu` VALUES (8, 34);
INSERT INTO `cup_role_menu` VALUES (8, 35);
INSERT INTO `cup_role_menu` VALUES (8, 36);
INSERT INTO `cup_role_menu` VALUES (8, 37);
INSERT INTO `cup_role_menu` VALUES (8, 38);
INSERT INTO `cup_role_menu` VALUES (8, 39);
INSERT INTO `cup_role_menu` VALUES (8, 40);
INSERT INTO `cup_role_menu` VALUES (8, 41);
COMMIT;

-- ----------------------------
-- Table structure for cup_user
-- ----------------------------
DROP TABLE IF EXISTS `cup_user`;
CREATE TABLE `cup_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(20) DEFAULT NULL COMMENT '登录名',
  `password` varchar(50) DEFAULT NULL COMMENT '密码',
  `nickname` varchar(50) DEFAULT NULL COMMENT '用户昵称',
  `avatar` varchar(100) DEFAULT NULL COMMENT '头像',
  `org_id` int(11) DEFAULT NULL COMMENT '部门id',
  `phone` varchar(12) DEFAULT NULL COMMENT '手机号',
  `email` varchar(20) DEFAULT NULL COMMENT '邮箱',
  `status` varchar(1) DEFAULT '0' COMMENT '状态: 0正常 1停用',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `del_flag` int(11) DEFAULT '0' COMMENT '删除标志 0未删除 1已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='用户表';

-- ----------------------------
-- Records of cup_user
-- ----------------------------
BEGIN;
INSERT INTO `cup_user` VALUES (5, 'admin', 'b9d11b3be25f5a1a7dc8ca04cd310b28', '系统管理员', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 0, '18888888888', '66@qq.com', '0', '2020-11-19 18:33:37', '2020-12-04 15:31:05', 0);
INSERT INTO `cup_user` VALUES (8, 'wk', 'eadbd8c4c841524a70b324164881f812', '悟空1', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 5, '18888888888', '22@qq.com', '0', '2020-11-23 23:21:36', '2020-12-04 15:12:59', 0);
INSERT INTO `cup_user` VALUES (9, 'test', '5a2e54ee57e5b7273b9a8fed78c1ebd8', '测试用户1', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', 1, '18911111111', '22@qq.com', '1', '2020-11-25 18:25:00', '2020-12-04 19:44:20', 0);
COMMIT;

-- ----------------------------
-- Table structure for cup_user_role
-- ----------------------------
DROP TABLE IF EXISTS `cup_user_role`;
CREATE TABLE `cup_user_role` (
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `role_id` int(11) NOT NULL COMMENT '角色id',
  PRIMARY KEY (`user_id`,`role_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='用户角色关联表';

-- ----------------------------
-- Records of cup_user_role
-- ----------------------------
BEGIN;
INSERT INTO `cup_user_role` VALUES (5, 1);
INSERT INTO `cup_user_role` VALUES (8, 3);
INSERT INTO `cup_user_role` VALUES (9, 3);
COMMIT;

-- ----------------------------
-- Table structure for cup_wx_user
-- ----------------------------
DROP TABLE IF EXISTS `cup_wx_user`;
CREATE TABLE `cup_wx_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `nick_name` varchar(20) DEFAULT NULL COMMENT '微信昵称',
  `gender` int(11) DEFAULT NULL COMMENT '性别',
  `language` varchar(10) DEFAULT NULL COMMENT '语言',
  `city` varchar(10) DEFAULT NULL COMMENT '城市',
  `province` varchar(10) DEFAULT NULL COMMENT '省会',
  `country` varchar(10) DEFAULT NULL COMMENT '国家',
  `avatar_url` varchar(500) DEFAULT NULL COMMENT '微信头像url',
  `open_id` varchar(50) DEFAULT NULL COMMENT '微信openId',
  `password` varchar(50) DEFAULT NULL COMMENT '密码',
  `register_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  `last_login_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '最后登录时间',
  `del_flag` int(11) DEFAULT '0' COMMENT '是否删除标志',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC COMMENT='微信用户信息表';

-- ----------------------------
-- Records of cup_wx_user
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
