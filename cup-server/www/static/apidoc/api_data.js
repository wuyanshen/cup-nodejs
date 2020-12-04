define({ "api": [
  {
    "type": "post",
    "url": "/config/add",
    "title": "新增参数配置",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "add",
    "group": "参数设置",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>参数名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>参数键名【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>参数键值【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_sys",
            "description": "<p>是否系统内置 0:否 1:是【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>参数状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/config.js",
    "groupTitle": "参数设置",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"新增成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/config/delete",
    "title": "删除参数",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "delete",
    "group": "参数设置",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>参数id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_sys",
            "description": "<p>是否系统内置 0:否 1:是【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/config.js",
    "groupTitle": "参数设置",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"删除成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/config/info",
    "title": "获取参数配置详情",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen -&gt; 全局获取配置</p>",
    "name": "info",
    "group": "参数设置",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>参数键值【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>开始页数【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页记录条数【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/config.js",
    "groupTitle": "参数设置",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"默认初始密码\",\n        \"key\": \"sys_password_init\",\n        \"value\": \"123456\",\n        \"status\": \"0\",\n        \"is_sys\": \"1\",\n        \"remark\": \"默认初始密码\",\n        \"create_time\": \"2020-11-29 13:20:14\",\n        \"update_time\": \"2020-11-29 15:17:31\",\n        \"del_flag\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/config/retrieve",
    "title": "查询参数设置",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "retrieve",
    "group": "参数设置",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>参数名称【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_sys",
            "description": "<p>是否系统内置 0:否 1:是【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>参数键值【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>参数创建时间-开始【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>参数创建时间-结束【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>参数状态 (0:正常 1:停用)【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>开始页数【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页记录条数【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/config.js",
    "groupTitle": "参数设置",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": {\n        \"count\": 2,\n        \"totalPages\": 1,\n        \"pageSize\": 10,\n        \"currentPage\": 1,\n        \"data\": [\n            {\n                \"id\": 1,\n                \"name\": \"默认初始密码\",\n                \"key\": \"sys_password_init\",\n                \"value\": \"123456\",\n                \"status\": \"0\",\n                \"is_sys\": \"1\",\n                \"remark\": \"默认初始密码\",\n                \"create_time\": \"2020-11-29 13:20:14\",\n                \"update_time\": \"2020-11-29 15:17:31\",\n                \"del_flag\": 0\n            },\n            {\n                \"id\": 2,\n                \"name\": \"测试\",\n                \"key\": \"test\",\n                \"value\": \"123123123\",\n                \"status\": \"1\",\n                \"is_sys\": \"0\",\n                \"remark\": \"测试\",\n                \"create_time\": \"2020-11-29 13:23:40\",\n                \"update_time\": \"2020-11-30 23:37:52\",\n                \"del_flag\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/config/update",
    "title": "修改参数配置",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "update",
    "group": "参数设置",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>参数id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>参数名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>参数键名【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>参数键值【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_sys",
            "description": "<p>是否系统内置 0:否 1:是【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>参数状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/config.js",
    "groupTitle": "参数设置",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"更新成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/dict/add",
    "title": "新增字典",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "add",
    "group": "字典管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>字典名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>字典类型【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>字典状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/dict.js",
    "groupTitle": "字典管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"新增成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dict/checkDictType",
    "title": "检查字典类型是否已存在",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "checkDictType",
    "group": "字典管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>字典类型【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>开始页数【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页记录条数【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/dict.js",
    "groupTitle": "字典管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "已存在-返回信息:",
          "content": "HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"字典类型已存在\",\n    \"data\": 1\n}",
          "type": "json"
        },
        {
          "title": "可用-返回信息:",
          "content": "HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"字典类型可用\",\n    \"data\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/dict/delete",
    "title": "删除字典",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "delete",
    "group": "字典管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>字典id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>字典类型【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/dict.js",
    "groupTitle": "字典管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"删除成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dict/info",
    "title": "查询字典详情",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen -&gt; 回显字典项下拉框</p>",
    "name": "info",
    "group": "字典管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>字典id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>开始页数【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页记录条数【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/dict.js",
    "groupTitle": "字典管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "已存在-返回信息:",
          "content": "HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"系统状态\",\n        \"type\": \"sys_common_status\",\n        \"status\": \"0\",\n        \"remark\": \"系统状态\",\n        \"create_time\": \"2020-11-27 17:23:45\",\n        \"update_time\": \"2020-11-29 11:50:18\",\n        \"del_flag\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dict/list",
    "title": "查询字典列表",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen -&gt; 字典项页面下拉框</p>",
    "name": "list",
    "group": "字典管理",
    "filename": "src/admin/controller/dict.js",
    "groupTitle": "字典管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": {\n        \"count\": 2,\n        \"totalPages\": 1,\n        \"pageSize\": 10,\n        \"currentPage\": 1,\n        \"data\": [\n            {\n                \"id\": 5,\n                \"label\": \"正常\",\n                \"value\": \"0\",\n                \"type\": \"sys_common_status\",\n                \"status\": \"0\",\n                \"remark\": \"正常\",\n                \"create_time\": \"2020-11-28 23:24:01\",\n                \"update_time\": \"2020-11-29 11:11:47\",\n                \"del_flag\": 0\n            },\n            {\n                \"id\": 6,\n                \"label\": \"停用\",\n                \"value\": \"1\",\n                \"type\": \"sys_common_status\",\n                \"status\": \"0\",\n                \"remark\": \"停用\",\n                \"create_time\": \"2020-11-28 23:24:15\",\n                \"update_time\": \"2020-11-29 11:11:52\",\n                \"del_flag\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dict/retrieve",
    "title": "查询字典",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "retrieve",
    "group": "字典管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>字典名称【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>字典类型【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>字典创建时间-开始【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>字典创建时间-结束【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>字典状态 (0:正常 1:停用)【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>开始页数【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页记录条数【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/dict.js",
    "groupTitle": "字典管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": {\n        \"count\": 3,\n        \"totalPages\": 1,\n        \"pageSize\": 10,\n        \"currentPage\": 1,\n        \"data\": [\n            {\n                \"id\": 1,\n                \"name\": \"系统状态\",\n                \"type\": \"sys_common_status\",\n                \"status\": \"0\",\n                \"remark\": \"系统状态\",\n                \"create_time\": \"2020-11-27 17:23:45\",\n                \"update_time\": \"2020-11-29 11:50:18\",\n                \"del_flag\": 0\n            },\n            {\n                \"id\": 5,\n                \"name\": \"系统模块\",\n                \"type\": \"sys_module\",\n                \"status\": \"0\",\n                \"remark\": \"系统模块\",\n                \"create_time\": \"2020-11-30 23:14:31\",\n                \"update_time\": \"2020-11-30 23:14:38\",\n                \"del_flag\": 0\n            },\n            {\n                \"id\": 8,\n                \"name\": \"日志状态\",\n                \"type\": \"sys_log_status\",\n                \"status\": \"0\",\n                \"remark\": \"日志状态\",\n                \"create_time\": \"2020-11-30 23:28:00\",\n                \"update_time\": null,\n                \"del_flag\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/dict/update",
    "title": "修改字典",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "update",
    "group": "字典管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>字典id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>字典名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>字典类型【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>字典状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/dict.js",
    "groupTitle": "字典管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"更新成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/dictItem/add",
    "title": "新增字典项",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "add",
    "group": "字典项管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>字典标签【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>字典类型【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>字典键值【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>字典状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/dictItem.js",
    "groupTitle": "字典项管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"新增成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/dictItem/delete",
    "title": "删除字典项",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "delete",
    "group": "字典项管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>菜单id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>字典类型【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/dictItem.js",
    "groupTitle": "字典项管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"删除成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dictItem/list",
    "title": "字典项列表",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen -&gt; 全局查询字典</p>",
    "name": "list",
    "group": "字典项管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>字典类型【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>开始页数【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页记录条数【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/dictItem.js",
    "groupTitle": "字典项管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": {\n        \"count\": 2,\n        \"totalPages\": 1,\n        \"pageSize\": 10,\n        \"currentPage\": 1,\n        \"data\": [\n            {\n                \"id\": 5,\n                \"label\": \"正常\",\n                \"value\": \"0\",\n                \"type\": \"sys_common_status\",\n                \"status\": \"0\",\n                \"remark\": \"正常\",\n                \"create_time\": \"2020-11-28 23:24:01\",\n                \"update_time\": \"2020-11-29 11:11:47\",\n                \"del_flag\": 0\n            },\n            {\n                \"id\": 6,\n                \"label\": \"停用\",\n                \"value\": \"1\",\n                \"type\": \"sys_common_status\",\n                \"status\": \"0\",\n                \"remark\": \"停用\",\n                \"create_time\": \"2020-11-28 23:24:15\",\n                \"update_time\": \"2020-11-29 11:11:52\",\n                \"del_flag\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dictItem/retrieve",
    "title": "查询字典项",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "retrieve",
    "group": "字典项管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>字典标签【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>字典类型【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>字典项创建时间-开始【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>字典项创建时间-结束【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>字典状态 (0:正常 1:停用)【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>开始页数【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页记录条数【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/dictItem.js",
    "groupTitle": "字典项管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": {\n        \"count\": 2,\n        \"totalPages\": 1,\n        \"pageSize\": 10,\n        \"currentPage\": 1,\n        \"data\": [\n            {\n                \"id\": 5,\n                \"label\": \"正常\",\n                \"value\": \"0\",\n                \"type\": \"sys_common_status\",\n                \"status\": \"0\",\n                \"remark\": \"正常\",\n                \"create_time\": \"2020-11-28 23:24:01\",\n                \"update_time\": \"2020-11-29 11:11:47\",\n                \"del_flag\": 0\n            },\n            {\n                \"id\": 6,\n                \"label\": \"停用\",\n                \"value\": \"1\",\n                \"type\": \"sys_common_status\",\n                \"status\": \"0\",\n                \"remark\": \"停用\",\n                \"create_time\": \"2020-11-28 23:24:15\",\n                \"update_time\": \"2020-11-29 11:11:52\",\n                \"del_flag\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/dictItem/update",
    "title": "修改字典项",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "update",
    "group": "字典项管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>字典id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>字典标签【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>字典类型【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>字典键值【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>字典状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/dictItem.js",
    "groupTitle": "字典项管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"更新成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/log/clear",
    "title": "清空日志",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "clear",
    "group": "日志管理",
    "filename": "src/admin/controller/log.js",
    "groupTitle": "日志管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"删除成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/log/retrieve",
    "title": "查询日志",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "retrieve",
    "group": "日志管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "module",
            "description": "<p>系统模块【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>日志状态 (0:正常 1:异常)【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>开始页数【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页记录条数【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/log.js",
    "groupTitle": "日志管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": {\n        \"count\": 1,\n        \"totalPages\": 1,\n        \"pageSize\": 10,\n        \"currentPage\": 1,\n        \"data\": [\n            {\n                \"id\": 155,\n                \"module\": \"log\",\n                \"url\": \"/admin/log/clear\",\n                \"method\": \"DELETE\",\n                \"method_name\": \"clear\",\n                \"params\": null,\n                \"response\": \"{\\\"errno\\\":0,\\\"errmsg\\\":\\\"清空成功\\\",\\\"data\\\":\\\"\\\"}\",\n                \"oper_time\": \"2020-12-03 22:25:25\",\n                \"oper_name\": \"admin\",\n                \"oper_ip\": \"222.11.222.333\",\n                \"oper_location\": \"北京市 海淀区\",\n                \"status\": \"0\",\n                \"error_msg\": null\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/add",
    "title": "新增用户",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "add",
    "group": "用户管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "org_id",
            "description": "<p>部门id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "roleIds",
            "description": "<p>角色id集合【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>用户状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/user.js",
    "groupTitle": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"新增成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/checkPwd",
    "title": "检查旧密码是否正确",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "checkPwd",
    "group": "用户管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>旧密码【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/user.js",
    "groupTitle": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": " HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"旧密码正确\",\n    \"data\": 1\n }\n或者\n {\n    \"errno\": 0,\n    \"errmsg\": \"旧密码不正确\",\n    \"data\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/user/delete",
    "title": "删除用户",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "delete",
    "group": "用户管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/user.js",
    "groupTitle": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"删除成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/info",
    "title": "当前登录用户信息",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "info",
    "group": "用户管理",
    "filename": "src/admin/controller/user.js",
    "groupTitle": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n        \"errno\": 0,\n        \"errmsg\": \"\",\n        \"data\": {\n            \"id\": 5,\n            \"username\": \"admin\",\n            \"password\": \"b9d11b3be25f5a1a7dc8ca04cd310b28\",\n            \"nickname\": \"系统管理员\",\n            \"avatar\": \"\",\n            \"org_id\": 0,\n            \"phone\": \"18888888888\",\n            \"email\": \"66@qq.com\",\n            \"status\": \"0\",\n            \"create_time\": \"2020-11-19 18:33:37\",\n            \"update_time\": \"2020-11-30 23:34:26\",\n            \"del_flag\": 0,\n            \"role\": [\n                {\n                    \"id\": 1,\n                    \"name\": \"管理员\",\n                    \"code\": \"admin\",\n                    \"remark\": \"我是管理员\",\n                    \"ds_type\": 1,\n                    \"ds_scope\": \"1,3,4,5\",\n                    \"status\": \"0\",\n                    \"create_time\": \"2020-11-24 22:02:32\",\n                    \"update_time\": \"2020-11-29 12:40:36\",\n                    \"del_flag\": 0,\n                    \"user_id\": 5\n                }\n            ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user/profile",
    "title": "更新个人资料",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "profile",
    "group": "用户管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>用户名【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户名【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>密码【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/user.js",
    "groupTitle": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":0,\n \"errmsg\":\"请求成功\",\n \"data\": { ... }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user/resetPwd",
    "title": "重置密码",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "resetPwd",
    "group": "用户管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/user.js",
    "groupTitle": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":0,\n \"errmsg\":\"请求成功\",\n \"data\": { ... }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/retrieve",
    "title": "查询用户(分页)",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "retrieve",
    "group": "用户管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>创建时间-开始【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>创建时间-结束【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "org_id",
            "description": "<p>部门id【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>用户状态 (0:正常 1:停用)【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>开始页数【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页记录条数【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/user.js",
    "groupTitle": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n        \"errno\": 0,\n        \"errmsg\": \"查询成功\",\n        \"data\": {\n            \"count\": 3,\n            \"totalPages\": 1,\n            \"pageSize\": 10,\n            \"currentPage\": 1,\n            \"data\": [\n                {\n                    \"id\": 5,\n                    \"username\": \"admin\",\n                    \"password\": \"b9d11b3be25f5a1a7dc8ca04cd310b28\",\n                    \"nickname\": \"系统管理员\",\n                    \"avatar\": \"\",\n                    \"org_id\": 0,\n                    \"phone\": \"18888888888\",\n                    \"email\": \"66@qq.com\",\n                    \"status\": \"0\",\n                    \"create_time\": \"2020-11-19 18:33:37\",\n                    \"update_time\": \"2020-11-30 23:34:26\",\n                    \"del_flag\": 0,\n                    \"role\": [\n                        {\n                            \"id\": 1,\n                            \"name\": \"管理员\",\n                            \"code\": \"admin\",\n                            \"remark\": \"我是管理员\",\n                            \"ds_type\": 1,\n                            \"ds_scope\": \"1,3,4,5\",\n                            \"status\": \"0\",\n                            \"create_time\": \"2020-11-24 22:02:32\",\n                            \"update_time\": \"2020-11-29 12:40:36\",\n                            \"del_flag\": 0,\n                            \"user_id\": 5\n                        }\n                    ]\n                },\n                {\n                    \"id\": 8,\n                    \"username\": \"wk\",\n                    \"password\": \"eadbd8c4c841524a70b324164881f812\",\n                    \"nickname\": \"悟空1\",\n                    \"avatar\": \"\",\n                    \"org_id\": 5,\n                    \"phone\": \"18888888888\",\n                    \"email\": \"22@qq.com\",\n                    \"status\": \"0\",\n                    \"create_time\": \"2020-11-23 23:21:36\",\n                    \"update_time\": \"2020-11-25 18:00:31\",\n                    \"del_flag\": 0,\n                    \"role\": [\n                        {\n                            \"id\": 3,\n                            \"name\": \"普通用户\",\n                            \"code\": \"customer\",\n                            \"remark\": \"\",\n                            \"ds_type\": 2,\n                            \"ds_scope\": \"6,9,10\",\n                            \"status\": \"0\",\n                            \"create_time\": \"2020-11-24 22:02:32\",\n                            \"update_time\": \"2020-11-26 13:08:42\",\n                            \"del_flag\": 0,\n                            \"user_id\": 8\n                        }\n                    ],\n                    \"org\": {\n                        \"id\": 5,\n                        \"pid\": 1,\n                        \"pids\": \"0\",\n                        \"name\": \"人事部\",\n                        \"address\": \"北京海淀\",\n                        \"phone\": null,\n                        \"sort_num\": 0,\n                        \"status\": \"0\",\n                        \"create_time\": \"2020-10-28 14:26:34\",\n                        \"update_time\": \"2020-10-28 14:31:28\",\n                        \"del_flag\": 0\n                    }\n                },\n                {\n                    \"id\": 9,\n                    \"username\": \"test\",\n                    \"password\": \"5a2e54ee57e5b7273b9a8fed78c1ebd8\",\n                    \"nickname\": \"测试用户\",\n                    \"avatar\": \"\",\n                    \"org_id\": 1,\n                    \"phone\": \"18911111111\",\n                    \"email\": \"22@qq.com\",\n                    \"status\": \"1\",\n                    \"create_time\": \"2020-11-25 18:25:00\",\n                    \"update_time\": \"2020-12-02 18:11:44\",\n                    \"del_flag\": 0,\n                    \"role\": [\n                        {\n                            \"id\": 3,\n                            \"name\": \"普通用户\",\n                            \"code\": \"customer\",\n                            \"remark\": \"\",\n                            \"ds_type\": 2,\n                            \"ds_scope\": \"6,9,10\",\n                            \"status\": \"0\",\n                            \"create_time\": \"2020-11-24 22:02:32\",\n                            \"update_time\": \"2020-11-26 13:08:42\",\n                            \"del_flag\": 0,\n                            \"user_id\": 9\n                        }\n                    ],\n                    \"org\": {\n                        \"id\": 1,\n                        \"pid\": 0,\n                        \"pids\": \"0\",\n                        \"name\": \"cup北京分公司\",\n                        \"address\": \"北京海淀\",\n                        \"phone\": \"18988888888\",\n                        \"sort_num\": 0,\n                        \"status\": \"0\",\n                        \"create_time\": \"2020-10-28 14:24:43\",\n                        \"update_time\": \"2020-10-28 14:31:11\",\n                        \"del_flag\": 0\n                    }\n                }\n            ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user/update",
    "title": "修改用户",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "update",
    "group": "用户管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "org_id",
            "description": "<p>部门id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "roleIds",
            "description": "<p>角色id集合【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>用户状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/user.js",
    "groupTitle": "用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"更新成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "登录",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "login",
    "group": "登录登出",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/auth.js",
    "groupTitle": "登录登出",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n     \"errno\": 0,\n     \"errmsg\": \"登录成功\",\n     \"data\": {\n         \"userInfo\": {\n             \"id\": 5,\n             \"username\": \"admin\"\n         },\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTYwNjk2NDMyNywiZXhwIjoxNjA2OTY2MTI3fQ.U0Wtr282QRJGWXs4cdZry7HgMSXMCjBobDfH8LjB5-U\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "用户名/密码错误-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"用户名或密码错误\",\n}",
          "type": "json"
        },
        {
          "title": "账户停用-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"您的账户已停用，请联系管理员\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/logout",
    "title": "登出",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "logout",
    "group": "登录登出",
    "filename": "src/admin/controller/auth.js",
    "groupTitle": "登录登出",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n      \"errno\": 0,\n      \"errmsg\": \"\",\n      \"data\": \"退出成功\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/monitor/sysInfo",
    "title": "查询系统信息",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "sysInfo",
    "group": "系统监控",
    "filename": "src/admin/controller/monitor.js",
    "groupTitle": "系统监控",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n {\n    \"errno\": 0,\n    \"errmsg\": \"\",\n    \"data\": {\n        \"sys\": {\n            \"os\": \"Windows 10\",\n            \"day\": \"54分13秒\",\n            \"ip\": \"192.168.31.70\",\n            \"pUpTime\": \"53秒\",\n            \"name\": \"WIN10-808262350\",\n            \"arch\": \"x64\"\n        },\n        \"cpu\": {\n            \"name\": \"Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz\",\n            \"idle\": \"89.71\",\n            \"used\": \"13.81\",\n            \"coreNumber\": 8\n        },\n        \"memory\": {\n            \"total\": \"15.95 GB\",\n            \"available\": \"7.02 GB\",\n            \"used\": \"8.93 GB\",\n            \"usageRate\": \"55.99\"\n        },\n        \"swap\": {\n            \"used\": \"0.06 GB\",\n            \"available\": \"5.94 GB\",\n            \"total\": \"6.00 GB\",\n            \"usageRate\": \"0.98\"\n        },\n        \"disk\": {\n            \"total\": \"1153.50 GB\",\n            \"available\": \"607.98 GB\",\n            \"used\": \"545.52 GB\",\n            \"usageRate\": \"47.29\"\n        },\n        \"time\": \"22:13:30\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/menu/add",
    "title": "新增菜单",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "add",
    "group": "菜单管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>菜单名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>路由地址【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "component",
            "description": "<p>组件路径【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pid",
            "description": "<p>父菜单id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "permission",
            "description": "<p>按钮权限【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>菜单图标【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "visible",
            "description": "<p>是否显示 1是 0否【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "is_cache",
            "description": "<p>是否缓存 1是 0否【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "is_frame",
            "description": "<p>是否为外链 1是 0否【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型：1菜单 2按钮 3目录【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>菜单状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/menu.js",
    "groupTitle": "菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"新增成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/menu/all",
    "title": "查询所有菜单",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "all",
    "group": "菜单管理",
    "filename": "src/admin/controller/menu.js",
    "groupTitle": "菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"pid\": 13,\n            \"path\": \"user\",\n            \"permission\": \"\",\n            \"component\": \"system/user/index\",\n            \"name\": \"用户管理\",\n            \"icon\": \"user\",\n            \"visible\": 1,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 1,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 09:10:09\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 4,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/add\",\n            \"component\": \"\",\n            \"name\": \"用户新增\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 5,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/delete\",\n            \"component\": \"\",\n            \"name\": \"用户删除\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 6,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/update\",\n            \"component\": \"\",\n            \"name\": \"用户修改\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 7,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/retrieve\",\n            \"component\": \"\",\n            \"name\": \"用户查询\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/menu/delete",
    "title": "删除菜单",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "delete",
    "group": "菜单管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>菜单id【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/menu.js",
    "groupTitle": "菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"删除成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/menu/retrieve",
    "title": "查询菜单",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "retrieve",
    "group": "菜单管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "name",
            "description": "<p>菜单名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>菜单状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/menu.js",
    "groupTitle": "菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"pid\": 13,\n            \"path\": \"user\",\n            \"permission\": \"\",\n            \"component\": \"system/user/index\",\n            \"name\": \"用户管理\",\n            \"icon\": \"user\",\n            \"visible\": 1,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 1,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 09:10:09\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 4,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/add\",\n            \"component\": \"\",\n            \"name\": \"用户新增\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 5,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/delete\",\n            \"component\": \"\",\n            \"name\": \"用户删除\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 6,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/update\",\n            \"component\": \"\",\n            \"name\": \"用户修改\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 7,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/retrieve\",\n            \"component\": \"\",\n            \"name\": \"用户查询\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/menu/tree",
    "title": "查询当前用户的菜单",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "tree",
    "group": "菜单管理",
    "filename": "src/admin/controller/menu.js",
    "groupTitle": "菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"pid\": 13,\n            \"path\": \"user\",\n            \"permission\": \"\",\n            \"component\": \"system/user/index\",\n            \"name\": \"用户管理\",\n            \"icon\": \"user\",\n            \"visible\": 1,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 1,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 09:10:09\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 4,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/add\",\n            \"component\": \"\",\n            \"name\": \"用户新增\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 5,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/delete\",\n            \"component\": \"\",\n            \"name\": \"用户删除\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 6,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/update\",\n            \"component\": \"\",\n            \"name\": \"用户修改\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 7,\n            \"pid\": 1,\n            \"path\": \"\",\n            \"permission\": \"/user/retrieve\",\n            \"component\": \"\",\n            \"name\": \"用户查询\",\n            \"icon\": \"\",\n            \"visible\": 0,\n            \"status\": \"0\",\n            \"is_cache\": 1,\n            \"is_frame\": 0,\n            \"type\": 2,\n            \"sort_num\": 0,\n            \"create_time\": \"2020-11-23 23:34:41\",\n            \"update_time\": \"2020-11-29 16:30:08\",\n            \"del_flag\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/menu/update",
    "title": "修改菜单",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "update",
    "group": "菜单管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>菜单id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>菜单名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>路由地址【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "component",
            "description": "<p>组件路径【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pid",
            "description": "<p>父菜单id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "permission",
            "description": "<p>按钮权限【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>菜单图标【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "visible",
            "description": "<p>是否显示 1是 0否【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "is_cache",
            "description": "<p>是否缓存 1是 0否【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "is_frame",
            "description": "<p>是否为外链 1是 0否【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型：1菜单 2按钮 3目录【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>菜单状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/menu.js",
    "groupTitle": "菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"新增成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/role/add",
    "title": "新增角色",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "add",
    "group": "角色管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>角色编码【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ds_type",
            "description": "<p>数据权限：1全部数据  2按明细设置  3所在公司（部门）及以下数据 4所在公司（部门）数据 5仅本人数据 【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ds_scope",
            "description": "<p>数据范围(数据权限是2按明细设置时有值)【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>角色状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/role.js",
    "groupTitle": "角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"新增成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/role/all",
    "title": "查询所有角色list",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "all",
    "group": "角色管理",
    "filename": "src/admin/controller/role.js",
    "groupTitle": "角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"管理员\",\n            \"code\": \"admin\",\n            \"remark\": \"我是管理员\",\n            \"ds_type\": 1,\n            \"ds_scope\": \"1,3,4,5\",\n            \"status\": \"0\",\n            \"create_time\": \"2020-11-24 22:02:32\",\n            \"update_time\": \"2020-11-29 12:40:36\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 3,\n            \"name\": \"普通用户\",\n            \"code\": \"customer\",\n            \"remark\": \"\",\n            \"ds_type\": 2,\n            \"ds_scope\": \"6,9,10\",\n            \"status\": \"0\",\n            \"create_time\": \"2020-11-24 22:02:32\",\n            \"update_time\": \"2020-11-26 13:08:42\",\n            \"del_flag\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/role/authorization",
    "title": "给角色授权",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "authorization",
    "group": "角色管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>角色id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int[]",
            "optional": false,
            "field": "menuIds",
            "description": "<p>角色id集合【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/role.js",
    "groupTitle": "角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":0,\n \"errmsg\":\"请求成功\",\n \"data\": { ... }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/role/delete",
    "title": "删除角色",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "delete",
    "group": "角色管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>角色id【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/role.js",
    "groupTitle": "角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"删除成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/role/retrieve",
    "title": "查询角色(分页)",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "retrieve",
    "group": "角色管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>角色编码【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>角色状态 (0:正常 1:停用)【非必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>开始页数【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>每页记录条数【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/role.js",
    "groupTitle": "角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": {\n        \"count\": 1,\n        \"totalPages\": 1,\n        \"pageSize\": 10,\n        \"currentPage\": 1,\n        \"data\": [\n            {\n                \"id\": 3,\n                \"name\": \"普通用户\",\n                \"code\": \"customer\",\n                \"remark\": \"\",\n                \"ds_type\": 2,\n                \"ds_scope\": \"6,9,10\",\n                \"status\": \"0\",\n                \"create_time\": \"2020-11-24 22:02:32\",\n                \"update_time\": \"2020-11-26 13:08:42\",\n                \"del_flag\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/role/roleToMenuIds",
    "title": "角色id对应菜单id集合",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "roleToMenuIds",
    "group": "角色管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>角色id【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/role.js",
    "groupTitle": "角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": [\n        1,\n        2,\n        3\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/role/update",
    "title": "修改角色",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "update",
    "group": "角色管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>角色id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>角色名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>角色编码【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "ds_type",
            "description": "<p>数据权限：1全部数据  2按明细设置  3所在公司（部门）及以下数据 4所在公司（部门）数据 5仅本人数据 【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ds_scope",
            "description": "<p>数据范围(数据权限是2按明细设置时有值)【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>角色状态 (0:正常 1:停用)【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/role.js",
    "groupTitle": "角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"更新成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/org/add",
    "title": "新增部门",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "add",
    "group": "部门管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>部门名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pid",
            "description": "<p>父级部门id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>地址【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>电话【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sortNum",
            "description": "<p>排序【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>部门状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/org.js",
    "groupTitle": "部门管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"更新成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/org/delete",
    "title": "删除部门",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "delete",
    "group": "部门管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>部门id【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/org.js",
    "groupTitle": "部门管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"删除成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/org/retrieve",
    "title": "查询部门(分页)",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "retrieve",
    "group": "部门管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "name",
            "description": "<p>部门名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>部门状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/org.js",
    "groupTitle": "部门管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": [\n        {\n            \"id\": 7,\n            \"pid\": 6,\n            \"pids\": \"6\",\n            \"name\": \"技术部\",\n            \"address\": \"北京海淀\",\n            \"phone\": null,\n            \"sort_num\": 0,\n            \"status\": \"0\",\n            \"create_time\": \"2020-10-28 14:26:02\",\n            \"update_time\": \"2020-10-28 14:31:35\",\n            \"del_flag\": 0\n        },\n        {\n            \"id\": 2,\n            \"pid\": 1,\n            \"pids\": \"0\",\n            \"name\": \"技术部\",\n            \"address\": \"北京海淀\",\n            \"phone\": \"111\",\n            \"sort_num\": 2,\n            \"status\": \"0\",\n            \"create_time\": \"2020-10-28 14:26:02\",\n            \"update_time\": \"2020-12-03 16:47:15\",\n            \"del_flag\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/org/tree",
    "title": "查询部门(无数据权限)",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen -&gt;（角色管理-数据权限）</p>",
    "name": "tree",
    "group": "部门管理",
    "filename": "src/admin/controller/org.js",
    "groupTitle": "部门管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"pid\": 0,\n            \"pids\": \"0\",\n            \"name\": \"cup北京分公司\",\n            \"address\": \"北京海淀\",\n            \"phone\": \"18988888888\",\n            \"sort_num\": 0,\n            \"status\": \"0\",\n            \"create_time\": \"2020-10-28 14:24:43\",\n            \"update_time\": \"2020-10-28 14:31:11\",\n            \"del_flag\": 0,\n            \"children\": [\n                {\n                    \"id\": 3,\n                    \"pid\": 1,\n                    \"pids\": \"0\",\n                    \"name\": \"财务部\",\n                    \"address\": \"北京海淀\",\n                    \"phone\": \"18911111111\",\n                    \"sort_num\": 0,\n                    \"status\": \"0\",\n                    \"create_time\": \"2020-10-28 14:26:21\",\n                    \"update_time\": \"2020-11-29 15:42:35\",\n                    \"del_flag\": 0,\n                    \"children\": []\n                },\n                {\n                    \"id\": 4,\n                    \"pid\": 1,\n                    \"pids\": \"0\",\n                    \"name\": \"业务部\",\n                    \"address\": \"北京海淀\",\n                    \"phone\": null,\n                    \"sort_num\": 0,\n                    \"status\": \"0\",\n                    \"create_time\": \"2020-10-28 14:26:31\",\n                    \"update_time\": \"2020-10-28 14:31:26\",\n                    \"del_flag\": 0,\n                    \"children\": []\n                },\n                {\n                    \"id\": 5,\n                    \"pid\": 1,\n                    \"pids\": \"0\",\n                    \"name\": \"人事部\",\n                    \"address\": \"北京海淀\",\n                    \"phone\": \"18822222222\",\n                    \"sort_num\": 1,\n                    \"status\": \"0\",\n                    \"create_time\": \"2020-10-28 14:26:34\",\n                    \"update_time\": \"2020-12-03 16:47:33\",\n                    \"del_flag\": 0,\n                    \"children\": []\n                },\n                {\n                    \"id\": 2,\n                    \"pid\": 1,\n                    \"pids\": \"0\",\n                    \"name\": \"技术部\",\n                    \"address\": \"北京海淀\",\n                    \"phone\": \"111\",\n                    \"sort_num\": 2,\n                    \"status\": \"0\",\n                    \"create_time\": \"2020-10-28 14:26:02\",\n                    \"update_time\": \"2020-12-03 16:47:15\",\n                    \"del_flag\": 0,\n                    \"children\": []\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/org/treeScope",
    "title": "查询部门(数据权限)",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen (带数据权限过滤)</p>",
    "name": "treeScope",
    "group": "部门管理",
    "filename": "src/admin/controller/org.js",
    "groupTitle": "部门管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n    \"errno\": 0,\n    \"errmsg\": \"查询成功\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"pid\": 0,\n            \"pids\": \"0\",\n            \"name\": \"cup北京分公司\",\n            \"address\": \"北京海淀\",\n            \"phone\": \"18988888888\",\n            \"sort_num\": 0,\n            \"status\": \"0\",\n            \"create_time\": \"2020-10-28 14:24:43\",\n            \"update_time\": \"2020-10-28 14:31:11\",\n            \"del_flag\": 0,\n            \"children\": [\n                {\n                    \"id\": 3,\n                    \"pid\": 1,\n                    \"pids\": \"0\",\n                    \"name\": \"财务部\",\n                    \"address\": \"北京海淀\",\n                    \"phone\": \"18911111111\",\n                    \"sort_num\": 0,\n                    \"status\": \"0\",\n                    \"create_time\": \"2020-10-28 14:26:21\",\n                    \"update_time\": \"2020-11-29 15:42:35\",\n                    \"del_flag\": 0,\n                    \"children\": []\n                },\n                {\n                    \"id\": 4,\n                    \"pid\": 1,\n                    \"pids\": \"0\",\n                    \"name\": \"业务部\",\n                    \"address\": \"北京海淀\",\n                    \"phone\": null,\n                    \"sort_num\": 0,\n                    \"status\": \"0\",\n                    \"create_time\": \"2020-10-28 14:26:31\",\n                    \"update_time\": \"2020-10-28 14:31:26\",\n                    \"del_flag\": 0,\n                    \"children\": []\n                },\n                {\n                    \"id\": 5,\n                    \"pid\": 1,\n                    \"pids\": \"0\",\n                    \"name\": \"人事部\",\n                    \"address\": \"北京海淀\",\n                    \"phone\": \"18822222222\",\n                    \"sort_num\": 1,\n                    \"status\": \"0\",\n                    \"create_time\": \"2020-10-28 14:26:34\",\n                    \"update_time\": \"2020-12-03 16:47:33\",\n                    \"del_flag\": 0,\n                    \"children\": []\n                },\n                {\n                    \"id\": 2,\n                    \"pid\": 1,\n                    \"pids\": \"0\",\n                    \"name\": \"技术部\",\n                    \"address\": \"北京海淀\",\n                    \"phone\": \"111\",\n                    \"sort_num\": 2,\n                    \"status\": \"0\",\n                    \"create_time\": \"2020-10-28 14:26:02\",\n                    \"update_time\": \"2020-12-03 16:47:15\",\n                    \"del_flag\": 0,\n                    \"children\": []\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/org/update",
    "title": "修改部门",
    "version": "1.0.0",
    "description": "<p>create by wuyanshen</p>",
    "name": "update",
    "group": "部门管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>角色id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>部门名称【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pid",
            "description": "<p>父级部门id【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>地址【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>电话【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sort_num",
            "description": "<p>排序【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>部门状态 (0:正常 1:停用)【必填】</p>"
          }
        ]
      }
    },
    "filename": "src/admin/controller/org.js",
    "groupTitle": "部门管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-cup-token",
            "description": "<p>授权认证字段</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据下面示例为数据结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\": 0,\n \"errmsg\":\"更新成功\",\n \"data\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "int",
            "optional": false,
            "field": "errcode",
            "description": "<p>错误代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errmsg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "失败-返回信息:",
          "content": "HTTP/1.1 200 OK\n{\n \"errcode\":1000,\n \"errmsg\":\"参数错误\",\n}",
          "type": "json"
        }
      ]
    }
  }
] });
