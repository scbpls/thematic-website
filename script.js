function changeMode(v) {
    var button = document.getElementById("modeButton");
    var img = document.getElementById("modeImg");
    var e = document.getElementsByClassName("mode");
    if (v == 1) {
        button.value = 0;
        //Autor ikony: iconixar (https://www.flaticon.com/authors/iconixar)
        img.src = "./src/moon.png"
        for (i of e) {
            console.log(i);
            i.classList.add("dark");
            i.classList.remove("light");
        }
        
    } else {
        button.value = 1;
        //Autor ikony: Good Ware (https://www.flaticon.com/authors/good-ware)
        img.src = "./src/sun.png"
        for (i of e) {
            i.classList.add("light");
            i.classList.remove("dark");
        }
    }
}
