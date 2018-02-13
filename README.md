# Formulario para la página NeedArt!

En esta práctica vamos a crear el campo tarjeta de crédito, una lista de paises generado con DOM del formulario y vamos a generar una caja de comentarios, dando a posibilidad de comentar si estas logeado en la página. Todo esto lo hemos integrado a la página utilizando DOM.
[Archivo dom.js](js/dom.js).

## 1.Tarjeta de Crédito:
Este campo solo podía aparecer únicamente cuando se indique una dirección y el país, para ello realizmos una función que comprueba que los campos de dirección y país no estén vacíos, si esto se cumple crea un input con un atributo type igual a number. Si en un principio se rellena pero se borran campos hacemos otra comprobación para que el input desaparezca.

## 2.Creación del input pais:
Para que la página y el registro sean totalmente inclusivos creamos un select con todos los paises del mundo generados por una función que recorre con un forEach un array con todos los países del mundo y para cada país crea una etiqueta option con el atributo value igual al país y lo enlaza con el select del HTML.

## 3.Creación de comentarios:
En la página de detalle de cada foto hemos creado un div que contiene los comentarios que los usuarios logeados pueden hacer de cada foto o dibujo. Se han generado dos comentarios fijos en cada página y una vez que el usuario se logea aparece un input donde puede escribir el comentario y cuando hace click en enviar se llama a la función muestraComentario(). También en la misma página hemos puesto un icono de comentarios que tiene un contador con el número de comentarios que se han hecho en la página.

## 4.Anotaciones:
Hemos quitado la mayoría de los errores en el archivo dom.js con JSLint de brackets, pero nos han quedado 4 errores que no conseguimos resolver. 
También hemos comprimido todos los archivos js utilizando uglify.
En la página principal no se va a observar el sumatorio de los comentarios, ya que estos desaparecen al cambiar de pestaña o al recargar la página.


#### Autoras


 **Gema de la Fuente Romero** - [Github](https://github.com/Gema-de-la-Fuente)
 **María Villalobos Martín** - [Github](https://github.com/mariavm6)