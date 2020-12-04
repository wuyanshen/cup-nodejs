
// ------------------------------- 通用定义 start ---------------------------------------
/**
 * @apiDefine RequestHeader
 *
 * @apiHeader  {String} x-cup-token 授权认证字段
 */

/**
 * @apiDefine RequestPagingParam
 *
 * @apiParam {int} page 开始页数【必填】
 * @apiParam {int} size 每页记录条数【必填】
 */

/**
 * @apiDefine RequestError
 *
 * @apiError {int} errcode 错误代码
 * @apiError {String} errmsg 错误信息
 * @apiErrorExample 失败-返回信息:
 *     HTTP/1.1 200 OK
 *     {
 *      "errcode":1000,
 *      "errmsg":"参数错误",
 *     }
 */

/**
 * @apiDefine RequestSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 *     HTTP/1.1 200 OK
 *     {
 *      "errcode":0,
 *      "errmsg":"请求成功",
 *      "data": { ... }
 *     }
 */

/**
 * @apiDefine addSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 *     HTTP/1.1 200 OK
 *     {
 *      "errcode": 0,
 *      "errmsg":"新增成功",
 *      "data": ""
 *     }
 */

/**
 * @apiDefine updateSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 *     HTTP/1.1 200 OK
 *     {
 *      "errcode": 0,
 *      "errmsg":"更新成功",
 *      "data": ""
 *     }
 */

/**
 * @apiDefine deleteSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 *     HTTP/1.1 200 OK
 *     {
 *      "errcode": 0,
 *      "errmsg":"删除成功",
 *      "data": ""
 *     }
 */

/**
 * @apiDefine RequestPagingResult
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {int} count 记录总数
 * @apiSuccess {int} totalPages 总页数
 * @apiSuccess {int} pageSize 每页条数
 * @apiSuccess {int} currentPage 当前页数
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 *
 */
// ------------------------------- 通用定义 end -----------------------------------------

// ------------------------------- 登录/退出接口-成功返回定义 start ---------------------------------------
/**
 * @apiDefine authLoginSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 *      HTTP/1.1 200 OK
 *      {
 *           "errno": 0,
 *           "errmsg": "登录成功",
 *           "data": {
 *               "userInfo": {
 *                   "id": 5,
 *                   "username": "admin"
 *               },
 *               "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTYwNjk2NDMyNywiZXhwIjoxNjA2OTY2MTI3fQ.U0Wtr282QRJGWXs4cdZry7HgMSXMCjBobDfH8LjB5-U"
 *           }
 *       }
 */

/**
 * @apiDefine authLoginError
 *
 * @apiError {int} errcode 错误代码
 * @apiError {String} errmsg 错误信息
 * @apiErrorExample 用户名/密码错误-返回信息:
 *     HTTP/1.1 200 OK
 *     {
 *      "errcode":1000,
 *      "errmsg":"用户名或密码错误",
 *     }
 * @apiErrorExample 账户停用-返回信息:
 *     HTTP/1.1 200 OK
 *     {
 *      "errcode":1000,
 *      "errmsg":"您的账户已停用，请联系管理员",
 *     }
 */

/**
 * @apiDefine authLogoutSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
*       HTTP/1.1 200 OK
*       {
            "errno": 0,
            "errmsg": "",
            "data": "退出成功"
        }
 */

/**
 * @apiDefine checkPwdSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 *       HTTP/1.1 200 OK
 *       {
 *          "errno": 0,
 *          "errmsg": "旧密码正确",
 *          "data": 1
 *       }
 *      或者
 *       {
 *          "errno": 0,
 *          "errmsg": "旧密码不正确",
 *          "data": 0
 *       }
 */
// ------------------------------- 登录/退出接口-成功返回定义 end ---------------------------------------

