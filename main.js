validar_ingreso()
guardar_ingreso()



function guardar_ingreso(){

    let ingreso="si"

    localStorage.setItem("ingreso",ingreso)


}
function validar_ingreso(){
let valida=localStorage.getItem("ingreso")



if(valida==="si"){
    console.log(valida)


}
else{
    alert("Gracias por visitarnos \n Te Esperamos!")
}

}



