<template>
  <div class="app-container">
    <!--搜索框-->
    <el-form v-show="showSearch" ref="queryForm" :model="queryForm" inline size="small">
      <el-form-item label="字典名称" label-width="80px" prop="name">
        <el-select v-model="queryForm.type" placeholder="请选择字典名称">
          <el-option v-for="item in dictOptions" :key="item.id" :value="item.type" :label="item.name" />
        </el-select>
      </el-form-item>
      <el-form-item label="字典标签" label-width="80px" prop="label">
        <el-input v-model="queryForm.label" placeholder="请输入字典类型" type="text" clearable style="width: 230px" />
      </el-form-item>
      <el-form-item label="字典状态" prop="status">
        <el-select v-model="queryForm.status" placeholder="请选择字典状态">
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
      <el-table-column label="字典标签" min-width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.label }}</span>
        </template>
      </el-table-column>
      <el-table-column label="字典类型" min-width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column label="字典键值" min-width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.value }}
        </template>
      </el-table-column>
      <el-table-column label="状态" min-width="50" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === '0'" type="success" size="mini">正常</el-tag>
          <el-tag v-if="scope.row.status === '1'" type="danger" size="mini">停用</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_time" label="创建时间" min-width="110">
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
            @click="handleDelete(scope.row)"
          >删除</el-button>
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
        <el-form-item label="字典类型" prop="type">
          <el-input v-model="form.type" placeholder="请输入字典类型" type="text" disabled clearable />
        </el-form-item>
        <el-form-item label="字典标签" prop="label">
          <el-input v-model="form.label" placeholder="请输入字典标签" type="text" clearable />
        </el-form-item>
        <el-form-item label="字典键值" prop="value">
          <el-input v-model="form.value" placeholder="请输入字典键值" type="text" clearable />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" placeholder="请输入备注" type="textarea" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
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
  </div>
</template>

<script>
import { list, info } from '@/api/dict/dict'
import { retrieve, add, update, del } from '@/api/dict/item'
export default {
  name: 'Item',
  data() {
    return {
      statusOptions: [],
      dictOptions: [],
      title: '',
      total: 0,
      list: [],
      listLoading: false,
      showSearch: true,
      open: false,
      form: {},
      queryForm: {
        page: 1,
        size: 10,
        label: undefined,
        type: undefined,
        status: undefined
      },
      rules: {
        name: [
          { required: true, message: '请输入字典名称', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入字典类型', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    const dictId = this.$route.params && this.$route.params.dictId
    this.queryDictList()
    this.queryDictItem(dictId)
    this.getDicts('sys_common_status').then(res => {
      this.statusOptions = res
    })
  },
  methods: {
    // 查询字典列表
    queryDictList() {
      list().then(res => {
        this.dictOptions = res
      })
    },
    // 查询字典详情
    queryDictItem(dictId) {
      info(dictId).then(res => {
        this.queryForm.type = res.type
        this.query()
      })
    },
    // 查询按钮
    query() {
      this.listLoading = true
      retrieve(this.queryForm).then(res => {
        this.listLoading = false
        this.list = res.data
        this.total = res.count
      })
    },
    // 取消按钮
    cancel() {
      this.open = false
    },
    // 确定按钮
    handleSubmit() {
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
    // 修改按钮
    handleEdit(row) {
      this.title = '修改字典项'
      this.open = true
      const dictInfo = JSON.parse(JSON.stringify(row)) // 对象深拷贝
      this.form = dictInfo
    },
    // 删除按钮
    handleDelete(row) {
      this.$confirm(`您是否要删除字典项"${row.label}"?`, '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(res => {
        del(row).then(res => {
          this.query()
          this.msgSuccess('删除成功')
        })
      }).catch(function() {})
    },
    // 新增按钮
    handleAdd() {
      this.reset()
      this.title = '新增字典项'
      this.form.type = this.queryForm.type
      this.open = true
    },
    // 重置按钮
    resetQuery(refName) {
      this.resetForm(refName)
      this.query()
    },
    // 通用reset
    reset() {
      this.form = {
        status: '0'
      }
      this.resetForm('form')
    }
  }
}
</script>

<style scoped>

</style>
