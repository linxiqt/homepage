<?php

$jsonFile = 'data.json';
if (!file_exists($jsonFile)) {
    $defaultData = [
        "today_count" => 0,
        "last_date" => date("Y-m-d"),
        "total_count" => 0
    ];
    file_put_contents($jsonFile, json_encode($defaultData, JSON_PRETTY_PRINT));
}
$jsonData = file_get_contents($jsonFile);
$data = json_decode($jsonData, true);


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>熙の小站 - API/统计</title>
    <link rel="stylesheet" href="css/index.css">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>

<body>
    <div class="stats">
        <div class="stat">
            <div class="title"><svg data-v-7709f3c5="" stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="30" width="30">
                    <path fill="#D9D9D9" d="M737 438.6c-9.6 15.5-21.1 30.7-34.4 45.6a73.1 73.1 0 0 1-51 24.4 73.36 73.36 0 0 1-53.4-18.8 74.01 74.01 0 0 1-24.4-59.8c3-47.4-12.4-103.1-45.8-165.7-16.9-31.4-37.1-58.2-61.2-80.4a240 240 0 0 1-12.1 46.5 354.26 354.26 0 0 1-58.2 101 349.6 349.6 0 0 1-58.6 56.8c-34 26.1-62 60-80.8 97.9a275.96 275.96 0 0 0-29.1 124c0 74.9 29.5 145.3 83 198.4 53.7 53.2 125 82.4 201 82.4s147.3-29.2 201-82.4c53.5-53 83-123.5 83-198.4 0-39.2-8.1-77.3-24-113.1-9.3-21-21-40.5-35-58.4z"></path>
                    <path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0 0 58.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0 0 12.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0 0 24.4 59.8 73.36 73.36 0 0 0 53.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z"></path>
                </svg>今日访问</div>
            <p><?php echo htmlspecialchars($data['today_count']); ?>次</p>
        </div>
        <div class="stat">
            <div class="title"><svg data-v-7709f3c5="" stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="30" width="30">
                    <path fill="#333" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                    <path fill="#E6E6E6" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm176.5 509.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"></path>
                    <path fill="#333" d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.6-3.6 1.8-8.6-1.8-11.1z"></path>
                </svg>总计访问</div>
            <p><?php echo htmlspecialchars($data['total_count']); ?>次</p>
        </div>
        <div class="stat">
            <div class="title"><svg data-v-7709f3c5="" stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="30" width="30">
                    <path fill="#D9D9D9" d="M148.2 674.6zm106.7-92.3c-25 25-38.7 58.1-38.7 93.4s13.8 68.5 38.7 93.4c25 25 58.1 38.7 93.4 38.7 35.3 0 68.5-13.8 93.4-38.7l59.4-59.4-186.8-186.8-59.4 59.4zm420.8-366.1c-35.3 0-68.5 13.8-93.4 38.7l-59.4 59.4 186.8 186.8 59.4-59.4c24.9-25 38.7-58.1 38.7-93.4s-13.8-68.5-38.7-93.4c-25-25-58.1-38.7-93.4-38.7z"></path>
                    <path d="M578.9 546.7a8.03 8.03 0 0 0-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2a199.45 199.45 0 0 0-58.6 140.4c-.2 39.5 11.2 79.1 34.3 113.1l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7-24.9-24.9-38.7-58.1-38.7-93.4s13.7-68.4 38.7-93.4l59.4-59.4 186.8 186.8-59.4 59.4zm476-620.3l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4-186.8-186.8 59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7s68.4 13.7 93.4 38.7c24.9 24.9 38.7 58.1 38.7 93.4s-13.8 68.4-38.7 93.4z"></path>
                </svg>网站/接口数量</div>
            <p>6个</p>
        </div>
        <div class="stat">
            <div class="title"><svg data-v-7709f3c5="" stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="30" width="30">
                    <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                </svg>用户数量</div>
            <p>739个</p>
        </div>
    </div>

    <div class="api-list">
        <h2>网站/接口列表</h2>
        <div class="api-cards">
            <a href="/img.php" class="api-card">
                <img src="https://api.gmya.net/Api/DmImg?format=image&appkey=b7a782741f667201b54880c925faec4b&DouYinHot" alt="接口图片">
                <div class="overlay">
                    <h3>图床接口</h3>
                    <p>这是接口的简要介绍，描述接口的功能。</p>
                </div>
            </a>
            <a href="https://api.yilx.net/img/pc" class="api-card">
                <img src="https://api.yilx.net/img/pc" alt="接口图片">
                <div class="overlay">
                    <h3>图片API pc端</h3>
                    <p>这是接口的简要介绍，描述接口的功能。</p>
                </div>
            </a>
            <a href="https://api.yilx.net/img/mobi" class="api-card">
                <img src="https://api.yilx.net/img/mobi" alt="接口图片">
                <div class="overlay">
                    <h3>图片API 手机端</h3>
                    <p>这是接口的简要介绍，描述接口的功能。</p>
                </div>
            </a>
            <a href="https://api.yilx.net/img/pm" class="api-card">
                <img src="https://api.yilx.net/img/pm" alt="接口图片">
                <div class="overlay">
                    <h3>图片API 通用</h3>
                    <p>这是接口的简要介绍，描述接口的功能。</p>
                </div>
            </a>
            <a href="https://yilx.net" class="api-card">
                <img src="https://api.yilx.net/image/back.jpeg" alt="接口图片">
                <div class="overlay">
                    <h3>个人主页</h3>
                    <p>这是接口的简要介绍，描述接口的功能。</p>
                </div>
            </a>
            <a href="https://blog.yilx.net" class="api-card">
                <img src="https://api.yilx.net/image/back.jpeg" alt="接口图片">
                <div class="overlay">
                    <h3>个人博客</h3>
                    <p>这是接口的简要介绍，描述接口的功能。</p>
                </div>
            </a>
        </div>
    </div>
</body>

</html>