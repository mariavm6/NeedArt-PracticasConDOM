/*--------- LISTA DE PAISES ------------*/
function listaPaises() {
    'use strict';
    var paises = ["", "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia-Herzegovina", "Botsuana", "Brasil", "Brunéi	Bandar", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Colombia", "Comoras", "Congo", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guinea", "Guinea Ecuatorial", "Guinea-Bisáu", "Guyana", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kosovo", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Taiwán", "Tanzania", "Tayikistán", "Timor", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Vaticano", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];

    var select = document.getElementById("inputPais"),
        option;

    paises.forEach(pais => {
        option= document.createElement("option");
        option.setAttribute("value", pais);
        option.innerHTML = pais;
        select.appendChild(option);
    });
}

window.onload = function () {
    'use strict';
    listaPaises();}




/*--------- COMENTARIOS ------------*/
if(getCookie("login") == "true"){
    var form = document.getElementById("formComent");
    form.style.display = "block";
}

document.getElementById("comentar").addEventListener("click", function(e){
        muestraComentario();
        e.preventDefault();
    
    
});


function muestraComentario(){

    var comentarios = document.getElementById("comentarios");
    var nombre = getCookie("sesion");
    var texto = document.getElementById("caja").value;
    
    var parrafo = document.createElement("p");
    var comentario = document.createTextNode(nombre+": " + texto);
    parrafo.appendChild(comentario);
    comentarios.insertBefore(parrafo, comentarios.childNodes[1]);

};

/*--------- INPUT TARJETA ------------*/

function expandirFormulario(){
    var pais=document.getElementById("inputPais").value;
    var direccion=document.getElementById("inputDirec").value;
    var flag = document.getElementById('expandir').firstChild;
    var select = document.getElementById("expandir");

    if(pais!="" && direccion!="" && flag==null){
        var inputTar = document.createElement("input");
        inputTar.setAttribute("type", Number);
        select.appendChild(inputTar);

    }else if ((pais=='' || direccion=='') && flag!=null) {
        select.removeChild(select.childNodes[0]);
    }
}
/***************CONTADOR MENSAJES ***************/
var z=2; 
    
    document.getElementById("contComent").innerHTML=z;
    $('#comentar').click(function(){ // primera forma
            z+=1;
            stop(z);
       document.getElementById("contComent").innerHTML=z;
    });

    


