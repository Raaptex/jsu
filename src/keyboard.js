var whileKeysDown =  {}
var keyIsDown = {}

function whileKeyDownDo(key, callback) {
    whileKeysDown[key] = callback
}

document.onkeydown = async function(e) {
    if(whileKeysDown[e.key] != null) keyIsDown[e.key] = true
};

document.onkeyup = async function(e) {
    if(whileKeysDown[e.key] != null) keyIsDown[e.key] = false
};

setInterval(function () {
    Object.keys(whileKeysDown).forEach(key => {
        if(keyIsDown[key]) {
            whileKeysDown[key]()
        }
    });
}, 1);