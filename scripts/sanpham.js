const productLists = document.getElementsByClassName("sanpham");
const buttonLoadMores = [...document.querySelectorAll(".nutxemthem")];

[...productLists].forEach((product, productIndex) => {
    const osps = product.querySelectorAll(".osp");
    const buttonLoadMore = buttonLoadMores[productIndex];
    let isShow = false;
    [...osps].splice(4, 8).forEach((osp) => {
        osp.style = `display: none`;
    });
    buttonLoadMore.addEventListener("click", () => {
        isShow = !isShow;
        [...osps].splice(4, 8).forEach((osp) => {
            osp.style = `display: ${isShow ? "flex" : "none"}`;
        });
        buttonLoadMore.querySelector(".xemthem").textContent = isShow
            ? `Ẩn bớt`
            : "Xem thêm";
    });
});
