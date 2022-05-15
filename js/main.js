import {modalBtn} from "./modal.js"

//添加li属性
/** @type HTMLInputElement */
const inputPlan = document.querySelector('.input-plan')
/**@type HTMLDivElement*/
const content = document.querySelector('.content');

let itemCount = 0;

//回车键函数
export function enterBtn() {
    let e = window.event || arguments.callee.caller.arguments[0];
    if (e.keyCode == 13) {
        addItem();
        itemCount++;
        content.classList.remove('content-bg');
        inputPlan.blur();
        inputPlan.value = "";
        
    }
}

//spend-content函数
export const createDiv = (divClassName) => {
    const div = document.createElement('div');
    div.className = divClassName;
}

//添加Item函数
function addItem() {
    const item = document.createElement('li');
    //① 控制remove按钮的显示效果(enable-remove)
    item.className = 'item enable-remove';
    content.appendChild(item);

    //item容器包含元素的添加以及属性的绑定：
    //speed按钮
    const speed = document.createElement('button');
    const outSpeeding = document.createElement('div');
    speed.className = 'speed';
    outSpeeding.className = 'out-speeding';
    speed.appendChild(outSpeeding);
    speed.onclick = modalBtn;
    item.appendChild(speed);


    //内容存放区域
    const itemContent = document.createElement('div');
    itemContent.innerHTML = inputPlan.value;
    itemContent.className = 'item-text-content';

    //update按钮
    const submit = document.createElement('button');
    submit.className = 'submit';
    const submitIcon = document.createElement('i');
    submitIcon.className = 'icon-ok';

    //remove按钮
    /**@type HTMLButtonElement */
    const remove = document.createElement('button');
    remove.className = 'remove';
    remove.onclick = function removeItem() {
        // this.parent.removeChild(this);
        itemCount--;
        // console.log(itemCount);
        if (itemCount <= 0) {
            content.classList.add('content-bg');
        }
        this.parentNode.parentNode.removeChild(this.parentNode);
    };
    const removeIcon = document.createElement('i');
    removeIcon.className = 'icon-remove';


    item.appendChild(itemContent);
    item.appendChild(submit);
    submit.appendChild(submitIcon);
    item.appendChild(remove);
    remove.appendChild(removeIcon);



    //对item内元素绑定监听事件
    itemContent.addEventListener('click', handleContentClick);

    submit.addEventListener('click', function (e) {
        e.stopPropagation();
        const updateInput = item.querySelector('.update-input');
        const content = createContent(updateInput.value);
        item.prepend(content);
        item.removeChild(updateInput);
        //③ 控制remove按钮的显示效果
        item.classList.add("enable-remove")
        submit.style.display = 'none';
        speed.classList.remove('speed-display-none');
        item.style.border = 'none';
    });



    //鼠标点击对应DOM时处理遗留值
    function handleContentClick(e) {
        e.stopPropagation();
        //记录遗留值
        const legacyValue = this.innerText;
        //调用createUpdateInput函数创建一个input对象，且为其传入Value值
        const updateInput = createUpdateInput(legacyValue);
        //由新创建的input代替旧div
        item.removeChild(this);
        //② 控制remove按钮的显示效果
        item.classList.remove("enable-remove");
        item.prepend(updateInput);
        //自动获取焦点
        updateInput.focus()
        submit.style.display = 'block';
        speed.classList.add('speed-display-none');
        item.style.border = '1px solid #999494';
    }

    //创建一个新的div并添加属性
    const createContent = (itemText) => {
        const newDiv = document.createElement('div');
        newDiv.innerText = itemText;
        newDiv.className = 'item-text-content';
        //为创建的div添加点击事件
        newDiv.onclick = handleContentClick;
        return newDiv;
    };

    //创建以一个新的input并添加属性
    const createUpdateInput = (defaultValue) => {
        const updateInput = document.createElement('input');
        updateInput.className = 'update-input';
        updateInput.value = defaultValue;
        return updateInput;
    };

    content.appendChild(item);


}