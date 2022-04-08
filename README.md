# Proyecto Botlle Sale

Proyecto web dinámico utilizando el lenguaje Java, con solicitudes HTTP con conexión a base de datos y capa de persistencia de la aplicación. Esta aplicación registra en Categorías diferentes productos de botillería. Es capaz de buscar por categoría y por palabra en su campo nombre los productos siguiendo el patrón de diseño MVC configurando las librerías que utilizará el proyecto (JSTL y driver de conexión a base de datos). Para esto usa JSP para desplegar datos de forma dinámica. 
En su parte de vista, utiliza CSS para definir el layout de las vistas y estilizar. Search.js es el archivo de la lógica de despliegue de trabajo de los diferentes endpoints y la estructura en Html.
<br><br>
Librerías incluídas:<br>
spring-boot-starter-data-jpa<br>
spring-boot-devtools<br>
mysql-connector-java<br>
springfox-swagger-ui<br>
springfox-swagger2<br>

### Herramienta de Generación Back📋
Proyecto generado bajo Eclipse IDE for Enterprise Java and Web Developers (includes Incubating components)<br>
Version: 2021-09 (4.21.0)<br>
Tomcat v9.0<br>
Java version 11<br><br>

Se despliegan los métodos del controlador bajo los endpoints:<br>

http://bot.rosta.cloud/api/v1/product<br>
http://bot.rosta.cloud/api/v1/product/search/{name}<br>
http://bot.rosta.cloud/api/v1/product/category/{category}<br><br>

Backend: https://github.com/RodStazzi/bottleback<br>
Observa Swagger https://bot.rosta.cloud/swagger-ui.html<br><br>

### Alojamiento Back📋<br>
Alojado en AWS, Elastic Beanstalk<br><br>

### Herramienta de Generación Front📋<br>
Desarrollo en Javascript Vanilla y Bootstrap 5 con etiquetas semánticas Html5 y lógicas de funciones en .js<br>
La única ruta planteada en su front es index.html, donde ocurren las diferentes funciones.<br><br>

Frontend: https://github.com/RodStazzi/botllesale


### Comenzando 🚀
Su deploy lo puedes ver en el siguiente enlace https://bit.ly/rstazzi50

### Autor ✒️
Rodolfo Stazzi S - Back & Front - <ro.sta>
