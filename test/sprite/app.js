var player = new Sprite(100, 100, 0, 0)
player.setTexture("https://img.itch.zone/aW1nLzYwMzEwMjAuZ2lm/original/tEqJ8C.gif")
player.setParent(document.body)

whileKeyDownDo("z", () => {
    player.addPosition(0, -2)
})
whileKeyDownDo("q", () => {
    player.addPosition(-2, 0)
})
whileKeyDownDo("s", () => {
    player.addPosition(0, 2)
})
whileKeyDownDo("d", () => {
    player.addPosition(2, 0)
})