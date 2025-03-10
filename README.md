## YILXIY - 二次元风格个人主页

### 访问信息
- **访问地址**: [https://yilx.cc](https://yilx.cc)  
- **讨论Q群**: 955274055

### 核心特性
- **随机语录 & 动态打字**: 每次访问带来新鲜感，提升互动体验。  
- **自建国内API背景**: 加载速度更快，优化用户访问体验。  
- **高可定制化**: 简洁明了，支持个性化调整。  
- **双端适配**: 手机与电脑均支持，搭配精美导航栏。

### 界面预览
| **PC端** | **手机端** |
|:--------:|:----------:|
| ![PC客户端界面预览](20250302202645.jpg) | ![手机客户端界面预览](20250302202657.jpg) |
| *PC客户端主界面* | *手机客户端主界面* |

#### 功能亮点
1. **图床功能**  
   - 地址: [https://你的域名/api/img.php](https://你的域名/api/img.php)  
   - 快速上传与分享图片，方便实用。

2. **访问量统计**  
   - 在需要统计的页面添加以下代码：
     ```html
     <script>
     fetch('https://你的域名/api/add.php')
       .then(response => {
         console.log('统计成功');
       })
       .catch(error => {
         console.error('请求失败:', error);
       });
     </script>