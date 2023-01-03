document.querySelector(".burger-menu-icon").addEventListener("click", function () {
    document.querySelector(".burger-menu-icon").classList.toggle("active")
    document.querySelector(".burger-menu").classList.toggle("active-menu")
})

document.querySelector(".set-purpose").addEventListener("click", function () {
    document.querySelector(".search-item-content-1").classList.toggle("active-1")
    document.querySelector(".search-item-img-1").classList.toggle("active-img-1")
})
document.querySelector(".set-location").addEventListener("click", function () {
    document.querySelector(".search-item-content-2").classList.toggle("active-2")
    document.querySelector(".search-item-img-2").classList.toggle("active-img-2")
})
document.querySelector(".set-type").addEventListener("click", function () {
    document.querySelector(".search-item-content-3").classList.toggle("active-3")
    document.querySelector(".search-item-img-3").classList.toggle("active-img-3")
})

