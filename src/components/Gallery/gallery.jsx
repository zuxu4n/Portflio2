// src/components/Gallery.jsx
import React from 'react'
import CircularGallery from './circulargallery' // adjust path if CircularGallery lives elsewhere

export default function Gallery() {
  return (
    <div id="gallery" style={{ height: '600px', position: 'relative' }}>
      <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
    </div>
  )
}
