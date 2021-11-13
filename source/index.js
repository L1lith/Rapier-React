import useRapier from './useRapier'
import softRequire from './functions/softRequire'
// Ensure we have one of the rapier libs

// const twoD = softRequire('@dimforge/rapier2d')
// const threeD = softRequire('@dimforge/rapier3d')
// if (!twoD && !threeD) throw new Error(`Please install "@dimforge/rapier2d" or "@dimforge/rapier3d"`)

export { useRapier }
