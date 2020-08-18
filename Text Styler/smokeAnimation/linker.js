function Value(event){
    var inp = document.querySelector("input")
    var val = inp.value;
    if(val == ""){
        inp.focus()
        alert("BAM!! ENTER your NAME")
        event.preventDefault()
        event.stop.ImmediatePropagation();
    }
    localStorage.setItem("VAL", val.toUpperCase())

    return;
}



var arr = ["one", "two", "three", "four", "five"];

function obj(val){
    var val = val.replace(" ","");
    for(var i = 0; i<5; i++){
        var s = document.getElementById(arr[i]);
        s.innerHTML = val.charAt(i);
    }
    var rem = document.getElementById("rem");
    rem.textContent = val.slice(5, val.length).split("").join(" ");
}


window.addEventListener('load', ()=>{
    const val = localStorage.getItem("VAL");
    if(val){
        obj(val);
    }
    else{
        obj("NAMELESS")
    }
})