// ------------------------------- 用户接口-成功返回定义 start ---------------------------------------
/**
 * @apiDefine userInfoSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 *     HTTP/1.1 200 OK
 *     {
            "errno": 0,
            "errmsg": "",
            "data": {
                "id": 5,
                "username": "admin",
                "password": "b9d11b3be25f5a1a7dc8ca04cd310b28",
                "nickname": "系统管理员",
                "avatar": "",
                "org_id": 0,
                "phone": "18888888888",
                "email": "66@qq.com",
                "status": "0",
                "create_time": "2020-11-19 18:33:37",
                "update_time": "2020-11-30 23:34:26",
                "del_flag": 0,
                "role": [
                    {
                        "id": 1,
                        "name": "管理员",
                        "code": "admin",
                        "remark": "我是管理员",
                        "ds_type": 1,
                        "ds_scope": "1,3,4,5",
                        "status": "0",
                        "create_time": "2020-11-24 22:02:32",
                        "update_time": "2020-11-29 12:40:36",
                        "del_flag": 0,
                        "user_id": 5
                    }
                ]
            }
        }
 */

/**
 * @apiDefine userRetrieveSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 *     HTTP/1.1 200 OK
 *     {
            "errno": 0,
            "errmsg": "查询成功",
            "data": {
                "count": 3,
                "totalPages": 1,
                "pageSize": 10,
                "currentPage": 1,
                "data": [
                    {
                        "id": 5,
                        "username": "admin",
                        "password": "b9d11b3be25f5a1a7dc8ca04cd310b28",
                        "nickname": "系统管理员",
                        "avatar": "",
                        "org_id": 0,
                        "phone": "18888888888",
                        "email": "66@qq.com",
                        "status": "0",
                        "create_time": "2020-11-19 18:33:37",
                        "update_time": "2020-11-30 23:34:26",
                        "del_flag": 0,
                        "role": [
                            {
                                "id": 1,
                                "name": "管理员",
                                "code": "admin",
                                "remark": "我是管理员",
                                "ds_type": 1,
                                "ds_scope": "1,3,4,5",
                                "status": "0",
                                "create_time": "2020-11-24 22:02:32",
                                "update_time": "2020-11-29 12:40:36",
                                "del_flag": 0,
                                "user_id": 5
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "username": "wk",
                        "password": "eadbd8c4c841524a70b324164881f812",
                        "nickname": "悟空1",
                        "avatar": "",
                        "org_id": 5,
                        "phone": "18888888888",
                        "email": "22@qq.com",
                        "status": "0",
                        "create_time": "2020-11-23 23:21:36",
                        "update_time": "2020-11-25 18:00:31",
                        "del_flag": 0,
                        "role": [
                            {
                                "id": 3,
                                "name": "普通用户",
                                "code": "customer",
                                "remark": "",
                                "ds_type": 2,
                                "ds_scope": "6,9,10",
                                "status": "0",
                                "create_time": "2020-11-24 22:02:32",
                                "update_time": "2020-11-26 13:08:42",
                                "del_flag": 0,
                                "user_id": 8
                            }
                        ],
                        "org": {
                            "id": 5,
                            "pid": 1,
                            "pids": "0",
                            "name": "人事部",
                            "address": "北京海淀",
                            "phone": null,
                            "sort_num": 0,
                            "status": "0",
                            "create_time": "2020-10-28 14:26:34",
                            "update_time": "2020-10-28 14:31:28",
                            "del_flag": 0
                        }
                    },
                    {
                        "id": 9,
                        "username": "test",
                        "password": "5a2e54ee57e5b7273b9a8fed78c1ebd8",
                        "nickname": "测试用户",
                        "avatar": "",
                        "org_id": 1,
                        "phone": "18911111111",
                        "email": "22@qq.com",
                        "status": "1",
                        "create_time": "2020-11-25 18:25:00",
                        "update_time": "2020-12-02 18:11:44",
                        "del_flag": 0,
                        "role": [
                            {
                                "id": 3,
                                "name": "普通用户",
                                "code": "customer",
                                "remark": "",
                                "ds_type": 2,
                                "ds_scope": "6,9,10",
                                "status": "0",
                                "create_time": "2020-11-24 22:02:32",
                                "update_time": "2020-11-26 13:08:42",
                                "del_flag": 0,
                                "user_id": 9
                            }
                        ],
                        "org": {
                            "id": 1,
                            "pid": 0,
                            "pids": "0",
                            "name": "cup北京分公司",
                            "address": "北京海淀",
                            "phone": "18988888888",
                            "sort_num": 0,
                            "status": "0",
                            "create_time": "2020-10-28 14:24:43",
                            "update_time": "2020-10-28 14:31:11",
                            "del_flag": 0
                        }
                    }
                ]
            }
        }
 */
