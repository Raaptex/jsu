console.log("JSU Loaded")

files = {
    "keyboard": "https://raw.githubusercontent.com/Raaptex/jsu/main/src/keyboard.js",
    "sprite": "https://raw.githubusercontent.com/Raaptex/jsu/main/src/sprite.js"
}

function include(file_name) {
    var script = document.createElement("script")
    script.src = files[file_name]
    document.head.appendChild(script)
}

function execute(src) {
    var script = document.createElement("script")
    script.src = src
    document.head.appendChild(script)
}
