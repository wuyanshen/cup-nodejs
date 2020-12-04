<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="head-container">
          <el-input
            v-model="deptName"
            placeholder="请输入部门名称"
            clearable
            size="small"
            prefix-icon="el-icon-search"
            style="margin-bottom: 20px"
          />
        </div>
        <div class="head-container">
          <el-tree
            ref="tree"
            :data="deptOptions"
            :props="defaultProps"
            :expand-on-click-node="false"
            :filter-node-method="filterNode"
            default-expand-all
            @node-click="handleNodeClick"
          />
        </div>
      </el-col>
      <el-col :span="20">
        <!--搜索框-->
        <el-form v-show="showSearch" ref="queryForm" :model="queryForm" inline size="small">
          <el-form-item label="登录名称" label-width="80px" prop="username">
            <el-input v-model="queryForm.username" placeholder="请输入登录名称" type="text" clearable style="width: 230px" />
          </el-form-item>
          <el-form-item label="用户昵称" label-width="80px" prop="nickname">
            <el-input v-model="queryForm.nickname" placeholder="请输入用户昵称" type="text" clearable style="width: 230px" />
          </el-form-item>
          <el-form-item label="手机号码" label-width="80px" prop="phone">
            <el-input v-model="queryForm.phone" placeholder="请输入手机号码" type="text" clearable style="width: 230px" />
          </el-form-item>
          <el-form-item label="用户状态" label-width="80px" prop="status">
            <el-select v-model="queryForm.status" placeholder="请选择用户状态" style="width: 230px">
              <el-option v-for="item in statusOptions" :key="item.id" :value="item.value" :label="item.label" />
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间" label-width="80px" prop="dateRange">
            <el-date-picker
              v-model="dateRange"
              size="small"
              style="width: 230px"
              value-format="yyyy-MM-dd"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="cyan" icon="el-icon-search" size="mini" @click="userPage">查询</el-button>
            <el-button icon="el-icon-refresh" size="mini" @click="resetQuery('queryForm')">重置</el-button>
          </el-form-item>
        </el-form>

        <!--自定义刷新组件-->
        <el-row :gutter="10" class="mb8">
          <el-button type="primary" icon="el-icon-plus" size="mini" @click="handleAdd">新增</el-button>
          <right-toolbar :show-search.sync="showSearch" @queryTable="userPage" />
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
          <el-table-column label="ID" width="50" align="center">
            <template slot-scope="scope">
              {{ scope.row.id }}
            </template>
          </el-table-column>
          <el-table-column label="登录名称" min-width="110" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.username }}</span>
            </template>
          </el-table-column>
          <el-table-column label="用户昵称" min-width="110" align="center">
            <template slot-scope="scope">
              {{ scope.row.nickname }}
            </template>
          </el-table-column>
          <el-table-column label="邮箱" min-width="110" align="center">
            <template slot-scope="scope">
              {{ scope.row.email }}
            </template>
          </el-table-column>
          <el-table-column label="手机号" min-width="110" align="center">
            <template slot-scope="scope">
              {{ scope.row.phone }}
            </template>
          </el-table-column>
          <el-table-column label="状态" min-width="50" align="center">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.status === '1'" size="mini" type="danger">停用</el-tag>
              <el-tag v-if="scope.row.status === '0'" size="mini" type="success">正常</el-tag>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="create_time" label="创建时间" min-width="130">
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
                icon="el-icon-key"
                size="mini"
                @click="handleResetPwd(scope.row)"
              >重置密码</el-button>
            </template>
          </el-table-column>
        </el-table>
        <pagination
          :total="total"
          auto-scroll
          :page.sync="queryForm.page"
          :limit.sync="queryForm.size"
          @pagination="userPage"
        />
      </el-col>
    </el-row>

    <!-- 新增 或者 修改 dialog-->
    <el-dialog :visible.sync="open" width="600px" :close-on-click-modal="false" append-to-body :title="title">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px" size="small">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="归属部门" prop="deptId">
              <treeselect v-model="form.org_id" :options="deptOptions" :normalizer="normalizer" :show-count="true" placeholder="请选择归属部门" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item v-if="form.id === undefined" label="登录名称" prop="username">
              <el-input v-model="form.username" placeholder="请输入登录名称" type="text" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item v-if="form.id === undefined" label="用户密码" prop="password">
              <el-input v-model="form.password" placeholder="请输入用户密码" type="password" clearable />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户昵称" prop="nickname">
              <el-input v-model="form.nickname" placeholder="请输入用户昵称" type="text" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户角色">
              <el-select v-model="form.roleIds" multiple placeholder="请选择角色" style="width: 100%">
                <el-option
                  v-for="item in roleOptions"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                  :disabled="item.status === '1'"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户手机" prop="phone">
              <el-input v-model="form.phone" placeholder="请输入手机号" type="text" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户邮箱" prop="email">
              <el-input v-model="form.email" placeholder="请输入邮箱" type="text" clearable />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户状态" prop="status">
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
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="cancel">取 消</el-button>
        <el-button type="primary" size="mini" @click="handelSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { add, del, resetPwd, retrieve, update } from '@/api/user'