// ------------------------------- 用户接口-成功返回定义 end -----------------------------------------

// ------------------------------- 角色接口-成功返回定义 start ---------------------------------------
/**
 * @apiDefine roleRetrieveSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 * {
    "errno": 0,
    "errmsg": "查询成功",
    "data": {
        "count": 1,
        "totalPages": 1,
        "pageSize": 10,
        "currentPage": 1,
        "data": [
            {
                "id": 3,
                "name": "普通用户",
                "code": "customer",
                "remark": "",
                "ds_type": 2,
                "ds_scope": "6,9,10",
                "status": "0",
                "create_time": "2020-11-24 22:02:32",
                "update_time": "2020-11-26 13:08:42",
                "del_flag": 0
            }
        ]
    }
}
 */

/**
 * @apiDefine roleToMenuIdsSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 * {
    "errno": 0,
    "errmsg": "查询成功",
    "data": [
        1,
        2,
        3
    ]
}
 */

/**
 * @apiDefine roleAllSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 * {
    "errno": 0,
    "errmsg": "查询成功",
    "data": [
        {
            "id": 1,
            "name": "管理员",
            "code": "admin",
            "remark": "我是管理员",
            "ds_type": 1,
            "ds_scope": "1,3,4,5",
            "status": "0",
            "create_time": "2020-11-24 22:02:32",
            "update_time": "2020-11-29 12:40:36",
            "del_flag": 0
        },
        {
            "id": 3,
            "name": "普通用户",
            "code": "customer",
            "remark": "",
            "ds_type": 2,
            "ds_scope": "6,9,10",
            "status": "0",
            "create_time": "2020-11-24 22:02:32",
            "update_time": "2020-11-26 13:08:42",
            "del_flag": 0
        }
    ]
}
 */
// ------------------------------- 角色接口-成功返回定义 end -----------------------------------------

// ------------------------------- 菜单接口-成功返回定义 start ---------------------------------------

/**
 * @apiDefine menuRetrieveSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 * {
    "errno": 0,
    "errmsg": "查询成功",
    "data": [
        {
            "id": 1,
            "pid": 13,
            "path": "user",
            "permission": "",
            "component": "system/user/index",
            "name": "用户管理",
            "icon": "user",
            "visible": 1,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 1,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 09:10:09",
            "del_flag": 0
        },
        {
            "id": 4,
            "pid": 1,
            "path": "",
            "permission": "/user/add",
            "component": "",
            "name": "用户新增",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        },
        {
            "id": 5,
            "pid": 1,
            "path": "",
            "permission": "/user/delete",
            "component": "",
            "name": "用户删除",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        },
        {
            "id": 6,
            "pid": 1,
            "path": "",
            "permission": "/user/update",
            "component": "",
            "name": "用户修改",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        },
        {
            "id": 7,
            "pid": 1,
            "path": "",
            "permission": "/user/retrieve",
            "component": "",
            "name": "用户查询",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        }
    ]
}
 */

