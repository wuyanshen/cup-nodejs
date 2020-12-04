<template>
  <div class="app-container">
    <!--搜索框-->
    <el-form v-show="showSearch" ref="queryForm" :model="queryForm" inline size="small">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="queryForm.name" placeholder="请输入部门名称" type="text" />
      </el-form-item>
      <el-form-item label="部门状态" prop="status">
        <el-select v-model="queryForm.status" placeholder="请选择部门状态">
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
      v-loading="loading"
      size="small"
      :data="orgTree"
      width="100%"
      row-key="id"
      :tree-props="{children: 'children'}"
    >
      <el-table-column label="部门名称" min-width="200">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="排序" align="center" min-width="50">
        <template slot-scope="scope">
          {{ scope.row.sort_num }}
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center" min-width="50">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === '1'" size="mini" type="danger">停用</el-tag>
          <el-tag v-if="scope.row.status === '0'" size="mini" type="success">正常</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center" min-width="130">
        <template slot-scope="scope">
          {{ scope.row.create_time }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="200">
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
            @click="handleAddChildren(scope.row.id)"
          >新增子部门</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--新增 或 修改 dialog-->
    <el-dialog :visible.sync="open" :title="title" :close-on-click-modal="false" width="600px">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px" size="small">
        <el-form-item>
          <el-alert
            title="不选择上级部门就代表添加根部门"
            type="info"
            :closable="false"
            show-icon
          /></el-form-item>
        <el-form-item label="上级部门" prop="pid">
          <treeselect v-model="form.pid" :options="deptOptions" :normalizer="normalizer" :show-count="true" placeholder="选择上级部门" />
        </el-form-item>
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="form.address" />
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone" />
        </el-form-item>
        <el-form-item label="排序" prop="sort_num">
          <el-input v-model="form.sort_num" type="number" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-switch
            v-model="form.status"
            active-value="0"
            inactive-value="1"
            active-text="正常"
            inactive-text="停用"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="cancel">取 消</el-button>
        <el-button type="primary" size="mini" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { add, del, retrieve, update } from '@/api/org'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  name: 'Org',
  components: {
    Treeselect
  },
  data() {
    return {
      statusOptions: [],
      open: false,
      title: '',
      orgTree: [],
      loading: false,
      showSearch: true,
      queryForm: {
        name: undefined,
        status: undefined
      },
      // 表单
      form: {},
      // 部门树选项
      deptOptions: [],
      // 表单校验
      rules: {
        name: [
          { required: true, message: '请输入部门名称', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入部门地址', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入部门电话', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.query()
    this.getDicts('sys_common_status').then(res => {
      this.statusOptions = res
    })
  },
  methods: {
    // 查询按钮
    query() {
      this.listLoading = true
      retrieve(this.queryForm).then(res => {
        this.orgTree = res
        this.listLoading = false
      })
    },
    // 重置按钮
    resetQuery(formName) {
      this.resetForm(formName)
      this.query()
    },
    // 新增按钮
    async handleAdd() {
      this.reset()
      this.title = '新增部门'
      this.open = true
      this.deptOptions = await retrieve()
    },
    // 新增子菜单按钮
    async handleAddChildren(id) {
      this.reset()
      this.form.pid = id
      this.title = '新增子部门'
      this.open = true
      this.deptOptions = await retrieve()
    },
    // 修改按钮
    async handleEdit(row) {
      this.reset()
      this.title = '修改部门'
      this.open = true
      this.deptOptions = await retrieve()
      // 对象深拷贝，不影响源数据
      this.form = JSON.parse(JSON.stringify(row))
    },
    // 删除按钮
    handleDelete(id) {
      this.$confirm(`是否确认删除id为${id}的部门?`, '警告', {
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
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
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
      this.form = {}
      this.resetForm('form')
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
    },
    // 通用重置
    reset() {
      this.form = {
        status: '0',
        sort_num: 0
      }
      this.resetForm('form')
    }
  }
}
</script>

<style scoped>

</style>
