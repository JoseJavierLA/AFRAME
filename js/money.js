window.addEventListener('load', initScene)

const coins = [
    { x: 0, y: 0, z: -30 },
    { x: 0, y: 0, z: 30 },
    { x: 30, y: 0, z: 0 },
    { x: -30, y: 0, z: 0 },
    { x: 20, y: 0, z: 20 },
    { x: 20, y: 0, z: -20 },
    { x: -20, y: 0, z: -20 },
    { x: -20, y: 0, z: 20 }
]

let Euros, score = 0

function initScene() {

    let orbits = document.querySelectorAll('.orbit')

    orbits.forEach(orbit => {

        coins.forEach(pos => {

            Euros = document.createElement('a-entity')

            Euros.setAttribute('geometry', { primitive: 'plane', width: Math.random() * 3 + 0.5, height: Math.random() * 3 + 0.5,  }) 
            Euros.setAttribute('material', { shader: 'flat', src: '#dollar' })
            Euros.setAttribute('class', 'Euros')
            Euros.setAttribute('coger', '')
            Euros.object3D.position.set(pos.x, pos.y, pos.z)
            orbit.appendChild(Euros)
        })
    })
}

AFRAME.registerComponent('coger', {
    init: function () {
        this.el.addEventListener('click', () => {
            this.el.parentNode.removeChild(this.el)
            document.querySelector('[text]').setAttribute('value', `${++score}  Euros`)
        })
    }
})