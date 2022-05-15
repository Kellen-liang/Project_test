// Remark-Name
// Phone
// E-mail
// Company
// Location
// Hometown
// Note
// Resume




const update = (inputArray) => {
    const userData = [];
    for (let i = 0; i < inputArray.length; i++) {
        userData[i] = inputArray[i].innerHTML;
    }
    localStorage.setItem('updateInfo', JSON.stringify(userData));
}


//获取背景
const body = document.querySelector('body');
const lagecyBg = localStorage.getItem('background');
//判定本地缓存是否存放对应背景的键值对，有与没有的操作如下
body.className = lagecyBg ? lagecyBg : "bg-default";

const mineInfoList = document.querySelector('.user-info').querySelectorAll('span');
/**@type HTMLAElement*/
const updateInfo = document.querySelector('#updateInfo');
const userName = document.querySelector('.user-1 > h3');
const resume = document.querySelector('.user-1 > p');


// Good Good Study, Day Day Up!
//获取userData数据/初始化数据
const userDate = JSON.parse(localStorage.getItem('userData')) || [
    "Kellen",
    "10086",
    "10086@outlook.com",
    "广东白云",
    "湛江",
    "湛江",
    "靓仔",
    "加油干!",
];
console.log(userDate);
userName.innerHTML = userDate[0];
resume.innerHTML = userDate[7];
mineInfoList[0].innerHTML = userDate[0];
mineInfoList[1].innerHTML = userDate[2];
mineInfoList[2].innerHTML = userDate[1];
mineInfoList[3].innerHTML = userDate[3];
mineInfoList[4].innerHTML = userDate[6];
mineInfoList[5].innerHTML = userDate[4];
mineInfoList[6].innerHTML = userDate[2];
mineInfoList[7].innerHTML = userDate[5];
mineInfoList[8].innerHTML = userDate[7];

updateInfo.onclick = () => {
    update(mineInfoList)
    console.log(localStorage)
}




/**
 * span userinfo
 * 0 - 0
 * 1 - 2
 * 2 - 1
 * 3 - 3
 * 4 - 6
 * 5 - 4
 * 6 - 2
 * 7 - 5
 * 8 - 7 
 * */



