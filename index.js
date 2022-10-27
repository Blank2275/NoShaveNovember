$(function () {
    $("#main").height($(document).height());
    // $("#main").width($("main").clientWidth() / $("#main").clientHeight());

    renderSidebar($("#sidebar"));

    function renderSidebar(el) {
        let dir = "No-Shave-pics-2022/";
        let images = [
            "IMG-1.jpg",
            "IMG-2.jpg",
            "IMG-3.jpg",
            "IMG-4.jpg",
            "IMG-5.jpg",
            "IMG-6.jpg",
            "IMG-7.jpg",
            "IMG-8.jpg"
        ];
        el.append($(`
        <p>${dir}</p>
        <ul class="sidebar">
            ${(() => {
                let res = "";
                let index = 0;
                for (let image of images) {
                    res += `<div class="sidebar-item" data-sidebar-img-id=${index}>${image} <div>`
                    index++;
                }
                return res;
            })()}
        </ul>
        `))
    }
});