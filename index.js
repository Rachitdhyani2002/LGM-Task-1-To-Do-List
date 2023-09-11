let inputs=document.getElementById("inp");
let text = document.querySelector(".text");
function AddTask(){
    if(inputs.value==""){
        alert("Please Enter A Task");
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i>X</i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
          newEle.remove();
        }
    }
}