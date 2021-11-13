import { useEffect, useState } from 'react'
import { sanitize } from 'sandhands'

const propsFormat = {
  _: {
    dimensions: { _: Number, min: 2, max: 3, integer: true },
    gravity: { _: { x: Number, y: Number, z: Number }, allOptional: true },
    gameLoop: Function
  },
  allOptional: true
}

function useRapier(props = {}) {
  sanitize(props, propsFormat)
  const [RAPIER, setRapier] = useState(null)
  const [error, setError] = useState()
  const { dimensions = 2, gravity = { x: 0, y: 0 } } = props
  if (dimensions === 3 && !gravity.hasOwnProperty('z')) gravity.z = 0
  useEffect(() => {
    import(dimensions === 2 ? '@dimforge/rapier2d' : '@dimforge/rapier3d')
      .then(rapierInstance => {
        setRapier(rapierInstance)
      })
      .catch(error => setError(error))
  }, [RAPIER])
  if (error !== undefined) throw error
  return RAPIER
}

export default useRapier