import { treeScope } from '@/api/org'
import { all } from '@/api/role'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  name: 'User',
  components: { Treeselect },
  data() {
    return {
      defaultPassword: '',
      statusOptions: [],
      roleOptions: [],
      showSearch: true,
      total: 0,
      list: null,
      listLoading: true,
      queryForm: {
        status: undefined,
        username: undefined,
        nickname: undefined,
        phone: undefined,
        orgId: undefined,
        page: 1,
        size: 10
      },
      // 时间区间
      dateRange: [],
      // dialog标题
      title: '',
      // dialog是否打开
      open: false,
      // 表单参数
      form: {},
      // 部门名称
      deptName: undefined,
      // 部门树选项
      deptOptions: undefined,
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      // 表单校验
      rules: {
        username: [
          { required: true, message: '登录名称不能为空', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '用户昵称不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '用户密码不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱地址不能为空', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ],
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' },
          {
            pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: '请输入正确的手机号码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  watch: {
    // 根据名称筛选部门树
    deptName(val) {
      this.$refs.tree.filter(val)
    }
  },
  mounted() {
    this.orgTree()
    this.userPage()
    this.roleList()
    this.getDicts('sys_common_status').then(res => {
      this.statusOptions = res
    })
    this.getConfig('sys_password_init').then(res => {
      this.defaultPassword = res.value
    })
  },
  methods: {
    // 分页查询用户
    userPage() {
      this.listLoading = true
      retrieve(this.handleDateRange(this.queryForm, this.dateRange)).then(res => {
        this.list = res.data
        this.total = res.count
        this.listLoading = false
      })
    },
    // 查询所有角色
    roleList() {
      all().then(res => {
        this.roleOptions = res
      })
    },
    // 修改按钮
    handleEdit(row) {
      // 对象深拷贝，不影响源数据
      const userInfo = JSON.parse(JSON.stringify(row))
      this.open = true
      this.title = '修改用户'

      // 给角色回显
      const roles = userInfo.role
      userInfo['roleIds'] = roles.map(role => {
        return role.id
      })
      this.form = userInfo
    },
    // 取消
    cancel() {
      this.reset()
      this.open = false
    },
    // 通用重置
    reset() {
      this.form = {
        username: undefined,
        nickname: undefined,
        email: undefined,
        phone: undefined,
        status: '0'
      }
      this.resetForm('form')
    },
    // 新增按钮
    handleAdd() {
      this.reset()
      this.title = '新增用户'
      this.open = true
      this.form.password = this.defaultPassword
    },
    // 提交按钮
    handelSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          if (this.form.id !== undefined) {
            update(this.form).then(response => {
              this.msgSuccess('修改成功')
              this.open = false
              this.userPage()
            })
          } else {
            add(this.form).then(response => {
              this.msgSuccess('新增成功')
              this.open = false
              this.userPage()
            })
          }
        }
      })
    },
    // 删除用户
    handleDelete(id) {
      this.$confirm('是否确认删除用户编号为"' + id + '"的数据项?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function() {
        return del(id)
      }).then(() => {
        this.userPage()
        this.msgSuccess('删除成功')
      })
    },
    // 重置用户密码
    handleResetPwd(row) {
      this.$prompt('请输入"' + row.username + '"的新密码', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showClose: false,
        inputType: 'password',
        inputPlaceholder: '请输入新密码',
        closeOnClickModal: false
      }).then(({ value }) => {
        resetPwd({
          id: row.id,
          username: row.username,
          password: value
        }).then(response => {
          this.msgSuccess('重置密码成功')
          this.listLoading = false
        })
      }).catch(() => {})
    },
    // 重置查询表单
    resetQuery(formName) {
      this.queryForm.org_id = undefined
      this.dateRange = []
      this.resetForm(formName)
      this.userPage()
    },
    // 查询部门树
    orgTree() {
      treeScope().then(res => {
        this.deptOptions = res
      })
    },
    // 筛选节点
    filterNode(value, data) {
      if (!value) return true
      return data.name.indexOf(value) !== -1
    },
    // 节点单击事件
    handleNodeClick(data) {
      this.queryForm.org_id = data.id
      this.userPage()
    },
    // treeSelect 自定义键名
    normalizer(node) {
      if (node.children && !node.children.length) {
        delete node.children
      }
      return {
        id: node.id,
        label: node.name,
        children: node.children
      }
    }
  }
}
</script>

<style scoped>

</style>
