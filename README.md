# 2 Bike or not 2 Bike

Este sitio web tiene como fundamento una SPA (Single Page Application) para un ecommerce. El ecommerce comprende la venta de bicicletas y productos de accesorios de las mismas.

Para realizar dicho sitio, se utilizó React y dentro de las librerías correspondientes, react-router-dom, semantic-ui-css y semantic-ui-react. Del mismo modo se utilizó firebase como base de datos y su librería correspondiente a fin de conectar el front con la base de datos.

<h2>Estructura del Sitio</h2>

Sitio web de inicio con una barra de navegación que incluye un logo, categorías de productos y un carrito. El logo redirige a la página de inicio mientras que cada categoría mostrará los productos correspondientes a cada categoría. Por su parte el carrito posee su propio Widget de forma independiente del resto de la estructura de la barra de navegación. Dicho Widget únicamente se habilitará cuando el usuario agregue el primer producto. Asimismo, el sitio presenta un Footer con información relevante del sitio y demás cuestiones relativasa los productos.

<h2>Estructura de las Páginas</h2>
La estructura consta de dos grandes vertientes, en primer lugar el denominado "Item List" y en segundo lugar los "Item Detail". Los Item List buscan detallar los productos a ofrecer. Por su parte los Item Detail buscan dar respuesta al item ya seleccionado por el usuario para agregar al carrito.

<h3>Item List</h3>
Dentro de este punto se encuentra el Item List Container que posee visualiza todas los productos al usuario mediante el uso de una API de Mercado Libre. Asimismo, el resultado de la API es enviado a ItemList el cual, mediante el uso de una función MAP, muestra los productos. Esta última función, mostrar los productos, lo realiza una Card denominada Item cuya base se sustenta en "Semantic Ui React".

<h3>Item Detail</h3>
Este último punto tiene por objetivo visualizar al usuario el producto por él seleccionado a fin de que el mismo ingrese en el carrito. Esta actividad se realiza mediante la toma de información del id del producto seleccionado. La función "fetch" realiza una búsqueda del parámetro ingresado en la API de Mercado Libre para devolver como resultado los datos del producto seleccionado. Toda esta función se realiza en el Item Detail Container. La información enviada por la API de Mercado Libre, se remite al Item Detail quien muestra de forma individual el producto seleccionado. A la muestra del producto se le suman tres elementos que permiten seleccionar la cantidad de productos a adquirir. Estos elementos (botón de agregar, botón de quitar y un contador) poseen como limitantes la cantidad de productos en stock (determinado por la cantidad de stock indicado en la base datos de Firebase) y el número 1.

<h3>Cart</h3>
El Cart permite visualizar por medio de una tabla todos los productos seleccionados por el usuario junto con la cantidad seleccionada y el monto total por cada producto. Asimismo, se le informa al usuario la cantidad total de productos y el monto total del mismo. El Cart permite al usuario: borrar cada uno de los item agragados al carrito, borrar todos los productos, continuar comprando (el cual remite al usuario al Home) y finalizar la compra el cual traslada al usuario al formulario final de compra.

<h3>Form</h3>
El formulario permite al usuario completar con sus datos (nombre y apellido, telefono y mail) para luego remitir dicha información a una base de datos de firebase. Previo envío de los datos, el front valida si los mails ingresados (se solicita ingresar el mail en dos oportunidades, una para su ingreso y otra para validación) y en caso de no serlo, le informa dicha situación al usuario. En caso de que los mails resulten válidos, se enviará la información (productos seleccionados y la información del usuario) a la base de datos de firebase y el usuario visualizará por front, el número de ID de la operación el cual resulta ser idéntico al número de ID de la entrada de firebase.

<h2>Vistas</h2>
El sitio presenta como vistas "Home" la cual busca mostrar los productos que luego se verán en cada una de las categorías. Para ello utiliza el Item List Container a fin de visualizar los productos disponibles.

<h2>Context</h2>
A los fines de evitar la duplicidad de comandos y con el objetivo de simplificar la reacción y lectura de código, existen ciertos contextos que acompañan todo el sitio. Dichas funciones resultan ser: addToCart (agrega al carrito el producto, previa verificación si el mismo ya se encuentra en el carrito), removeItem (remueve el producto indicado del carrito), clear (elimina todos los productos del carrito), totalQuantity (regresa la cantidad total de productos en el carrito), totalPrice (devuelve el monto total de los productos seleccionados en el carrito).



