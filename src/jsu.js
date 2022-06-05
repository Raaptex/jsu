console.log("JSU Loaded")

includes = {}
files = {
    "keyboard": "https://cdn.jsdelivr.net/gh/Raaptex/jsu/src/keyboard.js",
    "sprite": "https://cdn.jsdelivr.net/gh/Raaptex/jsu/src/sprite.js"
}
  

function include(file_name) {
    includes[file_name] = false
    fetch(files[file_name]).then((res) => {
        var script = document.createElement("script")
        document.head.appendChild(script)
        res.text().then(valeur => { script.textContent = valeur })
        includes[file_name] = true
    });
}

function execute(src) {
    for(const inc of Object.keys(includes)) {
        if(!includes[inc]) {
            setTimeout(() => {
                execute(src)
            }, 100)
            return
        }
    }
    var script = document.createElement("script")
    script.src = src
    document.head.appendChild(script)
}
