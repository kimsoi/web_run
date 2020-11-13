(() => {
    /*전역변수 쓰지 않기위해 */

    const stepElems = document.querySelectorAll('.step');
    const graphicElms = document.querySelectorAll('.graphic-item');

    for (let i =0; i< stepElems.length; i++){
        // stepElems[i].setAttribute('data-index',i);
        stepElems[i].CDATA_SECTION_NODE.index //index는 이름 지은 것 
    }
})();