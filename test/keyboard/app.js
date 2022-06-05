var i = 0

whileKeyDownDo("q", () => {
    i++
    document.getElementById("counter").textContent = i
})
whileKeyDownDo("w", () => {
    i--
    document.getElementById("counter").textContent = i
})