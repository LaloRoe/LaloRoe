---
title: Excel Intermedio para Analístas
authors:
  - Eduardo Ortiz Romero
---
# Texto a columnas
Nuestro texto se encuentra separado por asteriscos
![[Pasted image 20231212101432.png]]
Para separarlo en columnas, seleccionamos nuestros datos, luego en la pestaña *Datos* en la sección *Herramientas de datos* damos clic en Texto en columnas
![[Pasted image 20231212101555.png]]
Podemos separar de manera *Delimitada* o *De un ancho fijo*, en nuestro caso seleccionamos la primera opción
![[Pasted image 20231212101750.png]]
Luego seleccionamos el tipo de separador de nuestros datos, en nuestro caso seleccionamos la opción de *otro* y asterisco
![[Pasted image 20231212102102.png]]
En la *Vista previa de los datos* ya aparecen divididos
![[Pasted image 20231212102210.png]]
Luego podemos seleccionar cada columna y establecer el formato de los datos
![[Pasted image 20231212102404.png]]
En nuestro caso no haremos cambios. Cuando damos *Finalizar* los datos se ordenan de manera correcta
![[Pasted image 20231212102505.png]]
# Eliminar duplicados 
Seleccionamos nuestros datos, en la sección de *Datos* en el apartado de *Herramientas* encontramos la opción *Borrar duplicados*
![[Pasted image 20231212120122.png]]
Nos aparece una ventana donde podemos elegir las columnas donde queremos verificar que existan duplicados
![[Pasted image 20231212120315.png]]
En nuestro ejemplo se encontraron 32 valores duplicados y se eliminaron
![[Pasted image 20231212120419.png]]
# Validación de datos
Si  vamos a ingresar datos a nuestra tabla queremos que estos mantengan el mismo formato, para validar el formato haremos lo siguiente. En la sección de *Datos* en el apartado de *Herramientas* vamos a encontrar la opción *Validación de datos*
![[Pasted image 20231212124409.png]]
Al hacer clic nos aparece una ventana con tres pestañas, en la pestaña de *Configuración* vamos a seleccionar el *Criterio de validación* que por defecto está en *Cualquier valor*, sin embargo tenemos más opciones
![[Pasted image 20231212125308.png]]
También podemos incluir un *Mensaje de entrada* que al dar clic en la celda nos de unas instrucciones de cómo se debe llenar
![[Pasted image 20231212125428.png]]
Del mismo modo podemos crear un mensaje de error al introducir el formato incorrecto
![[Pasted image 20231212125511.png]]
# Formato condicionado
Vamos a colocar una condición para el formato de visualización de nuestros datos, para esto vamos a seleccionar nuestros datos, iremos a la sección de *Inicio* en el apartado de *Estilos* encontraremos la opción *Formato condicional*
![[Pasted image 20231212161516.png]]
podemos seleccionar distintas opciones
![[Pasted image 20231212161705.png]]
también podemos crear una nueva regla dando clic en *Nueva regla*
![[Pasted image 20231212161802.png]]
Podemos administrar las reglas que ya establecimos dando clic en la opción *Administrar reglas*
![[Pasted image 20231212162204.png]]
Podemos cambiar la hoja en *Mostrar reglas de formato para*, por defecto esta en *Selección actual* 
![[Pasted image 20231212162305.png]]
# Analizar datos automáticamente
Seleccionamos nuestros datos, luego en la ficha de *Inicio*, en la sección de *Análisis* damos clic en *Analizar datos*
![[Pasted image 20231212164600.png]]
nos aparece una sección en el lado derecho 
![[Pasted image 20231212164633.png]]
podemos elegir *Mover* y *Cambiar de tamaño*
![[Pasted image 20231212164803.png]]
seleccionemos *Mover*, esto nos va a permitir moverla y cambiarla de tamaño
![[Pasted image 20231212165002.png]]
al dar clic en el engrane podemos elegir los campos que más nos interesen
![[Pasted image 20231212165040.png]]
# Tablas dinámicas
Seleccionamos nuestra tabla, en la ficha *Insertar* vamos al grupo de tablas seleccionamos *Tablas dinámicas*
![[Pasted image 20231212170421.png]]
Nos arroja una ventana donde podemos elegir el rango, en dónde deseamos colocar la tabla dinámica (se recomienda en una nueva hoja de cálculo) y si queremos analizar varias tablas (en nuestro ejemplo no lo seleccionaremos)
![[Pasted image 20231212170500.png]]
automáticamente nos crea una nueva hoja en nuestro libro de Excel, en ella nos aparece un cuadro que dice *Tabla dinámica* y otro de los *Campos de tabla dinámica*
![[Pasted image 20231212170944.png]]
Por ejemplo, podemos visualizar las ventas totales por fecha, para esto arrastramos *Fecha* a *Filas* y *Ventas totales* a *Valores* y cerramos la ventana
![[Pasted image 20231212171628.png]]
podemos modificar el formato de manera manual.
![[Pasted image 20231212171738.png]]
Al seleccionar la tabla dinámica nos aparecen las fichas *Analizar tabla dinámica* y *Diseño*
![[Pasted image 20231212171820.png]]
Para ver de nuevo la lista de *Campos* vamos a la ficha de *analizar tabla dinámica* y seleccionamos *Mostrar* -> *Lista de campos*
![[Pasted image 20231212171953.png]]
Podemos modificar el campo de valor, por defecto nos da suma
![[Pasted image 20231212172047.png]]
seleccionamos *Configuración de campo de valor*
![[Pasted image 20231212172135.png]]
en la pestaña de *Mostrar valores como* nos va distintas de opciones de cómo se van a mostrar
![[Pasted image 20231212172256.png]]
seleccionemos por ejemplo *% del total de columnas* esto nos dará el porcentaje que representa cada mes
![[Pasted image 20231212172410.png]]
al dar clic derecho sobre los valores nos da las mismas opciones de la *Configuración de campo de valor* que son *Resumir valores por* y *Mostrar valores por*
![[Pasted image 20231212172535.png]]
podemos ver al mismo tiempo el *% de total de columnas* y la *Suma* de *Ventas totales* arrastrando *Ventas totales* a *Valores* y configurando todo de nuevo, podemos agregar más campos de valores
![[Pasted image 20231212173212.png]]
Podemos agregar también un filtro, por ejemplo por *Utilidad*, nos aparece una celda de filtros
![[Pasted image 20231212173659.png]]
Si queremos dar un diseño a nuestra tabla dinámica, nos dirigimos a la ficha de *Diseño* 
# Campos calculados
Seleccionamos nuestra tabla dinámica, en la ficha de *Analizar tabla dinámica* buscamos la sección *Cálculos*, en *Campos, elementos y conjuntos* seleccionamos *Campo calculado* 
![[Pasted image 20231212182933.png]]
nos da la ventana *Insertar campo calculado*
![[Pasted image 20231212183041.png]]
para ejemplificar calculemos el costo de los vienes vendidos **COGS**, se calcula como las *Ventas totales* menos la *Utilidad*
![[Pasted image 20231212183427.png]]
agrega la columna de *Suma de COGS*
![[Pasted image 20231212183737.png]]
# Gráficos dinámicos
Seleccionamos los datos, luego vamos a la ficha de *Insertar* y en el apartado de *Gráficos* podemos encontrar la opción *Gráfico dinámico*
![[Pasted image 20231213002712.png]]
Nos da la siguiente ventana, se recomienda crear la gráfica dinámica en una nueva hoja de cálculo
![[Pasted image 20231213002811.png]]
para nuestro ejemplo no vamos a analizar varias tablas
![[Pasted image 20231213003021.png]]
Elegimos como categoría el nombre de los vendedores y los valores de las ventas de enero y febrero, obtenemos lo siguiente
![[Pasted image 20231213003317.png]]
En los botones de la gráfica podemos filtrar la información, por ejemplo por nombre de vendedor
![[Pasted image 20231213003407.png]]
también nos podemos ir a la ficha de *Análisis de Gráfico dinámico* para *Insertar una segmentación de datos* 
![[Pasted image 20231213003551.png]]
Seleccionamos filtrar por *Nombre* y nos da la siguiente ventana con el nombre de los vendedores, al seleccionar uno automáticamente filtrará la tabla y la gráfica
![[Pasted image 20231213003806.png]]
también podemos *Actualizar* y *Cambiar el origen de datos*
![[Pasted image 20231213003906.png]]


