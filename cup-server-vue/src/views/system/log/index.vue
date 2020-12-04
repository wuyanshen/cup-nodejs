<template>
  <div class="app-container">
    <!--搜索框-->
    <el-form v-show="showSearch" ref="queryForm" :model="queryForm" inline size="small">
      <el-form-item label="系统模块" label-width="80px" prop="module">
        <el-select v-model="queryForm.module" placeholder="请选择系统模块">
          <el-option v-for="item in moduleOptions" :key="item.id" :value="item.value" :label="item.label" />
        </el-select>
      </el-form-item>
      <el-form-item label="日志状态" prop="status">
        <el-select v-model="queryForm.status" placeholder="请选择日志状态">
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
      <el-button type="danger" icon="el-icon-delete" size="mini" @click="handleClear">清空日志</el-button>
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
      <el-table-column label="系统模块" min-width="80" align="center">
        <template slot-scope="scope">
          <template v-for="item in moduleOptions">
            <span v-if="scope.row.module === item.value" :key="item.value">{{ item.label }}</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="请求url" min-width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.url }}</span>
        </template>
      </el-table-column>
      <el-table-column label="请求类型" min-width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.method }}</span>
        </template>
      </el-table-column>
      <el-table-column label="请求方法" min-width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.method_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="主机地址" min-width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.oper_ip }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作地址" min-width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.oper_location }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作人" min-width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.oper_name }}
        </template>
      </el-table-column>
      <el-table-column label="状态" min-width="50" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status === '0'" type="success" size="mini">正常</el-tag>
          <el-tag v-if="scope.row.status !== '0'" type="danger" size="mini">异常</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="oper_time" label="操作时间" min-width="110">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.oper_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="100" align="center">
        <template slot-scope="scope">
          <el-button
            type="success"
            icon="el-icon-view"
            size="mini"
            @click="handleDetail(scope.row)"
          >详情</el-button>
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
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="系统模块">
              {{ form.module }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="请求url">
              {{ form.url }}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="请求类型">
              {{ form.method }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="请求方法">
              {{ form.method_name }}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="操作人">
              {{ form.oper_name }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="操作地址">
              {{ form.oper_location }}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="主机地址">
              {{ form.oper_ip }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态码">
              {{ form.status }}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="请求参数">
              <json-viewer
                :value="form.params == null ? '': JSON.parse(form.params)"
                :copyable="{copyText: '复制', copiedText: '已复制', timeout: 2000}"
                sort
                boxed
                expanded
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="响应参数">
              <json-viewer
                :value="form.response == null ? '': JSON.parse(form.response)"
                :expand-depth="5"
                :copyable="{copyText: '复制', copiedText: '已复制', timeout: 2000}"
                sort
                boxed
                expanded
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { retrieve, clear } from '@/api/log'

export default {
  name: 'Index',
  data() {
    return {
      statusOptions: [],
      moduleOptions: [],
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
        module: undefined,
        status: undefined
      },
      rules: {
        name: [
          { required: true, message: '请输入日志名称', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入日志类型', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.query()
    this.getDicts('sys_log_status').then(res => {
      this.statusOptions = res
    })
    this.getDicts('sys_module').then(res => {
      this.moduleOptions = res
    })
  },
  methods: {
    // 查询按钮
    query() {
      this.listLoading = true
      retrieve(this.queryForm).then(res => {
        this.listLoading = false
        this.list = res.data
        this.total = res.count
      })
    },
    // 确定按钮
    handleSubmit() {
      this.open = false
    },
    // 详情按钮
    handleDetail(row) {
      this.title = '日志详情'
      this.open = true
      // 对象深拷贝
      this.form = JSON.parse(JSON.stringify(row))
    },
    // 清空日志按钮
    handleClear() {
      this.$confirm(`您是否要清空所有日志?`, '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(res => {
        clear().then(res => {
          this.query()
          this.msgSuccess('清空成功')
        })
      }).catch(function() {})
    },
    // 重置按钮
    resetQuery(refName) {
      this.resetForm(refName)
      this.query()
    },
    // 通用reset
    reset() {
      this.form = {
        status: 0
      }
      this.resetForm('form')
    }
  }
}
</script>

<style scoped>

</style>
