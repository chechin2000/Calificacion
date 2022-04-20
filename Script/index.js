const submit = document.querySelector(".submit")
const contenedor = document.getElementById("contenedor")
let puntuaciones = document.querySelectorAll(".btn-puntuacion")

let punteo = null;

for (let i=0; i<puntuaciones.length; i++){
	puntuaciones[i].addEventListener("click",()=>{
		punteo = puntuaciones[i].value;
	})
}

submit.addEventListener("click",(e)=>{
	if (punteo != null) {
		contenedor.innerHTML = `<div class="img-thanks center">
                                <img src="images/illustration-thank-you.svg" alt="Thanks">
	                        </div> 
	                        <div class="center">
	                        	<div class="punteo">You selected ${punteo} of 5</div>
	                        </div>	
	                        <div class="txt-white center">
	                        	Thank You!
	                        </div> 
	                        <div class="txt-gray center">
	                        	We appreciate you taking the time to give a rating. 
	                        	If you ever need more support, don't hesitate to get in touch!
	                        </div>`    
    } else {
    	alert("You must select a score😁")
    	e.preventDefault();
    }                                         
})