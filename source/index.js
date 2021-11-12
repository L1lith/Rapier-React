// Ensure we have one of the rapier libs
try {
  require('@dimforge/rapier3d')
} catch (error) {
  try {
    require('@dimforge/rapier2d')
  } catch (error) {
    throw new Error('Please install either @dimforge/rapier2d or @dimforge/rapier3d')
  }
}
