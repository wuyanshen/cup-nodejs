/**
 * 将菜单数组转换成树形菜单
 * @param source    源数组
 * @param id        id属性名称
 * @param parentId  父节点名称
 * @param children  子节点名称
 * @returns {*}
 */
function makeTree(source, id, parentId, children) {
  const cloneData = JSON.parse(JSON.stringify(source)); // 对源数据深度克隆
  const data = cloneData.filter(father => {
    const branchArr = cloneData.filter(child => father[id] === child[parentId]); // 找出当前节点的所有子节点
    branchArr.length > 0 ? father[children] = branchArr : father[children] = []; // 将子节点赋值给父节点的children
    return father[parentId] === 0; // 如果第一层不是parentId=0，请自行修改
  });
  return data.length > 0 ? data : source;
}

/**
 * 生成前端路由
 */
function generateRouters(trees) {
  const routers = [];
  for (const tree of trees) {
    const router = {};
    const children = tree.children;
    router['name'] = tree.path.substring(0, 1).toUpperCase() + tree.path.substring(1);

    if (tree.type === 3 && tree.pid === 0 && tree.is_frame === 0) { // 如果是目录
      router['path'] = `/${tree.path}`;
    } else if (tree.type === 1 && tree.pid === 0 && tree.is_frame === 0) { // 如果是菜单
      router['path'] = '/';
    } else {
      router['path'] = tree.path;
    }

    router['hidden'] = tree.visible === 0;
    if (children && children.length > 0 && tree.type === 3) { // 菜单类型为目录
      router['component'] = 'Layout';
      router['redirect'] = 'noRedirect';
      router['alwaysShow'] = true;
      router['children'] = generateRouters(children); // 递归
    } else {
      router['component'] = tree.component;
    }
    router['meta'] = {
      title: tree.name,
      icon: tree.icon,
      noCache: tree.is_cache === 1
    };
    routers.push(router);
  }
  return routers;
}

module.exports = {
  makeTree,
  generateRouters
};
