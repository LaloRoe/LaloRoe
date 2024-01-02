---
title: Fundamentos de Bases de Datos
date: 2023-11-04
authors:
  - Eduardo Ortiz Romero
showSidebar: true
---
 ```SQL
 SELECT (2+2);
```
# # Historia de las bases de datos relacionales (RBD)
## 12 reglas de Codd
* **Regla 0:** _Regla fundamental_. Todo sistema que se defina como [sistema de gestión de base de datos relacional](https://es.wikipedia.org/wiki/Sistema_de_gesti%C3%B3n_de_bases_de_datos_relacionales "Sistema de gestión de bases de datos relacionales"), o se anuncie como tal, ha de poder gestionar las bases de datos exclusivamente con sus capacidades relacionales.
* **Regla 1:** _Regla de la información_. Toda la información en una base de datos relacional se representa de forma explícita en el nivel lógico y exactamente de una manera: con valores en tablas.
* **Regla 2:** _Regla del acceso garantizado_. Se garantiza que todos y cada uno de los datos (valor atómico) de una base de datos relacional son accesibles lógicamente mediante una combinación de nombre de tabla, valor de clave primaria y nombre de columna. Todos los datos deben ser accesibles sin ambigüedad. Esta regla es esencialmente una nueva exposición del requisito fundamental para las claves primarias. Dice que cada valor escalar individual en la base de datos debe ser lógicamente direccionable especificando el nombre de la tabla, la columna que lo contiene y la clave primaria.
* **Regla 3:** _Regla del tratamiento sistemático de valores nulos_. Los [sistemas de gestión de base de datos](https://es.wikipedia.org/wiki/Sistema_de_gesti%C3%B3n_de_bases_de_datos "Sistema de gestión de bases de datos") plenamente relacionales admiten los valores nulos (distintos de la cadena vacía, los blancos, los ceros o cualquier otro número) para representar la información desconocida y la inaplicable de manera sistemática e independiente del tipo de dato .
* **Regla 4:** _Catálogo dinámico en línea basado en el modelo relacional_. La descripción de la base de datos se representa a nivel lógico igual que los datos comunes, de modo que los usuarios autorizados pueden utilizar el mismo lenguaje relacional en su consulta que el que aplican a los datos comunes. El sistema debe soportar un catálogo en línea, el catálogo relacional, que da acceso a la estructura de la base de datos y que debe ser accesible a los usuarios autorizados.
* **Regla 5:** _Regla del sublenguaje de datos completo_. Un sistema relacional debe permitir varios lenguajes y varios modos de uso terminal (como rellenar formularios, por ejemplo). Sin embargo, debe haber al menos un lenguaje cuyas declaraciones se puedan expresar, mediante una sintaxis bien definida, como cadenas de caracteres y que respalde de forma integral los siguientes aspectos:

1. Definición de datos
2. Definición de vistas
3. Manipulación de datos (interactiva y por programa)
4. Restricciones de integridad
5. Límites de transacción (_begin,_ _commit_ y _rollback_).
* **Regla 6:** _Regla de actualización de vistas_. Todas las [vistas](https://es.wikipedia.org/wiki/Vista_(base_de_datos) "Vista (base de datos)") que son teóricamente actualizables son también actualizables por el sistema.
* **Regla 7:** _Inserción, actualización y borrado de alto nivel_. La capacidad de gestionar una relación base o una relación derivada como un solo operando no solo se aplica a la recuperación de los datos, sino también a la inserción, actualización y eliminación de datos. El sistema debe permitir la manipulación de alto nivel en los datos, es decir, sobre conjuntos de tuplas. Esto significa que los datos no solo se pueden recuperar de una base de datos relacional a partir de filas múltiples y/o de tablas múltiples, sino que también pueden realizarse inserciones, actualizaciones y borrados sobre varias [tuplas](https://es.wikipedia.org/wiki/Tupla "Tupla") y/o tablas al mismo tiempo y no solo sobre registros individuales.
* **Regla 8:** _Independencia física de los datos_. Los programas de aplicación y actividades terminales permanecen inalterados a nivel lógico cuando se realizan cambios en las representaciones de almacenamiento o en los métodos de acceso. 
* **Regla 9:** _Independencia lógica de los datos_. Los programas de aplicación y actividades terminales permanecen inalterados a nivel lógico cuando se realizan cambios en las tablas base que preservan la información. La independencia de datos lógica es más difícil de lograr que la independencia física de datos.
* **Regla 10:** _Independencia de la integridad_. Las restricciones de integridad específicas para una determinada base de datos relacional se deben poder definir en el sublenguaje de datos relacional y almacenar en el catálogo, no en los programas de aplicación. Las restricciones de integridad se deben especificar por separado de los programas de aplicación y almacenarse en la base de datos. Debe ser posible cambiar esas restricciones sin afectar innecesariamente a las aplicaciones existentes.
* **Regla 11:** _Independencia de la distribución_. El usuario final no ha de ver que los datos están distribuidos en varias ubicaciones. Los usuarios deben tener siempre la impresión de que los datos se encuentran en un solo lugar. La distribución de porciones de base de datos en distintas localizaciones debe ser transparente para los usuarios de la base de datos. Los usos existentes deben continuar funcionando con éxito:

1. cuando una versión distribuida del SGBD se carga por primera vez
2. cuando los datos existentes se redistribuyen en el sistema.

* **Regla 12:** _La regla de la no subversión_. Si un sistema relacional tiene un lenguaje de bajo nivel (un registro cada vez), ese nivel bajo no puede utilizarse para subvertir o eludir las reglas y restricciones de integridad expresadas en el lenguaje relacional de alto nivel (varios registros cada vez). Si el sistema proporciona una interfaz de bajo nivel de registro, aparte de una interfaz relacional, esa interfaz de bajo nivel no debe permitir su utilización para subvertir el sistema. Por ejemplo para sortear las reglas de [seguridad](https://es.wikipedia.org/wiki/Seguridad "Seguridad") relacional o las restricciones de [integridad](https://es.wikipedia.org/wiki/Integridad_del_mensaje "Integridad del mensaje"). Esto es debido a que a algunos sistemas no relacionales previamente existentes se les añadió una interfaz relacional pero, al mantener la interfaz nativa, seguía existiendo la posibilidad de trabajar no relacionalmente.
# Entidades y Atributos
En bases de datos, una entidad es la representación de un objeto o concepto del mundo real que se describe en una base de datos. Las entidades se describen en la estructura de la base de datos empleando un modelo de datos.

## ¿Qué es una entidad?

Una **entidad** es algo similar a un objeto (programación orientada a objetos) y representa algo en el mundo real, incluso algo abstracto. Tienen atributos que son las cosas que los hacen ser una entidad y por convención se ponen en plural.

## Ejemplo de entidad en bases de datos

En la imagen puedes observar como ejemplo que la entidad _Laptops_ posee diferentes atributos como color, pantalla, año, modelo, etc.
## ¿Qué es un atributo?

Son las características o propiedades que describen a la entidad (se encierra en un óvalo). Los atributos se componen de:
![[Pasted image 20231215123040.png]]
Los **atributos compuestos** son aquellos que tienen atributos ellos mismos.

Los **atributos llave** son aquellos que identifican a la entidad y no pueden ser repetidos. Existen:

- Naturales: son inherentes al objeto como el número de serie
- Clave artificial: no es inherente al objeto y se asigna de manera arbitraria.

## Tipos de entidades

**Entidades fuertes:** son entidades que pueden sobrevivir por sí solas.

**Entidades débiles:** no pueden existir sin una entidad fuerte y se representan con un cuadrado con doble línea.

- Identidades débiles por identidad: no se diferencian entre sí más que por la clave de su identidad fuerte.
- Identidades débiles por existencia: se les asigna una clave propia.

## Cómo representar las entidades en bases de datos

Existen varios tipos de notaciones para los modelos entidad relacionamiento. Chen es uno de los más utilizados para diagramar lógicamente la base de datos. Aquí te mostramos un ejemplo.
![[Pasted image 20231215122733.png]]
# Relaciones
Las **relaciones** nos permiten ligar o unir nuestras diferentes entidades y se representan con rombos. Por convención se definen a través de verbos.

Las relaciones tienen una propiedad llamada **cardinalidad** y tiene que ver con números. Cuántos de un lado pertenecen a cuántos del otro lado:

- Cardinalidad: 1 a 1
- Cardinalidad: 0 a 1
- Cardinalidad: 1 a N
- Cardinalidad: 0 a N
 ![[Pasted image 20231215212634.png]]
# Diagrama ER
https://en.wikipedia.org/wiki/Entity–relationship_model#Cardinalities
http://mermaid.js.org/syntax/entityRelationshipDiagram.html
# Diagramas Físicos: tipos de datos y constraints
Para llevar a la práctica un diagrama debemos ir más allá y darle detalle con parámetros como:

**Tipos de dato:**

- **Texto:** CHAR(n), VARCHAR(n), TEXT
- **Números:** INTEGER, BIGINT, SMALLINT, DECIMAL(n,s), NUMERIC(n,s)
- **Fecha/hora:** DATE, TIME, DATETIME, TIMESTAMP
- **Lógicos:** BOOLEAN

**Constraints (Restricciones)**

- **NOT NULL:** Se asegura que la columna no tenga valores nulos
- **UNIQUE:** Se asegura que cada valor en la columna no se repita
- **PRIMARY KEY:** Es una combinación de NOT NULL y UNIQUE
- **FOREIGN KEY:** Identifica de manera única una tupla en otra tabla
- **CHECK:** Se asegura que el valor en la columna cumpla una condición dada
- **DEFAULT:** Coloca un valor por defecto cuando no hay un valor especificado
- **INDEX:** Se crea por columna para permitir búsquedas más rápidas

# Diagrama Físico: normalización

## Sin normalizar

| alumno | nivel_curso | nombre_curso | materia_1 | materia_2 |
|-|-|-|-|-|
| Juanito | Maestría | Data engineering | MySQL | Python |
| Pepito | Licenciatura | Programación | MySQL | Python |

## Primera forma normal (1FN)
	Atributos atómicos (sin campos repetidos).

Esta FN nos ayuda a eliminar los valores repetidos y no atómicos dentro de una base de datos.

Formalmente, una tabla está en primera forma normal si:

- Todos los atributos son atómicos. Un atributo es atómico si los elementos del dominio son simples e indivisibles.
- No debe existir variación en el número de columnas.
- Los campos no clave deben identificarse por la clave (dependencia funcional).
- Debe existir una independencia del orden tanto de las filas como de las columnas; es decir, si los datos cambian de orden no deben cambiar sus significados.

Se traduce básicamente a que si tenemos campos compuestos como por ejemplo “nombre_completo” que en realidad contiene varios datos distintos, en este caso podría ser “nombre”, “apellido_paterno”, “apellido_materno”, etc.

También debemos asegurarnos que las columnas son las mismas para todos los registros, que no haya registros con columnas de más o de menos.

Todos los campos que no se consideran clave deben depender de manera única por el o los campos que si son clave.

Los campos deben ser tales que si reordenamos los registros o reordenamos las columnas, cada dato no pierda el significado.

**Ejemplo:**

En el ejemplo anterior ha campos repetidos *materia_1* y *materia_2* .

| alumno_id | alumno | nivel_curso | nombre_curso | materia |
| - | - | - | - | - |
| 1 | Juanito | Maestría | Data engineering | MySQL |
| 1 | Juanito | Maestría | Data engineering | Python |
| 2 | Pepito | Licenciatura | Programación | MySQL |
| 2 | Pepito | Licenciatura | Programación | Python |

## Segunda forma normal (2FN)
	Cumple 1FN y Cada campo de la tabla debe depender de una clave única.

Esta FN nos ayuda a diferenciar los datos en diversas entidades.

Formalmente, una tabla está en segunda forma normal si:

- Está en 1FN
- Sí los atributos que no forman parte de ninguna clave dependen de forma completa de la clave principal. Es decir, que no existen dependencias parciales.
- Todos los atributos que no son clave principal deben depender únicamente de la clave principal.

**Ejemplo:**

En el ejemplo anterior ahora creamos dos tablas, una de *alumnos* y otra de *materias*

**Alumnos**

| alumno_id | alumno | nivel_curso | nombre_curso |
| - | - | - | - |
| 1 | Juanito | Maestría | Data engineering |
| 2 | Pepito | Licenciatura | Programación |

**Materias**

| materia_id | alumno_id | materia |
| - | - | - |
| 1 | 1 | MySQL |
| 2 | 1 | Python |
| 3 | 2 | MySQL |
| 4 | 2 | Python |

## Tercera forma normal (3FN)
	Cumple 1FN y 2FN y los campos que NO son clave NO deben tener dependencias.

Esta FN nos ayuda a separar conceptualmente las entidades que no son dependientes.

Formalmente, una tabla está en tercera forma normal si:

* Se encuentra en 2FN  
* No existe ninguna dependencia funcional transitiva en los atributos que no son clave

Esta FN se traduce en que aquellos datos que no pertenecen a la entidad deben tener una independencia de las demás y debe tener un campo clave propio. Continuando con el ejemplo anterior, al aplicar la 3FN separamos la tabla alumnos ya que contiene datos de los cursos en ella quedando de la siguiente manera.

**Ejemplo:**

**Alumnos**

| alumno_id | alumno | curso_id |
| - | - | - |
| 1 | Juanito | 1 |
| 2 | Pepito | 2 |

**cursos**

| curso_id | nivel_curso | nombre_curso |
| - | - | - |
| 1 | Maestría | Data engineering |
| 2 | Licenciatura | Programación |

**materia**

| materia_id | alumno_id | materia |
| - | - | - |
| 1 | 1 | MySQL |
| 2 | 1 | Python |
| 3 | 2 | MySQL |
| 4 | 2 | Python |

## Cuarta forma normal (4FN)
	Cumple 1FN, 2FN y 3FN y los campos multivaluados se identifican por una clave única.

Esta FN nos trata de atomizar los datos multivaluados de manera que no tengamos datos repetidos entre rows.

Formalmente, una tabla está en cuarta forma normal si:

- Se encuentra en 3FN
- Los campos multivaluados se identifican por una clave única

Esta FN trata de eliminar registros duplicados en una entidad, es decir que cada registro tenga un contenido único y de necesitar repetir la data en los resultados se realiza a través de claves foráneas.

Aplicado al ejemplo anterior la tabla materia se independiza y se relaciona con el alumno a través de una tabla transitiva o pivote, de tal manera que si cambiamos el nombre de la materia solamente hay que cambiarla una vez y se propagara a cualquier referencia que haya de ella.

**Ejemplo:**

**Alumnos**

| alumno_id | alumno | curso_id |
| - | - | - |
| 1 | Juanito | 1 |
| 2 | Pepito | 2 |

**Cursos**

| curso_id | nivel_curso | nombre_curso |
| - | - | - |
| 1 | Maestría | Data engineering |
| 2 | Licenciatura | Programación |

**Materias**

| materia_id | materia |
| - | - |
| 1 | MySQL |
| 2 | Python |

**Materias_por_alumno**

| mpa_id | materia_id | alumno_id |
| - | - | - |
| 1 | 1 | 1 |
| 2 | 2 | 1 |
| 3 | 1 | 2 |
| 4 | 2 | 2 |

De esta manera, aunque parezca que la información se multiplicó, en realidad la descompusimos o normalizamos de manera que a un sistema le sea fácil de reconocer y mantener la consistencia de los datos.

Algunos autores precisan una 5FN que hace referencia a que después de realizar esta normalización a través de uniones (JOIN) permita regresar a la data original de la cual partió.

## Diagrama Físico: normalizando Platziblog
