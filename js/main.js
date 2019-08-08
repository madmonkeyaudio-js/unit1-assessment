let input = document.getElementById('input');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let count = document.getElementById('count');

input.value = "1";

plus.addEventListener('click', function(){
    color();
    return count.textContent = parseInt(count.textContent) + parseInt(input.value); 
})

minus.addEventListener('click', function(){
    color();
    return count.textContent = count.textContent - input.value;
})

function color(){
if (parseInt(count.textContent) === 0){
    count.style.color = "black";
}else if(parseInt(count.textContent) < 0){
    count.style.color = "red";
}else {
    count.style.color = "black";

}
}

