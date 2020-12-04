
/** 重置表单 **/
export function resetForm(refName) {
  if (this.$refs[refName]) {
    this.$refs[refName].resetFields()
  }
}

/** 处理日期区间参数 **/
export function handleDateRange(params, dateRange) {
  const query = params
  if (dateRange) {
    query.startTime = dateRange[0]
    query.endTime = dateRange[1]
  }
  return query
}

/** 获取树所有选中的节点id数组 **/
export function getTreeCheckedKeys(refName) {
  const halfCheckedKeys = this.$refs[refName].getHalfCheckedKeys()
  const fullCheckedKeys = this.$refs[refName].getCheckedKeys()
  return halfCheckedKeys.concat(fullCheckedKeys)
}

/** 选中tree的节点 **/
export function setTreeNodeCheck(refName, nodeId) {
  const node = this.$refs[refName].getNode(nodeId)
  if (node && node.isLeaf) { // 只让叶子节点选中
    this.$refs[refName].setChecked(node, true)
  }
}
