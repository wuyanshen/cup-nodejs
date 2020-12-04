const si = require('systeminformation');
const moment = require('moment');
const os = require('os');

function timeInfo() {
  const time = si.time();
  console.log((time.uptime / 3600).toFixed(2));
  console.log(moment(time.current).format('HH:mm:ss'));
}

async function diskInfo() {
  const diskList = await si.fsSize();
  let used = 0;
  let total = 0;
  for (const disk of diskList) {
    used += disk.used;
    if (os.platform().indexOf('darwin') === -1) {
      total += disk.size;
    } else {
      total = disk.size;
    }
  }
  const available = ((total - used) / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  const usage = (used / total * 100).toFixed(2);
  total = (total / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  used = (used / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  console.log(`硬盘总容量：${total} 已用：${used} 可用：${available} 硬盘使用率：${usage}`);
}

async function memInfo() {
  const mem = await si.mem();
  const usage = (mem.used / mem.total * 100).toFixed();
  const total = (mem.total / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  const used = (mem.used / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  console.log(mem);
  console.log(`内存总容量：${total} 已用：${used} 内存使用率：${usage}`);
}

async function osInfo() {
  const os = await si.osInfo();
  console.log(os);
}

async function networkInfo() {
  const network = await si.versions();
  console.log(network);
}

osInfo();
