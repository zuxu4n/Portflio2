// src/constants/LeafScene.js
export default function LeafScene(el) {
  this.viewport = el
  this.world = document.createElement('div')
  this.leaves = []

  this.options = {
    numLeaves: 25,
    wind: { magnitude: 1.2, maxSpeed: 9, duration: 300, start: 0, speed: 0 }
  }

  const getViewportW = () => window.visualViewport?.width || window.innerWidth
  const getViewportH = () => window.visualViewport?.height || window.innerHeight

  this.isMobile = window.matchMedia('(max-width: 768px)').matches
  this.baseLeafScale = this.isMobile ? 0.5 : 0.8
  this.options.wind.deviceScale = this.isMobile ? 1 / 3 : 1

  this.width = getViewportW()
  this.height = getViewportH()
  this.timer = 0

  this._resetLeaf = function (leaf) {
    leaf.x = (this.width * 2) / 5 - Math.random() * (this.width * 0.75)
    leaf.y = -10
    leaf.z = Math.random() * 200

    if (this.timer === 0) {
      leaf.y = 0 - this.height / 3 - Math.random() * this.height / 3
    }

    leaf.rotation.speed = Math.random() * 10
    const r = Math.random()
    if (r > 0.5) {
      leaf.rotation.axis = 'X'
    } else if (r > 0.25) {
      leaf.rotation.axis = 'Y'
      leaf.rotation.x = Math.random() * 150 + 90
    } else {
      leaf.rotation.axis = 'Z'
      leaf.rotation.x = Math.random() * 300 - 180
      leaf.rotation.speed = Math.random() * 2
    }

    leaf.xSpeedVariation = (Math.random() - 0.5) * 0.1
    leaf.ySpeed = Math.random() + 1

    leaf.baseOpacity = 0.1 + Math.random() * 0.4
    leaf.opacity = leaf.baseOpacity
    leaf.el.style.opacity = leaf.opacity

    return leaf
  }

  this._updateLeaf = function (leaf) {
    const leafWindSpeed = this.options.wind.speed(
      this.timer - this.options.wind.start,
      leaf.y
    )
    const xSpeed = leafWindSpeed + leaf.xSpeedVariation
    leaf.x += xSpeed
    leaf.y += leaf.ySpeed
    leaf.rotation.value += leaf.rotation.speed

    const fadeZone = this.height * 0.2
    const fadeStart = this.height - fadeZone
    let opacity = leaf.baseOpacity
    let scale = 1

    if (leaf.y > fadeStart) {
      const fadeProgress = (leaf.y - fadeStart) / fadeZone
      const clampedProgress = Math.min(1, Math.max(0, fadeProgress))
      opacity = leaf.baseOpacity * (1 - clampedProgress)
      scale = 1 - clampedProgress * 0.9
    }

    leaf.el.style.opacity = opacity

    const finalScale = scale * (this.baseLeafScale || 1)

    let t = `translate3d(${leaf.x}px, ${leaf.y}px, ${leaf.z}px) rotate${leaf.rotation.axis}(${leaf.rotation.value}deg) scale(${finalScale})`
    if (leaf.rotation.axis !== 'X') t += ` rotateX(${leaf.rotation.x}deg)`
    leaf.el.style.transform = t

    if (leaf.x > this.width + 10 || leaf.y > this.height + 10 || opacity <= 0) {
      this._resetLeaf(leaf)
    }
  }

  this._updateWind = function () {
    if (this.timer === 0 || this.timer > this.options.wind.start + this.options.wind.duration) {
      this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed
      this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10)
      this.options.wind.start = this.timer
      const screenHeight = this.height

      this.options.wind.speed = function (t, y) {
        const a = (this.magnitude / 2) * (screenHeight - (2 * y) / 3) / screenHeight
        const v = a * Math.sin((2 * Math.PI / this.duration) * t + (3 * Math.PI) / 2) + a
        return v * (this.deviceScale || 1)
      }
    }
  }
}

LeafScene.prototype.init = function () {
  for (let i = 0; i < this.options.numLeaves; i++) {
    const leaf = {
      el: document.createElement('div'),
      x: 0, y: 0, z: 0,
      rotation: { axis: 'X', value: 0, speed: 0, x: 0 },
      xSpeedVariation: 0, ySpeed: 0,
      path: { type: 1, start: 0 }, image: 1
    }
    this._resetLeaf(leaf)
    this.leaves.push(leaf)
    this.world.appendChild(leaf.el)
  }

  this.world.className = 'leaf-scene'
  this.viewport.appendChild(this.world)
  this.world.style.perspective = '400px'

  const getViewportW = () => window.visualViewport?.width || window.innerWidth
  const getViewportH = () => window.visualViewport?.height || window.innerHeight

  this._onResize = () => {
    this.width = getViewportW()
    this.height = getViewportH()
    const m = window.matchMedia('(max-width: 768px)').matches
    this.baseLeafScale = m ? 0.5 : 0.8
    this.options.wind.deviceScale = m ? 1 / 3 : 1
  }

  window.addEventListener('resize', this._onResize)

  if (window.visualViewport) {
    this._onVVResize = () => {
      this.width = getViewportW()
      this.height = getViewportH()
    }
    window.visualViewport.addEventListener('resize', this._onVVResize)
  }
}

LeafScene.prototype.render = function () {
  this._running = true
  const loop = () => {
    if (!this._running) return
    this._updateWind()
    for (let i = 0; i < this.leaves.length; i++) this._updateLeaf(this.leaves[i])
    this.timer++
    this._raf = requestAnimationFrame(loop)
  }
  this._raf = requestAnimationFrame(loop)
}

LeafScene.prototype.stop = function () {
  this._running = false
  if (this._raf) cancelAnimationFrame(this._raf)
}

LeafScene.prototype.destroy = function () {
  this.stop()
  window.removeEventListener('resize', this._onResize)
  if (window.visualViewport && this._onVVResize) {
    window.visualViewport.removeEventListener('resize', this._onVVResize)
  }
  if (this.world && this.world.parentNode) this.world.parentNode.removeChild(this.world)
}
