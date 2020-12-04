const os = require('os');
// const diskInfoObj = require('diskinfo');
const osUtils = require('os-utils');
const si = require('systeminformation');

// 操作系统信息
async function sysInfo() {
  // 获取操作系统平台
  let platform = os.platform();
  if (platform.indexOf('win32') !== -1) {
    const version = os.release().split('.')[0];
    platform = 'Windows ' + version;
  } else if (platform.indexOf('darwin') !== -1) {
    const osInfo = await si.osInfo();
    platform = `${osInfo.distro} ${osInfo.release} ${osInfo.codename}`;
  } else {
    platform = 'Linux';
  }

  // 操作系统运行时间
  const uptime = timeStamp(os.uptime());
  // 项目运行时间
  const pUpTime = timeStamp(process.uptime());
  // 本机ip
  const ip = getIPAddress();
  // 获取计算机名
  const hostname = os.hostname();
  // 操作系统类型
  const type = os.type();
  // 操作系统发行版本
  const release = os.release();
  // 操作系统架构
  const arch = os.arch();

  return {
    platform,
    uptime,
    pUpTime,
    ip,
    hostname,
    type,
    arch,
    release
  };
}

// cpu信息
async function cpuInfo() {
  // cpu信息
  const cpuName = os.cpus()[0].model;

  // cpu使用率
  let cpuUsage = await new Promise(resolve => {
    osUtils.cpuUsage((v) => {
      resolve(v);
    });
  });
  cpuUsage = (cpuUsage * 100).toFixed(2);

  // cpu空闲率
  let cpuFree = await new Promise(resolve => {
    osUtils.cpuFree((v) => {
      resolve(v);
    });
  });
  cpuFree = (cpuFree * 100).toFixed(2);

  // cpu核心数
  const cpuNum = os.cpus().length;

  return {
    cpuName,
    cpuUsage,
    cpuFree,
    cpuNum
  };
}
// 获取本机ip
function getIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

// 将秒转化为天 - 时 - 分
function timeStamp(secondTime) {
  var time = parseInt(secondTime) + '秒';
  if (parseInt(secondTime) > 60) {
    var second = parseInt(secondTime) % 60;
    var min = parseInt(secondTime / 60);
    time = min + '分' + second + '秒';

    if (min > 60) {
      min = parseInt(secondTime / 60) % 60;
      var hour = parseInt(parseInt(secondTime / 60) / 60);
      time = hour + '小时' + min + '分' + second + '秒';

      if (hour > 24) {
        hour = parseInt(parseInt(secondTime / 60) / 60) % 24;
        var day = parseInt(parseInt(parseInt(secondTime / 60) / 60) / 24);
        time = day + '天' + hour + '小时' + min + '分' + second + '秒';
      }
    }
  }
  return time;
}

// 内存信息
async function memInfo() {
  // 可用内存
  const freemem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  // 总内存
  const totalmem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  // 已用内存
  const usedMem = ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  // 内存使用率
  const memUsage = ((1 - os.freemem() / os.totalmem()) * 100).toFixed(2);

  const mem = await si.mem();
  // =========== 交换区 ============
  const swapTotal = (mem.swaptotal / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  const swapUsed = (mem.swapused / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  const swapFree = (mem.swapfree / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  const swapUsage = (mem.swapused / mem.swaptotal * 100).toFixed(2);

  return {
    freemem,
    totalmem,
    usedMem,
    memUsage,
    swapTotal,
    swapUsed,
    swapFree,
    swapUsage
  };
}

// 磁盘信息
async function diskInfo() {
  // // 获得所有磁盘空间
  // const aDrives = await new Promise((resolve, reject) => {
  //   diskInfoObj.getDrives((err, aDrives) => {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       resolve(aDrives);
  //     }
  //   });
  // });
  // const currentDisk = __dirname.substr(0, 2).toLowerCase();
  // let mounted;
  // let total;
  // let used;
  // let available;
  // let capacity;
  // // 遍历所有磁盘信息
  // for (let i = 0; i < aDrives.length; i++) {
  //   // 只获取当前磁盘信息
  //   if (aDrives[i].mounted.toLowerCase() === currentDisk) {
  //     // 盘符号
  //     mounted = aDrives[i].mounted;
  //     // 总量
  //     total = (aDrives[i].blocks / 1024 / 1024 / 1024).toFixed(1);
  //     // 已使用
  //     used = (aDrives[i].used / 1024 / 1024 / 1024).toFixed(1);
  //     // 可用
  //     available = (aDrives[i].available / 1024 / 1024 / 1024).toFixed(1);
  //     // 使用率
  //     // capacity = (used / total * 100).toFixed(2);
  //   }
  // }
  // // eslint-disable-next-line prefer-const
  // capacity = (used / total * 100).toFixed(2);
  // total = total + ' GB';
  // used = used + ' GB';
  // available = available + ' GB';
  // return {
  //   mounted,
  //   total,
  //   used,
  //   available,
  //   capacity
  // };
  const diskList = await si.fsSize();
  let used = 0;
  let total = 0;
  for (const disk of diskList) {
    if (os.platform().indexOf('darwin') === -1) {
      total += disk.size;
    } else {
      total = disk.size;
    }
    used += disk.used;
  }
  const available = ((total - used) / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  const usageRate = (used / total * 100).toFixed(2);
  total = (total / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  used = (used / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  console.log(`硬盘总容量：${total} 已用：${used} 可用：${available} 硬盘使用率：${usageRate}`);
  return {
    total,
    used,
    available,
    usageRate
  };
}

module.exports = {
  sysInfo,
  cpuInfo,
  memInfo,
  diskInfo
};
