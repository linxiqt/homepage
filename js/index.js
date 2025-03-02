// 生成随机的 RGB 颜色值
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

/********************** 文字颜色渐变 **********************/
// 让文字颜色渐变
function textGradient() {
  const motto = document.querySelector(".motto");
  // 每隔一段时间改变颜色
  setInterval(() => {
    motto.style.color = getRandomColor();
  }, 2000); // 每2秒改变一次颜色
}

textGradient();

/********************** 获取一言 **********************/
async function fetchApiData() {
  try {
    // 发起 fetch 请求
    const response = await fetch("https://api.kekc.cn/api/yien");

    // 将响应数据解析为 JSON 格式
    const data = await response.json();
    // console.log("responseresponse", data);
    // 返回解析后的数据
    return data.cn;
  } catch (error) {
    // 捕获并处理请求过程中可能出现的错误
    console.error("Fetch error:", error);
  }
}

/********************** 文字打印效果 **********************/
// 打印文字
async function printTextEffect() {
  // 获取一言文字
  const dynamicsText = await fetchApiData();
  // 获取目标元素
  const element = document.querySelector(".dynamics_text");
  // 清空元素内容
  element.textContent = "";
  // 初始化计数器
  let index = 0;
  // 设置定时器，每隔 100 毫秒添加一个字符
  const timer = setInterval(() => {
    if (index < dynamicsText.length) {
      // 添加一个字符
      element.textContent += dynamicsText[index];
      index++;
    } else {
      // 停止定时器
      clearInterval(timer);
      // 请求计时器
      let timeout = null;
      // 设置定时器，每隔 2 秒后请求一次
      timeout = setTimeout(() => {
        printTextEffect();
        clearTimeout(timeout); // 销毁定时器
      }, 2000);
    }
  }, 100);
}

// 调用函数开始打印效果
printTextEffect();

/********************** 移动端侧边栏事件 **********************/

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// 修改菜单点击处理函数
function handleMenuItemClick() {
  // 获取所有菜单项
  const mobileMenuItems = document.querySelectorAll(".sidebar .menu-item");
  const pcMenuItems = document.querySelectorAll(".header .nav-item");

  // 从 URL 获取当前页面
  const currentPage = window.location.pathname;

  // 设置初始选中状态
  function setInitialActive() {
    const path = currentPage === "/" ? "home" : currentPage.slice(1);
    mobileMenuItems.forEach((item) => {
      if (item.getAttribute("data-page") === path) {
        item.classList.add("active");
      }
    });
    pcMenuItems.forEach((item) => {
      if (item.getAttribute("data-page") === path) {
        item.classList.add("active");
      }
    });
  }

  // 处理菜单点击
  function handleClick(clickedItem, isMobile = false) {
    const page = clickedItem.getAttribute("data-page");
    const items = isMobile ? mobileMenuItems : pcMenuItems;
    const otherItems = isMobile ? pcMenuItems : mobileMenuItems;

    // 移除所有当前类型菜单的选中状态
    items.forEach((item) => item.classList.remove("active"));
    // 移除另一类型菜单的选中状态
    otherItems.forEach((item) => item.classList.remove("active"));

    // 添加选中状态到当前点击项
    clickedItem.classList.add("active");
    // 同步选中状态到另一类型菜单
    const correspondingItem = isMobile ? pcMenuItems : mobileMenuItems;
    correspondingItem.forEach((item) => {
      if (item.getAttribute("data-page") === page) {
        item.classList.add("active");
      }
    });

    // 如果是移动端，关闭侧边栏
    if (isMobile) {
      document.getElementById("sidebar").classList.remove("active");
    }
  }

  // 为移动端菜单添加点击事件
  mobileMenuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      // 如果是外部链接，不阻止默认行为
      if (!item.getAttribute("href").startsWith("#")) {
        return;
      }
      e.preventDefault();
      handleClick(item, true);
    });
  });

  // 为 PC 端菜单添加点击事件
  pcMenuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      // 如果是外部链接，不阻止默认行为
      if (!item.getAttribute("href").startsWith("#")) {
        return;
      }
      e.preventDefault();
      handleClick(item, false);
    });
  });

  // 设置初始选中状态
  setInitialActive();
}

// 页面加载完成后初始化菜单点击事件
document.addEventListener("DOMContentLoaded", handleMenuItemClick);

// 添加点击外部关闭菜单的功能
document.addEventListener("click", (event) => {
  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.querySelector(".sidebar_toggle");

  // 检查点击是否在侧边栏和切换按钮之外
  if (
    !sidebar.contains(event.target) &&
    !sidebarToggle.contains(event.target) &&
    sidebar.classList.contains("active")
  ) {
    sidebar.classList.remove("active");
  }
});

// 阻止菜单内部点击事件冒泡
document.getElementById("sidebar").addEventListener("click", (event) => {
  event.stopPropagation();
});

// 阻止切换按钮点击事件冒泡
document.querySelector(".sidebar_toggle").addEventListener("click", (event) => {
  event.stopPropagation();
});
