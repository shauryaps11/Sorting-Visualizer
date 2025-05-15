const n=10;
const array=[];

init();

function init(){
    for(let i=0;i<n;i++){
    array[i]=Math.random();
    }
    showBars();
}

function play(){
    bubbleSort(array);
    showBars();
}

function bubblesort(array){
    do{
        var swapped=false;
        for(let i=1;i<array.length;i++){
            if(array[i-1]>[i]){
                swapped=true;
                [array[i-1],array[i]]=[array[i],array[i-1]];
            }
        }
    }while(swapped);
}

function showBars(){
    container.innerHTML="";
for(let i=0;i<array.length;i++){
    const bar=document.createElement("div");
    bar.style.height=array[i]*100+"%";
    bar.classList.add("bar");
    Container.appendChild(bar);
}
}