/**
 * @apiDefine menuTreeSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 * {
    "errno": 0,
    "errmsg": "查询成功",
    "data": [
        {
            "id": 1,
            "pid": 13,
            "path": "user",
            "permission": "",
            "component": "system/user/index",
            "name": "用户管理",
            "icon": "user",
            "visible": 1,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 1,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 09:10:09",
            "del_flag": 0
        },
        {
            "id": 4,
            "pid": 1,
            "path": "",
            "permission": "/user/add",
            "component": "",
            "name": "用户新增",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        },
        {
            "id": 5,
            "pid": 1,
            "path": "",
            "permission": "/user/delete",
            "component": "",
            "name": "用户删除",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        },
        {
            "id": 6,
            "pid": 1,
            "path": "",
            "permission": "/user/update",
            "component": "",
            "name": "用户修改",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        },
        {
            "id": 7,
            "pid": 1,
            "path": "",
            "permission": "/user/retrieve",
            "component": "",
            "name": "用户查询",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        }
    ]
}
 */

/**
 * @apiDefine menuAllSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 * {
    "errno": 0,
    "errmsg": "查询成功",
    "data": [
        {
            "id": 1,
            "pid": 13,
            "path": "user",
            "permission": "",
            "component": "system/user/index",
            "name": "用户管理",
            "icon": "user",
            "visible": 1,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 1,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 09:10:09",
            "del_flag": 0
        },
        {
            "id": 4,
            "pid": 1,
            "path": "",
            "permission": "/user/add",
            "component": "",
            "name": "用户新增",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        },
        {
            "id": 5,
            "pid": 1,
            "path": "",
            "permission": "/user/delete",
            "component": "",
            "name": "用户删除",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        },
        {
            "id": 6,
            "pid": 1,
            "path": "",
            "permission": "/user/update",
            "component": "",
            "name": "用户修改",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        },
        {
            "id": 7,
            "pid": 1,
            "path": "",
            "permission": "/user/retrieve",
            "component": "",
            "name": "用户查询",
            "icon": "",
            "visible": 0,
            "status": "0",
            "is_cache": 1,
            "is_frame": 0,
            "type": 2,
            "sort_num": 0,
            "create_time": "2020-11-23 23:34:41",
            "update_time": "2020-11-29 16:30:08",
            "del_flag": 0
        }
    ]
}
 */
// ------------------------------- 菜单接口-成功返回定义 end -----------------------------------------

// ------------------------------- 部门接口-成功返回定义 start ---------------------------------------

/**
 * @apiDefine orgTreeScopeSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 * {
    "errno": 0,
    "errmsg": "查询成功",
    "data": [
        {
            "id": 1,
            "pid": 0,
            "pids": "0",
            "name": "cup北京分公司",
            "address": "北京海淀",
            "phone": "18988888888",
            "sort_num": 0,
            "status": "0",
            "create_time": "2020-10-28 14:24:43",
            "update_time": "2020-10-28 14:31:11",
            "del_flag": 0,
            "children": [
                {
                    "id": 3,
                    "pid": 1,
                    "pids": "0",
                    "name": "财务部",
                    "address": "北京海淀",
                    "phone": "18911111111",
                    "sort_num": 0,
                    "status": "0",
                    "create_time": "2020-10-28 14:26:21",
                    "update_time": "2020-11-29 15:42:35",
                    "del_flag": 0,
                    "children": []
                },
                {
                    "id": 4,
                    "pid": 1,
                    "pids": "0",
                    "name": "业务部",
                    "address": "北京海淀",
                    "phone": null,
                    "sort_num": 0,
                    "status": "0",
                    "create_time": "2020-10-28 14:26:31",
                    "update_time": "2020-10-28 14:31:26",
                    "del_flag": 0,
                    "children": []
                },
                {
                    "id": 5,
                    "pid": 1,
                    "pids": "0",
                    "name": "人事部",
                    "address": "北京海淀",
                    "phone": "18822222222",
                    "sort_num": 1,
                    "status": "0",
                    "create_time": "2020-10-28 14:26:34",
                    "update_time": "2020-12-03 16:47:33",
                    "del_flag": 0,
                    "children": []
                },
                {
                    "id": 2,
                    "pid": 1,
                    "pids": "0",
                    "name": "技术部",
                    "address": "北京海淀",
                    "phone": "111",
                    "sort_num": 2,
                    "status": "0",
                    "create_time": "2020-10-28 14:26:02",
                    "update_time": "2020-12-03 16:47:15",
                    "del_flag": 0,
                    "children": []
                }
            ]
        }
    ]
}
 */

