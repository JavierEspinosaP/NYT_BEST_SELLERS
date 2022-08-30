Para este proyecto, se necesitaba crear una biblioteca con diferentes listas de una API del New York Times, mostrarlas en pantalla 
y poder acceder a cada una de ellas y ver su listado de libros,con un link para poder comprar el mismo en Amazon.

Además, se requería que el usuario pudiese registrarse para poder guardar sus libros favoritos en una vista distinta de la página, 
así como poder subir una foto a su perfil.

Para ello he optado por hacer una división en páginas, con 12 listas cada una, utilizando sólo un HTML y manipulación dinámica del DOM.


![VIEW1](https://user-images.githubusercontent.com/103537170/187094713-931648bd-49b1-4b4c-bbd0-74a9c00fe47a.jpg)


En el header se puede observar el título de la página, así como un formulario de Login, y un acceso también a la página de registro justo abajo.


![VIEW2](https://user-images.githubusercontent.com/103537170/187094723-b1ef1e56-d647-48f0-837d-97d9c8b7e0fd.jpg)


Para acceder al registro pinchamos en “Click here” y entramos en la vista de registro.


![VIEW3](https://user-images.githubusercontent.com/103537170/187094738-f9d2107b-05b9-4d44-938e-35253a60e076.jpg)


Ya en la vista de registro, podemos ingresar nuestros datos y nuestra foto, si las contraseñas coinciden, 
y pasan los requisitos mínimos, nos saltará una alerta de “usuario registrado”.


![VIEW4](https://user-images.githubusercontent.com/103537170/187094753-93b0a6a8-7574-452e-990a-ef606a251940.jpg)


Una vez dentro, el header cambiará y nos mostrará nuestra foto junto con nuestro nombre, 
un acceso a nuestros libros favoritos y el enlace para desloguearnos.


![VIEW9](https://user-images.githubusercontent.com/103537170/187094811-4e2f3e0b-dd60-4ba0-ab35-b0f25ef81111.jpg)


Para añadir un libro a favoritos solo tenemos que entrar en una lista y pinchar en el boton “Add to favorites”, si el libro no se había incluido ya, 
saltará un aviso de “libro guardado”, si ya estaba incluido, dará un mensaje de error.


![VIEW6](https://user-images.githubusercontent.com/103537170/187094816-29835443-91f3-4a17-a682-064612f0d1bd.jpg)


![VIEW7](https://user-images.githubusercontent.com/103537170/187094819-a7a84d18-0f46-4e60-bb4c-a0c0da3098a5.jpg)


Si aún no habíamos añadido ningún libro a favoritos, y entramos en la vista de favoritos, nos saldrá una imagen avisándonos de que aún no hay nada incluido.


![VIEW8](https://user-images.githubusercontent.com/103537170/187094837-da91f417-7efd-4bf0-9ba5-0ce28b2f0ecc.jpg)


Tanto las vistas de las listas como la de libros favoritos, también están estructuradas en páginas cambiando los elementos del DOM cada vez que se interactúa con él, 
de forma que queda mucho más limpio a la vista y dinámico.


Puntos a mejorar / actualmente trabajando en ellos:

 - Añadir GIF de carga.
 - Mejora de responsive para una mejor vista en cualquier dispositivo
 - Añadir favoritos si nos logueamos con Google
 - Si no estamos logueados y clicamos en “Add to favorites”, mostrar un aviso para loguearnos o registrarnos
 - Mejora de estilos en botones de “next”, “previous”, “comeback”
 - Arreglo de posibles bugs de navegación, aún no descubiertos




