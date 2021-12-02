# 2 Bike or not 2 Bike

Este sitio web tiene como fundamento una SPA (Single Page Application) para un ecommerce. El ecommerce comprende la venta de bicicletas y productos de accesorios de las mismas.

Para realizar dicho sitio, se utilizó React y dentro de las librerías correspondientes, react-router-dom, semantic-ui-css y semantic-ui-react.

<h1>Estructura del Sitio</h1>

Sitio web de inicio con una barra de navegación que incluye un logo, categorías de productos y un carrito. El logo redirije a la página de inicio mientras que cada categoría mostrará los productos correspondientes a cada categoría. Por su parte el carrito posee su porpio Widget de forma independiente del resto de la estructura de la barra de navegación.

<h1>Estructura de las Páginas</h1>
La estructura consta de dos grandes vertientes, en primer lugar el denominado "Item List" y en segundo lugar los "Item Detail". Los Item List buscan detallar los productosa ofrecer. Por su parte los Item Detail buscan dar respuesta al item ya seleccionado por el usuario para agregar al carrito.

<h2>Item List</h2>
Dentro de este punto se encuentra el Item List Container que posee visualiza todas los productos al usuario mediante el uso de una API de Mercado Libre. Asimismo, el resultado de la API es enviado a ItemList el cual, mediante el uso de una función MAP, muestra los productos. Esta última función, mostrar los productos, lo realiza una Card denominada Item cuya base se sustenta en "Semantic Ui React".

<h2>Item Detail</h2>
Este último punto tiene por objetivo visualizar al usuario el producto por él seleccionado a fin de que el mismo ingrese en el carrito. Esta actividad se realiza mediante la toma de información del id del producto seleccionado. La función "fetch" realiza una búsqueda del parametro ingresado en la API de Mercado Libre para devolver como resultado los datos del producto seleccionado. Toda esta función se realiza en el Item Detail Container. La información enviada por la API de Mercado Libre, se remite al Item Detail quien muestra de forma individual el producto seleccionado. A la muestra del producto se le suman tres elementos que permiten seleccionar la cantidad de productos a adquirir. Estos elementos (boton de agregar, boton de quitar y un contador) poseen como limitantes la cantidad de productos en stock y el número 0.

<h1>Vistas</h1>
El sitio presenta dos vistas, "Home" y "Category". La primera busca mostrar algunos productos que luego se verán en cada una de las categorías. Para ello utiliza el Item List Container a fin de visualizar los productos disponibles. Por su parte, la vista "Category" toma el dato enviado por Query (usando useParams) y crea el entorno para visualizar dicha categoría seleccionada. Esto último lo realiza, al igual que el "Home" con el Item List Container.