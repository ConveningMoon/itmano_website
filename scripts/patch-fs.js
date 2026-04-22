// Patches fs.readlink (all forms) to return EINVAL instead of EISDIR
// on exFAT drives where readlink on a regular file returns EISDIR
const fs = require('fs')

function eisdir2einval(err, path) {
  if (err && err.code === 'EISDIR') {
    return Object.assign(new Error(`EINVAL: invalid argument, readlink '${path}'`), {
      code: 'EINVAL',
      errno: -4071,
      syscall: 'readlink',
      path,
    })
  }
  return err
}

// Callback version
const origReadlink = fs.readlink.bind(fs)
fs.readlink = function (path, options, callback) {
  if (typeof options === 'function') { callback = options; options = undefined }
  origReadlink(path, options, (err, link) => callback(eisdir2einval(err, String(path)), link))
}

// Sync version
const origSync = fs.readlinkSync.bind(fs)
fs.readlinkSync = function (path, options) {
  try { return origSync(path, options) }
  catch (err) { throw eisdir2einval(err, String(path)) || err }
}

// fs.promises version
const origPromise = fs.promises.readlink.bind(fs.promises)
fs.promises.readlink = async function (path, options) {
  try { return await origPromise(path, options) }
  catch (err) { throw eisdir2einval(err, String(path)) || err }
}
