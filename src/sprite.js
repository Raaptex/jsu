class Sprite {

    constructor(width, height, x = 0, y = 0) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        
        console.log(width, height, x, y)

        this.element = document.createElement("div")
        this.element.style.width = width + "px"
        this.element.style.height = height + "px"
        this.element.style.position = "absolute"
        this.element.style.left = x + "px"
        this.element.style.top = y + "px"
        this.element.className = "jsu-sprite"
    }

    setParent(element) {
        element.appendChild(this.element)
    }
    
    fillColor(color) {
        this.element.style.backgroundColor = color
    }

    setTexture(src) {
        this.texture = document.createElement("img")
        this.texture.src = src
        this.texture.style.width = this.width + "px"
        this.texture.style.height = this.height + "px"
        this.texture.className = "jsu-sprite-texture"
        this.element.appendChild(this.texture)
    }

    addPosition(x, y) {
        this.x += x
        this.y += y
        this.element.style.left = this.x + "px"
        this.element.style.top = this.y + "px"
    }

    setPosition(x, y) {
        this.x = x
        this.y = y
        this.element.style.left = this.x + "px"
        this.element.style.top = this.y + "px"
    }

}