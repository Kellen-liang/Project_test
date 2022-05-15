//更新数据存储至本地内存方法
const update = (inputArray) => {
    const userData = [];
    for (let i = 0; i < inputArray.length; i++) {
        userData[i] = inputArray[i].value;
    }
    localStorage.setItem('userData', JSON.stringify(userData));
    // console.log(userData);
}

//获取背景
const body = document.querySelector('body');
const lagecyBg = localStorage.getItem('background');
//判定本地缓存是否存放对应背景的键值对，有与没有的操作如下
body.className = lagecyBg ? lagecyBg : "bg-default";


/**@type HTMLInputElement*/
const userData_input = document.querySelector(".mine-info-form").querySelectorAll("input");
const submit = document.querySelector('#submit');

//获取默认值
const updateInfo = JSON.parse(localStorage.getItem('updateInfo'));
userData_input[0].value = updateInfo[0];
userData_input[1].value = updateInfo[2];
userData_input[2].value = updateInfo[1];
userData_input[3].value = updateInfo[3];
userData_input[4].value = updateInfo[5];
userData_input[5].value = updateInfo[7];
userData_input[6].value = updateInfo[4];
userData_input[7].value = updateInfo[8];
/**
 * input updateInfo
    0 - 0
    1 - 2
    2 - 1
    3 - 3
    4 - 5
    5 - 7
    6 - 4
    7 - 8  
 * */


submit.addEventListener('click', function () {
    update(userData_input);
});

// console.log(localStorage);
