
const droppable = document.querySelector(".droppable");
const list = document.querySelector(".list");
const ball = document.querySelector(".ball");
const filledBall = document.querySelector(".filled-ball");
const hand = document.querySelector(".hand");
const reader = new FileReader();
const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i]
};
let isDragging = 0;
document.addEventListener("dragover", e => {
    e.preventDefault();
    isDragging++;
    if (isDragging === 1) droppable.classList.add("is-dragging")
});
document.addEventListener("drop", e => {
    e.preventDefault();
    isDragging = 0;
    droppable.classList.remove("is-dragging")
});
list.addEventListener("dragover", e => {
    e.preventDefault()
});
const dragtl = gsap.timeline({
    paused: true
});
dragtl.to(ball, {
    duration: 0.4,
    translateX: "286px",
    autoAlpha: 1,
    translateY: "-230px"
}, "drag").to(hand, {
    duration: 0.4,
    transformOrigin: "right",
    rotate: "66deg",
    translateY: "70px",
    translateX: "-20px"
}, "drag");
list.addEventListener("dragenter", e => {
    e.preventDefault();
    droppable.classList.add("is-over");
    dragtl.play()
});
list.addEventListener("dragleave", e => {
    e.preventDefault();
    droppable.classList.remove("is-over");
    dragtl.reverse()
});
list.addEventListener("drop", e => {
    e.preventDefault();
    let sadly = 0;
    const {
        offsetX,
        offsetY
    } = e;
    const {
        files
    } = e.dataTransfer;
    reader.readAsDataURL(files[0]);
    reader.addEventListener("load", () => {
        sadly++;
        if (sadly > 1) return;
        itemMarkup(files[0], reader.result, offsetX, offsetY)
    });
    droppable.classList.remove("is-over")
});
const itemMarkup = (file, url, x, y) => {
    const item = document.createElement("div");
    const id = Math.random().toString(36).substr(2, 9);
    item.classList.add("item");
    item.setAttribute("id", id);
    item.innerHTML = `<div class="item-img"><img src="${url}"/></div><div class="item-details"><div class="item-name">${file.name}</div><div class="item-size">SIZE:${formatBytes(file.size)}</div></div><button class="item-delete"data-id="${id}"></button><button class="item-delete item-url"id="${id}iAjue"onclick="copyToClipboard(this)">复制</button>`;
    list.append(item);
    const itemDeleteBtn = item.querySelector(".item-delete");
    itemDeleteBtn.addEventListener("click", e => {
        e.stopPropagation();
        deleteItem(e)
    });
    const itemImage = item.querySelector(".item-img");
    const imageLeft = itemImage.offsetLeft;
    const imageTop = itemImage.offsetTop;
    const image = document.createElement("div");
    image.classList.add("loaded-image");
    image.innerHTML = `<img src="${url}"/><span><svg fill="#fff"xmlns="http://www.w3.org/2000/svg"viewBox="0 0 330 330"><path d="M165 7.5c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15z"/><path d="M165 262.5c-8.284 0-15 6.716-15 15v30c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-30c0-8.284-6.716-15-15-15z"/><path d="M315 157.5h-60c-8.284 0-15 6.716-15 15s6.716 15 15 15h60c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="M90 172.5c0-8.284-6.716-15-15-15H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h60c8.284 0 15-6.716 15-15z"/><path d="M281.673 55.827c-5.857-5.858-15.355-5.858-21.213 0l-42.427 42.427c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394 3.839 0 7.678-1.464 10.607-4.394l42.427-42.427c5.858-5.858 5.858-15.355 0-21.213z"/><path d="M90.753 225.533L48.328 267.96c-5.857 5.858-5.857 15.355 0 21.213 2.929 2.929 6.768 4.393 10.607 4.393 3.839 0 7.678-1.464 10.607-4.393l42.426-42.427c5.857-5.858 5.857-15.355 0-21.213-5.859-5.858-15.356-5.858-21.215 0z"/><path d="M69.541 55.827c-5.858-5.858-15.355-5.857-21.213 0-5.858 5.858-5.858 15.355 0 21.213l42.426 42.427c2.93 2.929 6.768 4.394 10.607 4.394 3.838 0 7.678-1.465 10.606-4.393 5.858-5.858 5.858-15.355 0-21.213L69.541 55.827z"/></svg></span>`;
    list.append(image);
    let progress = 0;
    const tl = gsap.timeline({
        onComplete: () => {
            image.remove();
            itemImage.style.opacity = 1;
            list.scrollTo(0, list.scrollHeight)
        }
    });
    const itemChildren = item.querySelectorAll("*:not(.item-img)");
    const loadedImg = image.querySelector("img");
    const loadedSVG = image.querySelector("span");
    const iLeft = item.offsetLeft;
    const iTop = item.offsetTop;
    ajax('update.php', file, function (data) {
        data = JSON.parse(data);
        console.log(data);
        if (data.code == 0) {
            const itemurlBtn = item.querySelector(".item-url");
            itemurlBtn.setAttribute('data-url', data.msg);
            itemurlBtn.addEventListener('click', function (e) {
                e.stopPropagation()
            }, false);
        } else {
            alert(data.msg);
            item.querySelector(".item-delete").click()
        }
    });
    tl.set(droppable, {
        pointerEvents: "none"
    }).fromTo(image, {
        autoAlpha: 1,
        width: 20,
        height: 20,
        x: x - 10,
        y: y - 10,
        borderRadius: "50%"
    }, {
        duration: 0.3,
        width: 70,
        height: 70,
        x: x - 30,
        y: y - 30
    }).to(loadedSVG, {
        autoAlpha: 1,
        duration: 0.4
    }, "loading").to(image, {
        rotation: 720,
        duration: 1.2
    }, "loading").to(loadedSVG, {
        autoAlpha: 0,
        duration: 0.4
    }).to(loadedImg, {
        autoAlpha: 1,
        duration: 0.4
    }, "-=.1").to(image, {
        x: imageLeft,
        y: imageTop,
        duration: 0.8,
        autoAlpha: 1,
        width: 60,
        height: 48,
        borderRadius: 4
    }, "-=.5").set(itemImage, {
        autoAlpha: 1
    }).fromTo(itemChildren, {
        autoAlpha: 0,
        y: 30
    }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.06
    }).to(image, {
        autoAlpha: 0,
        duration: 0.3
    }, "-=.2").set(droppable, {
        pointerEvents: "all"
    })
};
const deleteItem = e => {
    const parent = e.target.parentNode;
    const children = parent.querySelectorAll(":scope > *");
    const deletetl = gsap.timeline({
        onComplete: () => {
            parent.remove();
            const item = document.querySelector(".item");
            if (!item) dragtl.reverse()
        }
    });
    deletetl.to(children, {
        autoAlpha: 0,
        y: -10,
        duration: 0.2,
        stagger: 0.1
    }).to(parent, {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        duration: 0.5
    }, "-=.15")
};
var inputObj = document.getElementById("_ef");
list.onclick = function () {
    inputObj.click();
};
inputObj.onchange = function () {
    var file = this.files[0];
    if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            itemMarkup(file, e.target.result, 50, 50)
        };
    }
};

function ajax(url, data, fn) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            fn(xhr.responseText)
        }
    };
    const formData = new FormData();
    formData.append('file', data);
    xhr.open("post", url, true);
    xhr.send(formData)
}

function copyToClipboard(agr) {
    text = document.getElementById(agr.id).getAttribute('data-url');
    if (text.indexOf('-') !== -1) {
        let arr = text.split('-');
        text = arr[0] + arr[1]
    }
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? '成功复制到剪贴板' : '该浏览器不支持点击复制到剪贴板';
        alert(msg)
    } catch (err) {
        alert('该浏览器不支持点击复制到剪贴板')
    }
    document.body.removeChild(textArea)
}