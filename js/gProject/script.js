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