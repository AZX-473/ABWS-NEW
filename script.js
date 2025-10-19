console.log("Helo,world!");
console.log("欢迎你，你发现了彩蛋，这本是该网站的调试页面");
alert("感谢你的到来！");
alert("这个网站有个小菜单哦（不在页面中）慢慢找吧！");

const lw=1125/*const 加;会报错  let定义常量*/
function hs(out) {//使用function声明函数
    alert(out);
}


var iid=document.getElementById('box1');
iid.innerHTML="<p>example1</p>"


var jratwa=document.getElementsByTagName('button')[0];
console.log(jratwa);
jratwa.onclick=function () {
    alert("这是一个按钮，你点他干啥");
}


async function copyText() {
    try {
        await navigator.clipboard.writeText("我是傻逼！");
        console.log('文本已复制到剪切板');
    }catch (err) {
        console.error('无法复制文本: ', err);
    }
}

var copy=document.getElementsByTagName('button')[1];
copy.addEventListener('click', async () => {
    await copyText();
});  //异步函数如此调用