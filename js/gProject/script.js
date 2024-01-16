const searchInput = document.getElementById("search-input");
const showSearchResult = () => {
    let searchWord = searchInput.value;
    document.getElementById("main_frame").src = searchWord;
    searchWord="";
};
const enterKey = (event) => {
    if (event.code === "Enter"){
        showSearchResult();
    }
};
searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
});

let nowZoom = 100;
//화면 크기 축소
function zoomOut(){
    nowZoom = nowZoom - 10;

    // 화면크기 최대 축소율 70%
    if (nowZoom <= 70){
        nowZoom = 70;
    }
    zooms();
}

//화면 크기 확대
function zoomIn(){
    nowZoom+=20;

    //화면크기 최대 확대율 200%
    if (nowZoom >= 200){
        nowZoom = 200;
    }
    zooms();
}

//원래 화면 크기 되돌리기
function zoomReset(){
    nowZoom = 100;
    zooms();
}

function zooms(){
    document.getElementById("main_frame").style.transform = "scale("+nowZoom + "%)";
    if(nowZoom == 70){
        alert("더 이상 축소 X");
    }
    if(nowZoom == 200){
        alert("더 이상 확대 X");
    }
}