---
title: Excel Intermedio para Analístas
authors:
  - Eduardo Ortiz Romero
---
# Texto a columnas
Nuestro texto se encuentra separado por asteriscos
![[hsrh.png]]
Para separarlo en columnas, seleccionamos nuestros datos, luego en la pestaña *Datos* en la sección *Herramientas de datos* damos clic en Texto en columnas
![[drhrdhdrhrdhrdhrdh.png]]
Podemos separar de manera *Delimitada* o *De un ancho fijo*, en nuestro caso seleccionamos la primera opción
![[rdhdrhdrhdrhdrhrdh.png]]
Luego seleccionamos el tipo de separador de nuestros datos, en nuestro caso seleccionamos la opción de *otro* y asterisco
![[rehrehrehreh.png]]
En la *Vista previa de los datos* ya aparecen divididos
![[grgrdgrdgrdgrdgrdg.png]]
Luego podemos seleccionar cada columna y establecer el formato de los datos
![[feafeafeaf.png]]
En nuestro caso no haremos cambios. Cuando damos *Finalizar* los datos se ordenan de manera correcta
![[grdzgrdz.png]]
# Eliminar duplicados 
Seleccionamos nuestros datos, en la sección de *Datos* en el apartado de *Herramientas* encontramos la opción *Borrar duplicados*
![[trdhdrhrd.png]]
Nos aparece una ventana donde podemos elegir las columnas donde queremos verificar que existan duplicados
![[srhsrh.png]]
En nuestro ejemplo se encontraron 32 valores duplicados y se eliminaron
![[brbrdbbrd.png]]
# Validación de datos
Si  vamos a ingresar datos a nuestra tabla queremos que estos mantengan el mismo formato, para validar el formato haremos lo siguiente. En la sección de *Datos* en el apartado de *Herramientas* vamos a encontrar la opción *Validación de datos*
![[dawdwad.png]]
Al hacer clic nos aparece una ventana con tres pestañas, en la pestaña de *Configuración* vamos a seleccionar el *Criterio de validación* que por defecto está en *Cualquier valor*, sin embargo tenemos más opciones
![[htfhfhfth.png]]
También podemos incluir un *Mensaje de entrada* que al dar clic en la celda nos de unas instrucciones de cómo se debe llenar
![[twtwetwetwet.png]]
Del mismo modo podemos crear un mensaje de error al introducir el formato incorrecto
![[jfjgfjgjgf.png]]
# Formato condicionado
Vamos a colocar una condición para el formato de visualización de nuestros datos, para esto vamos a seleccionar nuestros datos, iremos a la sección de *Inicio* en el apartado de *Estilos* encontraremos la opción *Formato condicional*
![[fefesfesf.png]]
podemos seleccionar distintas opciones
![[sgsesgseg.png]]
también podemos crear una nueva regla dando clic en *Nueva regla*
![[gsegsegseg.png]]
Podemos administrar las reglas que ya establecimos dando clic en la opción *Administrar reglas*
![[gshshwehw.png]]
Podemos cambiar la hoja en *Mostrar reglas de formato para*, por defecto esta en *Selección actual* 
![[hrdhrdhrd.png]]
# Analizar datos automáticamente
Seleccionamos nuestros datos, luego en la ficha de *Inicio*, en la sección de *Análisis* damos clic en *Analizar datos*
![[drhrdhrdhrdhdrhrd.png]]
nos aparece una sección en el lado derecho 
![[bfbfdb.png]]
podemos elegir *Mover* y *Cambiar de tamaño*
![[hrdhrdhrdhrdhrdhrdh.png]]
seleccionemos *Mover*, esto nos va a permitir moverla y cambiarla de tamaño
![[rdhrd.png]]
al dar clic en el engrane podemos elegir los campos que más nos interesen
![[besbsebseb.png]]
# Tablas dinámicas
Seleccionamos nuestra tabla, en la ficha *Insertar* vamos al grupo de tablas seleccionamos *Tablas dinámicas*
![[hdrhrdhrdhrdhrd.png]]
Nos arroja una ventana donde podemos elegir el rango, en dónde deseamos colocar la tabla dinámica (se recomienda en una nueva hoja de cálculo) y si queremos analizar varias tablas (en nuestro ejemplo no lo seleccionaremos)
![[fafeaf.png]]
automáticamente nos crea una nueva hoja en nuestro libro de Excel, en ella nos aparece un cuadro que dice *Tabla dinámica* y otro de los *Campos de tabla dinámica*
![[reheherhreh.png]]
Por ejemplo, podemos visualizar las ventas totales por fecha, para esto arrastramos *Fecha* a *Filas* y *Ventas totales* a *Valores* y cerramos la ventana
![[hdrh.png]]
podemos modificar el formato de manera manual.
![[y54y54y.png]]
Al seleccionar la tabla dinámica nos aparecen las fichas *Analizar tabla dinámica* y *Diseño*
![[efeffafaf.png]]
Para ver de nuevo la lista de *Campos* vamos a la ficha de *analizar tabla dinámica* y seleccionamos *Mostrar* -> *Lista de campos*
![[54y54y.png]]
Podemos modificar el campo de valor, por defecto nos da suma
![[hreherherherh.png]]
seleccionamos *Configuración de campo de valor*
![[rshrsfdbfdb.png]]
en la pestaña de *Mostrar valores como* nos va distintas de opciones de cómo se van a mostrar
![[rehreh.png]]
seleccionemos por ejemplo *% del total de columnas* esto nos dará el porcentaje que representa cada mes
![[fesfesfefeqw.png]]
al dar clic derecho sobre los valores nos da las mismas opciones de la *Configuración de campo de valor* que son *Resumir valores por* y *Mostrar valores por*
![[csacsac.png]]
podemos ver al mismo tiempo el *% de total de columnas* y la *Suma* de *Ventas totales* arrastrando *Ventas totales* a *Valores* y configurando todo de nuevo, podemos agregar más campos de valores
![[gsegesgesg.png]]
Podemos agregar también un filtro, por ejemplo por *Utilidad*, nos aparece una celda de filtros
![[y5y54.png]]
Si queremos dar un diseño a nuestra tabla dinámica, nos dirigimos a la ficha de *Diseño* 
# Campos calculados
Seleccionamos nuestra tabla dinámica, en la ficha de *Analizar tabla dinámica* buscamos la sección *Cálculos*, en *Campos, elementos y conjuntos* seleccionamos *Campo calculado* 
![[hreheheh.png]]
nos da la ventana *Insertar campo calculado*
![[sbbrsbsrbsrb.png]]
para ejemplificar calculemos el costo de los vienes vendidos **COGS**, se calcula como las *Ventas totales* menos la *Utilidad*
![[srhsrhrs.png]]
agrega la columna de *Suma de COGS*
![[brryryry.png]]
# Gráficos dinámicos
Seleccionamos los datos, luego vamos a la ficha de *Insertar* y en el apartado de *Gráficos* podemos encontrar la opción *Gráfico dinámico*
![[hddfhfdh.png]]
Nos da la siguiente ventana, se recomienda crear la gráfica dinámica en una nueva hoja de cálculo
![[hdrhrdhrdh.png]]
para nuestro ejemplo no vamos a analizar varias tablas
![[hhtnn.png]]
Elegimos como categoría el nombre de los vendedores y los valores de las ventas de enero y febrero, obtenemos lo siguiente
![[twtrgs.png]]
En los botones de la gráfica podemos filtrar la información, por ejemplo por nombre de vendedor
![[ndgnrtju.png]]
también nos podemos ir a la ficha de *Análisis de Gráfico dinámico* para *Insertar una segmentación de datos* 
![[fafwafwa.png]]
Seleccionamos filtrar por *Nombre* y nos da la siguiente ventana con el nombre de los vendedores, al seleccionar uno automáticamente filtrará la tabla y la gráfica
![[wtwtwtw.png]]
también podemos *Actualizar* y *Cambiar el origen de datos*
![[tertret.png]]