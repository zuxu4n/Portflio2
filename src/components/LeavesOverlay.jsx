import React, { useEffect, useRef } from 'react'
import LeafScene from '../constants/LeafScene'

export default function LeavesOverlay({ count = 20, z = 30 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const scene = new LeafScene(el)
    scene.options.numLeaves = count
    scene.init()
    scene.render()
    return () => scene.destroy()
  }, [count])

  return <div ref={containerRef} className="leaf-overlay" style={{ zIndex: z }} />
}
