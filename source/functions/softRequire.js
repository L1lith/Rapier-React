const notFound = /cannot find module/i

function softRequire(lib) {
  try {
    return require(lib)
  } catch (error) {
    if (notFound.test(error)) return null
    throw error
  }
}

export default softRequire
