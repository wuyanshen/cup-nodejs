<template>
  <div class="app-container">
    <!--搜索框-->
    <el-form v-show="showSearch" ref="queryForm" :model="queryForm" inline size="small">
      <el-form-item label="菜单名称" label-width="80px" prop="name">
        <el-input v-model="queryForm.name" placeholder="请输入菜单名称" type="text" clearable style="width: 230px" />
      </el-form-item>
      <el-form-item label="菜单状态" label-width="80px" prop="status">
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
      v-loading="listLoading"
      size="small"
      :data="list"
      element-loading-text="Loading"
      highlight-current-row
      style="width: 100%"
      row-key="id"
      :tree-props="{children: 'children'}"
    >
      <el-table-column label="菜单名称" min-width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="图标" min-width="50" align="center">
        <template slot-scope="scope">
          <svg-icon :icon-class="scope.row.icon" />
        </template>
      </el-table-column>
      <el-table-column label="类型" min-width="50" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.type === 3" type="info" size="mini">目录</el-tag>
          <el-tag v-if="scope.row.type === 1" type="primary" size="mini">菜单</el-tag>
          <el-tag v-if="scope.row.type === 2" type="warning" size="mini">按钮</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="sortNum" label="排序" min-width="50">
        <template slot-scope="scope">
          <span>{{ scope.row.sort_num }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="permission" label="权限标识" min-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.permission }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="component" label="组件路径" min-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.component }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="status" label="状态" min-width="50">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === '1'" size="mini" type="danger">停用</el-tag>
          <el-tag v-if="scope.row.status === '0'" size="mini" type="success">正常</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="visible" label="显隐" min-width="50">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.visible === 1" type="success" size="mini">显示</el-tag>
          <el-tag v-if="scope.row.visible === 0" type="danger" size="mini">隐藏</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" min-width="110">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="240" align="center">
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
          >新增子菜单</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--新增 或 修改 dialog-->
    <el-dialog :visible.sync="open" :title="title" :close-on-click-modal="false" width="600px">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px" size="small">
        <el-form-item>
          <el-alert
            title="不选择上级菜单就代表添加根菜单"
            type="info"
            :closable="false"
            show-icon
          /></el-form-item>
        <el-form-item label="上级菜单" prop="pid">
          <treeselect v-model="form.pid" :options="menuOptions" :normalizer="normalizer" :show-count="true" placeholder="请选择上级菜单" />
        </el-form-item>
        <el-form-item label="菜单类型">
          <el-radio-group v-model="form.type" @change="handleChange">
            <el-radio-button :label="3">目录</el-radio-button>
            <el-radio-button :label="1">菜单</el-radio-button>
            <el-radio-button :label="2">按钮</el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-row>
          <el-col :span="24">
            <el-form-item v-if="form.type !== 2" label="菜单图标">
              <el-popover
                placement="bottom-start"
                width="460"
                trigger="click"
                @show="$refs['iconSelect'].reset()"
              >
                <IconSelect ref="iconSelect" @selected="selected" />
                <el-input slot="reference" v-model="form.icon" placeholder="点击选择图标" readonly>
                  <svg-icon
                    v-if="form.icon"
                    slot="prefix"
                    :icon-class="form.icon"
                    class="el-input__icon"
                    style="height: 32px;width: 16px;"
                  />
                  <i v-else slot="prefix" class="el-icon-search el-input__icon" />
                </el-input>
              </el-popover>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="菜单名称" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item v-if="form.type !== 2" label="路由地址" prop="path">
              <el-input v-model="form.path" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item v-if="form.type !== 2" label="是否外链">
              <el-switch
                v-model="form.is_frame"
                :active-value="1"
                :inactive-value="0"
                active-text="外链"
                inactive-text="非外链"
                active-color="#13ce66"
                inactive-color="#ff4949"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="菜单排序" prop="sortNum">
              <el-input v-model="form.sort_num" type="number" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item v-if="form.type !== 3" label="权限标识" prop="permission">
              <el-input v-model="form.permission" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item v-if="form.type === 1" label="组件路径" prop="component">
              <el-input v-model="form.component" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item v-if="form.type === 1" label="是否缓存">
              <el-switch
                v-model="form.is_cache"
                :active-value="1"
                :inactive-value="0"
                active-text="缓存"
                inactive-text="不缓存"
                active-color="#13ce66"
                inactive-color="#ff4949"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item v-if="form.type !== 2" label="是否显示" prop="component">
              <el-switch
                v-model="form.visible"
                :active-value="1"
                :inactive-value="0"
                active-text="显示"
                inactive-text="隐藏"
                active-color="#13ce66"
                inactive-color="#ff4949"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item v-if="form.type !== 2" label="菜单状态" prop="status">
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
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="cancel">取 消</el-button>
        <el-button type="primary" size="mini" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { add, del, retrieve, update } from '@/api/menu'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import IconSelect from '@/components/IconSelect'

export default {
  name: 'Role',
  components: {
    Treeselect,
    IconSelect
  },
  data() {
    return {
      statusOptions: [],
      title: '',
      menuOptions: [],
      showSearch: true,
      listLoading: false,
      queryForm: {
        name: undefined,
        status: undefined
      },
      form: {},
      open: false,
      list: [],
      rules: {
        name: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.query()
    this.getDicts('sys_common_status').then(res => {
      this.statusOptions = res
    })
  },
  methods: {
    // 菜单类型变化事件
    handleChange(val) {
      if (val === 2) {
        this.form.visible = 0
      }
    },
    // 选择图标
    selected(name) {
      this.form.icon = name
    },
    // 查询按钮
    query() {
      this.listLoading = true
      retrieve(this.queryForm).then(res => {
        this.listLoading = false
        this.list = res
        this.menuOptions = res
      })
    },
    // 重置按钮
    resetQuery(formName) {
      this.resetForm(formName)
      this.query()
    },
    // 修改按钮
    handleEdit(row) {
      this.title = '修改菜单'
      this.open = true
      // 对象深拷贝
      this.form = JSON.parse(JSON.stringify(row))
    },
    // 新增按钮
    handleAdd() {
      this.reset()
      this.title = '新增菜单'
      this.open = true
    },
    // 新增子菜单按钮
    handleAddChildren(id) {
      this.reset()
      this.form.pid = id
      this.title = '新增子菜单'
      this.open = true
    },
    // 删除按钮
    handleDelete(id) {
      this.$confirm(`您是否确认要删除id为${id}的菜单`, '警告', {
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
              this.open = false
              this.query()
              this.msgSuccess('新增成功')
            })
          } else {
            update(this.form).then(res => {
              this.open = false
              this.query()
              this.msgSuccess('修改成功')
            })
          }
        }
      })
    },
    // 取消按钮
    cancel() {
      this.open = false
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
      this.resetForm('form')
      this.form = {
        id: undefined,
        pid: 0,
        name: undefined,
        icon: undefined,
        type: 1,
        is_frame: 0,
        is_cache: 1,
        visible: 1,
        sort_num: 0,
        status: '0'
      }
    }
  }
}
</script>

<style scoped>

</style>
