//控制背景图片
const body = document.querySelector('body');
const changeButton = document.querySelector('.change-btn');
const bgImgList = document.querySelector('.bg-img-list');
const lagecyBg = localStorage.getItem('background');
//判定本地缓存是否存放对应背景的键值对，有与没有的操作如下
body.className = lagecyBg ? lagecyBg : "bg-default";

function changeBackgroup() {
    changeButton.classList.toggle("icon-double-angle-down");
    bgImgList.classList.toggle("add-show");
}

//通过代理事件实现
/**@param {MouseEvent} e */
function getIndex(e) {

    if (e.target.nodeName === 'UL') {
        return
    }

    //获取点击对应的DOM（具有设置的data属性）
    console.log(e.target.dataset);
    backGroundImage = e.target.dataset.bgIndex;
    localStorage.setItem('background', backGroundImage);
    body.className = localStorage.getItem('background');
    // body.classList.toggle(e.target.dataset.bgIndex);
    // console.log(e.target.dataset.delIndex)

    //target:触发事件的目标
    //currentTarget:绑定事件的目标
    // console.log("target:",e.target," currentTarget:",e.currentTarget)
}