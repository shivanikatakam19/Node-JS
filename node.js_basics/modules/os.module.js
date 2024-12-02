const os = require('os');

// Returns the platform the Node.js process is running on.
console.log('platform: ', os.platform());
// Outputs: 'win32', or 'darwin' or 'linux', etc.

// Returns the architecture of the CPU for which Node.js was compiled.
console.log('architecture:', os.arch());
// Outputs: 'x64', 'arm', etc.

// Returns an array of objects containing information about each logical CPU core available on the system.
// Each object includes the model, speed (in MHz), and times (which contains CPU time spent in user, nice, sys, idle, and irq modes).
console.log('CPU:', os.cpus());
/*
Outputs something like:
[
  {
    model: '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz',
    speed: 1382,
    times: {
      user: 2253046,
      nice: 0,
      sys: 1024453,
      idle: 51270468,
      irq: 19265
    }
  }
  ...
]
*/

// Returns the total amount of system memory (in bytes).
console.log('total memory:', os.totalmem());
// Outputs total memory in bytes (e.g., 16910155776)

// Returns the amount of free system memory (in bytes).
console.log('free memory:', os.freemem());
// Outputs available memory in bytes (e.g., 8007233536)

// Returns the system uptime in seconds (the amount of time the system has been running).
console.log('up time:', os.uptime());
// Outputs: 102154.843

// Returns the home directory of the current user.
console.log('home directory:', os.homedir());
// Outputs: C:\Users\Shivani Katakam

// Returns the hostname of the operating system.
console.log('hostname:', os.hostname());
// Outputs: COGNINE-L192

// Returns the default directory for temporary files.
console.log('dir for temp files:', os.tmpdir());
// Outputs:  C:\Users\SHIVAN~1\AppData\Local\Temp

// Returns the operating system name.
console.log('os name:', os.type());
// Outputs: 'Linux', 'Darwin', or 'Windows_NT'

// Returns the OS version/release number.
console.log('os release:', os.release());
// Outputs: OS version (e.g., '5.4.0-42-generic' on Linux or '10.0.19045' on Windows)

// Returns an object with network interfaces available on the system, 
// including their IP addresses, whether they are internal (local), and MAC addresses.
console.log('network interfaces:', os.networkInterfaces());
/*
Outputs something like:
{
  'Wi-Fi': [
    {
      address: 'fe80::e316:394:3396:571a',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'bc:09:1b:5f:3c:91',
      internal: false,
      cidr: 'fe80::e316:394:3396:571a/64',
      scopeid: 12
    },
    {
      address: '192.168.1.66',
      netmask: '255.255.252.0',
      family: 'IPv4',
      mac: 'bc:09:1b:5f:3c:91',
      internal: false,
      cidr: '192.168.1.66/22'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}
*/

// Returns the CPU endianness (either 'BE' for big-endian or 'LE' for little-endian).
console.log('endianness', os.endianness());
// Outputs: 'LE'

// Returns information about the current user, including the username, home directory, shell, etc.
console.log('user info', os.userInfo());
/*
Outputs something like:
{
  uid: -1,
  gid: -1,
  username: 'Shivani Katakam',
  homedir: 'C:\\Users\\Shivani Katakam',
  shell: null
}
*/

// Returns an array with the load averages (1, 5, and 15 minutes). 
// This is only available on Unix-based systems like Linux or macOS. On Windows, it returns [0, 0, 0].
console.log('load avg', os.loadavg());
// Outputs: [ 0, 0, 0 ]

// This is an object that contains commonly used operating system constants like error codes, signals, etc.
console.log('constants', os.constants.signals);
//  [Object: null prototype] {
//   SIGHUP: 1,
//   SIGINT: 2,
//   SIGQUIT: 3,
//   SIGILL: 4,
//   SIGABRT: 22,
//   SIGFPE: 8,
//   SIGKILL: 9,
//   SIGSEGV: 11,
//   SIGTERM: 15,
//   SIGBREAK: 21,
//   SIGWINCH: 28
// }
