/**
 * @apiDefine orgTreeSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 * {
    "errno": 0,
    "errmsg": "查询成功",
    "data": [
        {
            "id": 1,
            "pid": 0,
            "pids": "0",
            "name": "cup北京分公司",
            "address": "北京海淀",
            "phone": "18988888888",
            "sort_num": 0,
            "status": "0",
            "create_time": "2020-10-28 14:24:43",
            "update_time": "2020-10-28 14:31:11",
            "del_flag": 0,
            "children": [
                {
                    "id": 3,
                    "pid": 1,
                    "pids": "0",
                    "name": "财务部",
                    "address": "北京海淀",
                    "phone": "18911111111",
                    "sort_num": 0,
                    "status": "0",
                    "create_time": "2020-10-28 14:26:21",
                    "update_time": "2020-11-29 15:42:35",
                    "del_flag": 0,
                    "children": []
                },
                {
                    "id": 4,
                    "pid": 1,
                    "pids": "0",
                    "name": "业务部",
                    "address": "北京海淀",
                    "phone": null,
                    "sort_num": 0,
                    "status": "0",
                    "create_time": "2020-10-28 14:26:31",
                    "update_time": "2020-10-28 14:31:26",
                    "del_flag": 0,
                    "children": []
                },
                {
                    "id": 5,
                    "pid": 1,
                    "pids": "0",
                    "name": "人事部",
                    "address": "北京海淀",
                    "phone": "18822222222",
                    "sort_num": 1,
                    "status": "0",
                    "create_time": "2020-10-28 14:26:34",
                    "update_time": "2020-12-03 16:47:33",
                    "del_flag": 0,
                    "children": []
                },
                {
                    "id": 2,
                    "pid": 1,
                    "pids": "0",
                    "name": "技术部",
                    "address": "北京海淀",
                    "phone": "111",
                    "sort_num": 2,
                    "status": "0",
                    "create_time": "2020-10-28 14:26:02",
                    "update_time": "2020-12-03 16:47:15",
                    "del_flag": 0,
                    "children": []
                }
            ]
        }
    ]
}
 */

/**
 * @apiDefine orgRetrieveSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 * {
    "errno": 0,
    "errmsg": "查询成功",
    "data": [
        {
            "id": 7,
            "pid": 6,
            "pids": "6",
            "name": "技术部",
            "address": "北京海淀",
            "phone": null,
            "sort_num": 0,
            "status": "0",
            "create_time": "2020-10-28 14:26:02",
            "update_time": "2020-10-28 14:31:35",
            "del_flag": 0
        },
        {
            "id": 2,
            "pid": 1,
            "pids": "0",
            "name": "技术部",
            "address": "北京海淀",
            "phone": "111",
            "sort_num": 2,
            "status": "0",
            "create_time": "2020-10-28 14:26:02",
            "update_time": "2020-12-03 16:47:15",
            "del_flag": 0
        }
    ]
}
 */
// ------------------------------- 部门接口-成功返回定义 end -----------------------------------------

// ------------------------------- 参数设置接口-成功返回定义 start ---------------------------------------

/**
 * @apiDefine configInfoSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 {
    "errno": 0,
    "errmsg": "查询成功",
    "data": {
        "id": 1,
        "name": "默认初始密码",
        "key": "sys_password_init",
        "value": "123456",
        "status": "0",
        "is_sys": "1",
        "remark": "默认初始密码",
        "create_time": "2020-11-29 13:20:14",
        "update_time": "2020-11-29 15:17:31",
        "del_flag": 0
    }
}
 */

