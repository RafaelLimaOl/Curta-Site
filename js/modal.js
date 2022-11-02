var modalParent = document.getElementsByClassName("modal_multi");
var modal_btn_multi = document.getElementsByClassName("myBtn_multi");
var span_close_multi = document.getElementsByClassName("close_multi");

function setDataIndex() {

    for (i = 0; i < modal_btn_multi.length; i++){
        modal_btn_multi[i].setAttribute('data-index', i);
        modalParent[i].setAttribute('data-index', i);
        span_close_multi[i].setAttribute('data-index', i);
    }
}


for (i = 0; i < modal_btn_multi.length; i++){
    modal_btn_multi[i].onclick = function() {
    var ElementIndex = this.getAttribute('data-index');
        modalParent[ElementIndex].style.display = "block";
    };
    span_close_multi[i].onclick = function() {
    var ElementIndex = this.getAttribute('data-index');
        modalParent[ElementIndex].style.display = "none";
    };

}

window.onload = function() {

    setDataIndex();
};

