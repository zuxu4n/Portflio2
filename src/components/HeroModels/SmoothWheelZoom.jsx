// SmoothWheelZoom.jsx
import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function SmoothWheelZoom({ controlsRef, min = 14, max = 18, sensitivity = 0.0018, smooth = 8 }) {
  const { camera, gl } = useThree()
  const targetDist = useRef(null)

  function getDist() {
    const t = controlsRef.current?.target ?? new THREE.Vector3()
    return camera.position.distanceTo(t)
  }

  function setDist(dist) {
    const t = controlsRef.current?.target ?? new THREE.Vector3()
    const dir = camera.position.clone().sub(t).normalize()
    camera.position.copy(t.clone().add(dir.multiplyScalar(dist)))
  }

  useEffect(() => {
    const el = gl.domElement
    const onWheel = (e) => {
      // prevent page scroll and compute desired distance
      e.preventDefault()
      const cur = Math.min(max, Math.max(min, getDist()))
      const factor = Math.exp(e.deltaY * sensitivity) // smooth, trackpad-friendly
      targetDist.current = THREE.MathUtils.clamp(cur * factor, min, max)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [gl, min, max, sensitivity])

  useFrame((_, dt) => {
    const targ = targetDist.current
    if (targ == null) return
    const cur = getDist()
    // exponential damping toward target (ease in/out)
    const k = 1 - Math.exp(-smooth * dt)
    const next = THREE.MathUtils.lerp(cur, targ, k)
    setDist(next)
    // stop when close
    if (Math.abs(next - targ) < 1e-3) targetDist.current = null
    controlsRef.current?.update()
  })

  return null
}