/**
 * @apiDefine configRetrieveSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 {
    "errno": 0,
    "errmsg": "查询成功",
    "data": {
        "count": 2,
        "totalPages": 1,
        "pageSize": 10,
        "currentPage": 1,
        "data": [
            {
                "id": 1,
                "name": "默认初始密码",
                "key": "sys_password_init",
                "value": "123456",
                "status": "0",
                "is_sys": "1",
                "remark": "默认初始密码",
                "create_time": "2020-11-29 13:20:14",
                "update_time": "2020-11-29 15:17:31",
                "del_flag": 0
            },
            {
                "id": 2,
                "name": "测试",
                "key": "test",
                "value": "123123123",
                "status": "1",
                "is_sys": "0",
                "remark": "测试",
                "create_time": "2020-11-29 13:23:40",
                "update_time": "2020-11-30 23:37:52",
                "del_flag": 0
            }
        ]
    }
}
 */
// ------------------------------- 参数设置接口-成功返回定义 end -----------------------------------------

// ------------------------------- 操作日志接口-成功返回定义 start ---------------------------------------

/**
 * @apiDefine logRetrieveSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 {
    "errno": 0,
    "errmsg": "查询成功",
    "data": {
        "count": 1,
        "totalPages": 1,
        "pageSize": 10,
        "currentPage": 1,
        "data": [
            {
                "id": 155,
                "module": "log",
                "url": "/admin/log/clear",
                "method": "DELETE",
                "method_name": "clear",
                "params": null,
                "response": "{\"errno\":0,\"errmsg\":\"清空成功\",\"data\":\"\"}",
                "oper_time": "2020-12-03 22:25:25",
                "oper_name": "admin",
                "oper_ip": "222.11.222.333",
                "oper_location": "北京市 海淀区",
                "status": "0",
                "error_msg": null
            }
        ]
    }
}
 */

// ------------------------------- 操作日志接口-成功返回定义 end -----------------------------------------

// ------------------------------- 系统监控接口-成功返回定义 start ---------------------------------------

/**
 * @apiDefine monitorSysInfoSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 {
    "errno": 0,
    "errmsg": "",
    "data": {
        "sys": {
            "os": "Windows 10",
            "day": "54分13秒",
            "ip": "192.168.31.70",
            "pUpTime": "53秒",
            "name": "WIN10-808262350",
            "arch": "x64"
        },
        "cpu": {
            "name": "Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz",
            "idle": "89.71",
            "used": "13.81",
            "coreNumber": 8
        },
        "memory": {
            "total": "15.95 GB",
            "available": "7.02 GB",
            "used": "8.93 GB",
            "usageRate": "55.99"
        },
        "swap": {
            "used": "0.06 GB",
            "available": "5.94 GB",
            "total": "6.00 GB",
            "usageRate": "0.98"
        },
        "disk": {
            "total": "1153.50 GB",
            "available": "607.98 GB",
            "used": "545.52 GB",
            "usageRate": "47.29"
        },
        "time": "22:13:30"
    }
}
 */
// ------------------------------- 系统监控接口-成功返回定义 end -----------------------------------------

// ------------------------------- 字典管理接口-成功返回定义 start -----------------------------------------

/**
 * @apiDefine dictInfoSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 已存在-返回信息:
 * HTTP/1.1 200 OK
 {
    "errno": 0,
    "errmsg": "查询成功",
    "data": {
        "id": 1,
        "name": "系统状态",
        "type": "sys_common_status",
        "status": "0",
        "remark": "系统状态",
        "create_time": "2020-11-27 17:23:45",
        "update_time": "2020-11-29 11:50:18",
        "del_flag": 0
    }
}
 */

/**
 * @apiDefine dictListSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 已存在-返回信息:
 * HTTP/1.1 200 OK
 {
    "errno": 0,
    "errmsg": "查询成功",
    "data": [
        {
            "id": 1,
            "name": "系统状态",
            "type": "sys_common_status",
            "status": "0",
            "remark": "系统状态",
            "create_time": "2020-11-27 17:23:45",
            "update_time": "2020-11-29 11:50:18",
            "del_flag": 0
        },
        {
            "id": 5,
            "name": "系统模块",
            "type": "sys_module",
            "status": "0",
            "remark": "系统模块",
            "create_time": "2020-11-30 23:14:31",
            "update_time": "2020-11-30 23:14:38",
            "del_flag": 0
        },
        {
            "id": 8,
            "name": "日志状态",
            "type": "sys_log_status",
            "status": "0",
            "remark": "日志状态",
            "create_time": "2020-11-30 23:28:00",
            "update_time": null,
            "del_flag": 0
        }
    ]
}
 */

