import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
      {/* Soft ambient light for overall fill */}
      <ambientLight intensity={0.2} color="#f0f4ff" />

      {/* Hemisphere light to simulate sky + ground bounce */}
      <hemisphereLight
        skyColor={'#bdefff'}   // soft sky blue
        groundColor={'#fcebbd'} // warm ground reflection
        intensity={0.9}
      />

      {/* Main directional light from above - stronger and more focused */}
      <directionalLight
        position={[-2, 2, 6.7]}
        intensity={3}
        color="#ffffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={60}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-30}
        shadow-bias={-0.0001}
      />

      {/* Secondary directional light for softer fill */}
      <directionalLight
        position={[-8, 10, -3]}
        intensity={1.2}
        color="#e8f2ff"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={30}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />

      {/* Rim light from behind/side for depth */}
      <spotLight
        position={[-5, 8, -8]}
        angle={0.5}
        penumbra={0.3}
        intensity={1.5}
        color="#fff8e1"
      />

      {/* Subtle bounce light from below */}
      <pointLight
        position={[0, -2, 0]}
        intensity={6.7}
        color="#c8e6c9"
      />

        <pointLight
        position={[1.03, .44, .76]} // lantern position
        intensity={1.5}
        distance={5}
        color="#ffeb99"
        />


    </>
  )
}

export default HeroLights
