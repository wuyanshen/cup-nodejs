<template>
  <div class="app-container">
    <!--搜索框-->
    <el-form v-show="showSearch" ref="queryForm" :model="queryForm" inline size="small">
      <el-form-item label="角色名称" label-width="80px" prop="name">
        <el-input v-model="queryForm.name" placeholder="请输入角色名称" type="text" clearable style="width: 230px" />
      </el-form-item>
      <el-form-item label="角色编码" label-width="80px" prop="code">
        <el-input v-model="queryForm.code" placeholder="请输入角色编码" type="text" clearable style="width: 230px" />
      </el-form-item>
      <el-form-item label="角色状态" prop="status">
        <el-select v-model="queryForm.status" placeholder="请选择角色状态">
          <el-option v-for="item in statusOptions" :key="item.id" :value="item.value" :label="item.label" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="cyan" icon="el-icon-search" size="mini" @click="query">查询</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery('queryForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <!--自定义刷新组件-->
    <el-row :gutter="10" class="mb8">
      <el-button type="primary" icon="el-icon-plus" size="mini" @click="handleAdd">新增</el-button>
      <right-toolbar :show-search.sync="showSearch" @queryTable="query" />
    </el-row>

    <!--表格-->
    <el-table
      v-loading="listLoading"
      size="small"
      :data="list"
      element-loading-text="Loading"
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column label="ID" width="80" align="center">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="角色名称" min-width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色编码" min-width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column label="数据权限" min-width="120" align="center">
        <template slot-scope="scope">
          <template v-for="item in dataScopes">
            <el-tag v-if="scope.row.ds_type === item.value" :key="item.value" type="primary" size="mini">{{ item.label }}</el-tag>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="状态" min-width="50" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === '1'" size="mini" type="danger">停用</el-tag>
          <el-tag v-if="scope.row.status === '0'" size="mini" type="success">正常</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" min-width="110">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="230" align="center">
        <template slot-scope="scope">
          <el-button
            type="success"
            icon="el-icon-edit"
            size="mini"
            @click="handleEdit(scope.row)"
          >修改</el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="handleDelete(scope.row.id)"
          >删除</el-button>
          <el-button
            type="warning"
            icon="el-icon-plus"
            size="mini"
            @click="handlePermission(scope.row.id)"
          >授权</el-button>
          <el-button
            type="info"
            icon="el-icon-circle-check"
            size="mini"
            @click="handleDataScope(scope.row)"
          >数据权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :total="total"
      auto-scroll
      :page.sync="queryForm.page"
      :limit.sync="queryForm.size"
      @pagination="query"
    />

    <!-- 新增 或者 修改 dialog-->
    <el-dialog :visible.sync="open" width="600px" :close-on-click-modal="false" append-to-body :title="title">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px" size="small">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入角色名称" type="text" clearable :disabled="dsShow" />
        </el-form-item>
        <el-form-item label="角色编码" prop="code">
          <el-input v-model="form.code" placeholder="请输入角色编码" type="text" clearable :disabled="dsShow" />
        </el-form-item>
        <el-form-item v-if="dsShow" label="数据权限" prop="ds_type">
          <el-select v-model="form.ds_type" placeholder="请选择数据权限" style="width: 100%">
            <el-option v-for="item in dataScopes" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item v-if="form.ds_type === 2 && dsShow">
          <el-tree
            ref="org"
            :data="orgOptions"
            show-checkbox
            expand-on-click-node
            node-key="id"
            empty-text="加载中，请稍后"
            :props="defaultProps"
          />
        </el-form-item>
        <el-form-item v-if="!dsShow" label="备注" prop="remark">
          <el-input v-model="form.remark" placeholder="请输入备注" type="textarea" />
        </el-form-item>
        <el-form-item v-if="!dsShow" label="状态" prop="status">
          <el-switch
            v-model="form.status"
            active-text="正常"
            inactive-text="停用"
            active-value="0"
            inactive-value="1"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="cancel">取 消</el-button>
        <el-button type="primary" size="mini" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 授权 dialog-->
    <el-dialog :visible.sync="permOpen" :close-on-click-modal="false" width="600px" title="授权">
      <div class="dialog-main-tree">
        <el-tree
          ref="permission"
          :data="menuOptions"
          :props="defaultProps"
          expand-on-click-node
          node-key="id"
          empty-text="加载中，请稍后"
          default-expand-all
          show-checkbox
        />
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="permCancel">取 消</el-button>
        <el-button type="primary" size="mini" @click="permSubmit">更 新</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { add, authorization, del, retrieve, roleToMenuIds, update } from '@/api/role'
import { all } from '@/api/menu'
import { tree } from '@/api/org'

export default {
  name: 'Role',
  data() {
    return {
      statusOptions: [],
      count: 0,
      dsShow: false, // 是否数据权限展示
      orgOptions: [], // 部门树
      dataScopes: [ // 数据权限类型
        {
          label: '仅本人数据',
          value: 5
        },
        {
          label: '所在公司（部门）数据',
          value: 4
        },
        {
          label: '所在公司（部门）及以下数据',
          value: 3
        },
        {
          label: '按明细设置',
          value: 2
        },
        {
          label: '全部数据',
          value: 1
        }
      ],
      roleId: undefined,
      permOpen: false,
      menuOptions: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      title: '',
      showSearch: true,
      listLoading: false,
      queryForm: {
        page: 1,
        size: 10,
        name: undefined,
        code: undefined,
        status: undefined
      },
      total: 0,
      form: {},
      open: false,
      list: [],
      rules: {
        name: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入角色编码', trigger: 'blur' }
        ],
        ds_type: [
          { required: true, message: '请选择数据权限', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.query()
    this.queryOrgTree()
    this.getDicts('sys_common_status').then(res => {
      this.statusOptions = res
    })
  },
  methods: {
    // 查询按钮
    query() {
      this.listLoading = true
      retrieve(this.queryForm).then(res => {
        this.list = res.data
        this.total = res.count
        this.listLoading = false
      })
    },
    // 重置按钮
    resetQuery(formName) {
      this.resetForm(formName)
      this.query()
    },
    // 修改按钮
    handleEdit(row) {
      this.reset()
      this.dsShow = false
      this.open = true
      this.title = '修改角色'
      // 对象深拷贝
      this.form = JSON.parse(JSON.stringify(row))
    },
    // 新增按钮
    handleAdd() {
      this.reset()
      this.title = '新增角色'
      this.open = true
    },
    // 删除按钮
    handleDelete(id) {
      this.$confirm(`您确定要删除id为${id}的角色吗？`, '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(res => {
        return del(id)
      }).then(res => {
        this.query()
        this.msgSuccess('删除成功')
      }).catch(function() {})
    },
    // 确定按钮
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 处理数据权限
          if (this.dsShow && this.form.ds_type === 2) {
            this.form.ds_scope = this.getTreeCheckedKeys('org').join(',')
          }
          if (this.form.id === undefined) {
            add(this.form).then(res => {
              this.query()
              this.open = false
              this.msgSuccess('新增成功')
            })
          } else {
            update(this.form).then(res => {
              this.query()
              this.open = false
              this.msgSuccess('修改成功')
            })
          }
        }
      })
    },
    // 取消按钮
    cancel() {
      this.open = false
      this.reset()
    },
    // 授权按钮
    handlePermission(id) {
      if (this.$refs.permission !== undefined) {
        this.$refs.permission.setCheckedKeys([])
      }
      this.permOpen = true
      this.roleId = id
      all()
        .then(res => {
          this.menuOptions = res
          return roleToMenuIds(id)
        }).then(res => {
          res.forEach(menuId => {
            this.$nextTick(() => {
              this.setTreeNodeCheck('permission', menuId) // 选中tree节点
            })
          })
        })
    },
    // 授权更新按钮
    permSubmit() {
      this.permOpen = false
      const menuIds = this.getTreeCheckedKeys('permission') // 获取tree所有选中的节点
      authorization({ menuIds, id: this.roleId })
        .then(res => {
          this.msgSuccess('授权成功')
        })
    },
    // 授权取消按钮
    permCancel() {
      this.permOpen = false
    },
    // 查询部门树
    queryOrgTree() {
      tree().then(res => {
        this.orgOptions = res
      })
    },
    // 数据权限按钮
    handleDataScope(row) {
      this.reset()
      this.dsShow = true
      this.open = true
      this.title = '数据权限'
      const roleInfo = JSON.parse(JSON.stringify(row)) // 对象深拷贝
      this.form = roleInfo
      // 数据权限回显
      if (this.form.ds_type === 2) {
        const orgIds = this.form.ds_scope.split(',')
        orgIds.forEach(orgId => {
          this.$nextTick(() => { // 选中tree节点
            this.setTreeNodeCheck('org', orgId)
          })
        })
      }
    },
    // 通用reset
    reset() {
      if (this.$refs.org !== undefined) {
        this.$refs.org.setCheckedKeys([])
      }
      this.form = {
        status: 0,
        ds_type: 1
      }
      this.resetForm('form')
    }
  }
}
</script>

<style lang="scss" scoped>
  /** 授权dialog设置滚动条 **/
  .el-dialog__wrapper {
    .el-dialog {
       width: 61% !important;
      .dialog-main-tree {
        max-height: 400px;
        overflow-y: auto;
      }
    }
  }
</style>