/**
 * @apiDefine dictCheckDictTypeSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 已存在-返回信息:
 * HTTP/1.1 200 OK
 {
    "errno": 0,
    "errmsg": "字典类型已存在",
    "data": 1
}
 * @apiSuccessExample 可用-返回信息:
 * HTTP/1.1 200 OK
 {
    "errno": 0,
    "errmsg": "字典类型可用",
    "data": 0
}
 */

/**
 * @apiDefine dictRetrieveSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 {
    "errno": 0,
    "errmsg": "查询成功",
    "data": {
        "count": 3,
        "totalPages": 1,
        "pageSize": 10,
        "currentPage": 1,
        "data": [
            {
                "id": 1,
                "name": "系统状态",
                "type": "sys_common_status",
                "status": "0",
                "remark": "系统状态",
                "create_time": "2020-11-27 17:23:45",
                "update_time": "2020-11-29 11:50:18",
                "del_flag": 0
            },
            {
                "id": 5,
                "name": "系统模块",
                "type": "sys_module",
                "status": "0",
                "remark": "系统模块",
                "create_time": "2020-11-30 23:14:31",
                "update_time": "2020-11-30 23:14:38",
                "del_flag": 0
            },
            {
                "id": 8,
                "name": "日志状态",
                "type": "sys_log_status",
                "status": "0",
                "remark": "日志状态",
                "create_time": "2020-11-30 23:28:00",
                "update_time": null,
                "del_flag": 0
            }
        ]
    }
}
 */

/**
 * @apiDefine dictListSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 {
    "errno": 0,
    "errmsg": "查询成功",
    "data": {
        "count": 2,
        "totalPages": 1,
        "pageSize": 10,
        "currentPage": 1,
        "data": [
            {
                "id": 5,
                "label": "正常",
                "value": "0",
                "type": "sys_common_status",
                "status": "0",
                "remark": "正常",
                "create_time": "2020-11-28 23:24:01",
                "update_time": "2020-11-29 11:11:47",
                "del_flag": 0
            },
            {
                "id": 6,
                "label": "停用",
                "value": "1",
                "type": "sys_common_status",
                "status": "0",
                "remark": "停用",
                "create_time": "2020-11-28 23:24:15",
                "update_time": "2020-11-29 11:11:52",
                "del_flag": 0
            }
        ]
    }
}
 */

/**
 * @apiDefine dictItemRetrieveSuccess
 *
 * @apiSuccess {int} errcode 结果码
 * @apiSuccess {String} errmsg 消息说明
 * @apiSuccess {Object} data 返回数据下面示例为数据结构
 * @apiSuccessExample 成功-返回信息:
 * HTTP/1.1 200 OK
 {
    "errno": 0,
    "errmsg": "查询成功",
    "data": {
        "count": 2,
        "totalPages": 1,
        "pageSize": 10,
        "currentPage": 1,
        "data": [
            {
                "id": 5,
                "label": "正常",
                "value": "0",
                "type": "sys_common_status",
                "status": "0",
                "remark": "正常",
                "create_time": "2020-11-28 23:24:01",
                "update_time": "2020-11-29 11:11:47",
                "del_flag": 0
            },
            {
                "id": 6,
                "label": "停用",
                "value": "1",
                "type": "sys_common_status",
                "status": "0",
                "remark": "停用",
                "create_time": "2020-11-28 23:24:15",
                "update_time": "2020-11-29 11:11:52",
                "del_flag": 0
            }
        ]
    }
}
 */
// ------------------------------- 字典管理接口-成功返回定义 end -------------------------------------------
