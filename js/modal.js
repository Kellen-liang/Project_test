
export const modalBtn = () => {

    const content = document.querySelector('.content');
    console.log(content);
    /**@tyle HTMLDivElement */
    const item = content.querySelector('.item');
    /**@tyle HTMLDivElement */
    const modalContainer = document.querySelector('.modal-container');
    const speedClose = modalContainer.querySelector('.my-modal-head > button');
    /**@tyle HTMLDivElement */
    const speedVlaue = modalContainer.querySelector('.my-modal-body > .speeding > span');

    //显示modalContainer
    modalContainer.classList.add('show-modal');
    speedClose.onclick = () => {
        modalContainer.classList.remove('show-modal');
        console.log(item);
        if(speedVlaue.innerHTML === '100%'){
            item.classList.add('changebgcolor');
        }
        else{
            item.classList.remove('changebgcolor');
        }
    }

}

export function changeWidth(e) {
    /**@tyle HTMLDivElement */
    const outSpeeding = document.querySelector('.speed > .out-speeding');
    /**@tyle HTMLDivElement */
    const modalContainer = document.querySelector('.modal-container');
    /**@tyle HTMLDivElement */
    const speedRmove = modalContainer.querySelector('.my-modal-body > .speeding > .speed-remove');
    /**@tyle HTMLDivElement */
    const speedVlaue = modalContainer.querySelector('.my-modal-body > .speeding > span');
    /**@tyle HTMLDivElement */
    const newSpeedVlaue = e.target.querySelector('span').innerHTML;   
    if (e.target.className !== 'speeding') {
        return
    }
    
    const item = document.querySelector('.itme');
    console.log(item);
    // console.log(speedVlaue);
    const newWidth = e.target.dataset.widthIndex;
    console.log(newWidth);
    speedRmove.setAttribute("id",newWidth);
    outSpeeding.setAttribute("id",newWidth);
    speedVlaue.innerHTML = newSpeedVlaue;
}



