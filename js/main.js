/*************** MENU DESPLEGABLE ***************/
$(document).ready(function() {
    $menu = $('.nav').find('ul').find('li');

    $menu.hover(function() {
        $(this).children('ul').stop();
        $(this).children('ul').slideDown();
    }, function() {
        $(this).children('ul').stop();
        $(this).children('ul').slideUp();
    });
});

/*************** CARRUSEL ***************/
$(document).ready(function(){
    var imgItems = $('.slider li').length; // Numero de Slides
    var imgPos = 1;

    // Agregando paginacion
    for(i = 1; i <= imgItems; i++){
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
    } 

    $('.slider li').hide(); // Ocultanos todas las imagines
    $('.slider li:first').show(); // Mostramos la primera imagen
    $('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

    // Ejecutamos todas las funciones
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);


    setInterval(function(){
        nextSlider();
    }, 4000);

    function pagination(){
        var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

        $('.slider li').hide(); // Ocultamos todos los slides
        $('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

        // Dandole estilos a la paginacion seleccionada
        $('.pagination li').css({'color': '#858585'});
        $(this).css({'color': '#CD6E2E'});

        imgPos = paginationPos;

    }

    function nextSlider(){
        if( imgPos >= imgItems){imgPos = 1;} 
        else {imgPos++;}

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

        $('.slider li').hide(); // Ocultamos todos los slides
        $('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

    }

    function prevSlider(){
        if( imgPos <= 1){imgPos = imgItems;} 
        else {imgPos--;}

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

        $('.slider li').hide(); // Ocultamos todos los slides
        $('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
    }


});

/*************** COOKIES ***************/

function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1){
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1){
        c_value = null;
    }else{
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1){
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}

function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

if(getCookie('usuarioRegistrado')!="1"){
    //document.getElementById("barraaceptacion").style.display="block";
}
function PonerCookie(){
    setCookie('usuarioRegistrado','1',365);
    document.getElementById("barraaceptacion").style.display="none";
}

/*************** TRANSICIÓN FADE ***************/
$(document).ready(function() {

    $("body").css("display", "none");
    $("body").fadeIn(2000);

    $("a.transicion").click(function(event){
        event.preventDefault();
        linkDestino = this.href;
        $("body").fadeOut(1000, redireccionarPag);		
    });

    function redireccionarPag() {
        window.location = linkDestino;
    }

});

/**************** CONTADOR **************************/
var a=1; 
var b=2;
var c=5;
var d=4;
var e=6;
var f=0;
var g=1;
var h=3;
var i=5;
var j=7;
var k=0;
var l=2;
var m=1;
var n=5;
var o=2;
var p=0;
    
    document.getElementById("contCorazon").innerHTML=a;
    $('#corazon').click(function(){ // primera forma
            a+=1;
            stop(a);
        document.getElementById("contCorazon").innerHTML=a;
    });
    document.getElementById("contEstrella").innerHTML=b;
    $('#estrella').click(function(){ // primera forma
            b+=1;
            stop(b);
        document.getElementById("contEstrella").innerHTML=b;
    });

document.getElementById("contCorazon2").innerHTML=c;
    $('#corazon2').click(function(){ // primera forma
            c+=1;
            stop(c);
        document.getElementById("contCorazon2").innerHTML=c;
    });
    document.getElementById("contEstrella2").innerHTML=e;
    $('#estrella2').click(function(){ // primera forma
            e+=1;
            stop(e);
        document.getElementById("contEstrella2").innerHTML=e;
    });

document.getElementById("contCorazon3").innerHTML=d;
    $('#corazon3').click(function(){ // primera forma
            d+=1;
            stop(d);
        document.getElementById("contCorazon3").innerHTML=d;
    });
    document.getElementById("contEstrella3").innerHTML=f;
    $('#estrella3').click(function(){ // primera forma
            f+=1;
            stop(f);
        document.getElementById("contEstrella3").innerHTML=f;
    });

document.getElementById("contCorazon4").innerHTML=g;
    $('#corazon4').click(function(){ // primera forma
            g+=1;
            stop(g);
        document.getElementById("contCorazon4").innerHTML=g;
    });
    document.getElementById("contEstrella4").innerHTML=h;
    $('#estrella4').click(function(){ // primera forma
            h+=1;
            stop(h);
        document.getElementById("contEstrella4").innerHTML=h;
    });

document.getElementById("contCorazon5").innerHTML=i;
    $('#corazon5').click(function(){ // primera forma
            i+=1;
            stop(i);
        document.getElementById("contCorazon5").innerHTML=i;
    });
    document.getElementById("contEstrella5").innerHTML=j;
    $('#estrella5').click(function(){ // primera forma
            j+=1;
            stop(j);
        document.getElementById("contEstrella5").innerHTML=j;
    });

document.getElementById("contCorazon6").innerHTML=k;
    $('#corazon6').click(function(){ // primera forma
            k+=1;
            stop(k);
        document.getElementById("contCorazon6").innerHTML=k;
    });
    document.getElementById("contEstrella6").innerHTML=l;
    $('#estrella6').click(function(){ // primera forma
            l+=1;
            stop(l);
        document.getElementById("contEstrella6").innerHTML=l;
    });

document.getElementById("contCorazon7").innerHTML=m;
    $('#corazon7').click(function(){ // primera forma
            m+=1;
            stop(m);
        document.getElementById("contCorazon7").innerHTML=m;
    });
    document.getElementById("contEstrella7").innerHTML=n;
    $('#estrella7').click(function(){ // primera forma
            n+=1;
            stop(n);
        document.getElementById("contEstrella7").innerHTML=n;
    });

document.getElementById("contCorazon8").innerHTML=o;
    $('#corazon8').click(function(){ // primera forma
            o+=1;
            stop(o);
        document.getElementById("contCorazon8").innerHTML=o;
    });
    document.getElementById("contEstrella8").innerHTML=p;
    $('#estrella8').click(function(){ // primera forma
            p+=1;
            stop(p);
        document.getElementById("contEstrella8").innerHTML=p;
    });

