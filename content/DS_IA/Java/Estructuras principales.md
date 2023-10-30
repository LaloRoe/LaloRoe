---
title: Estructuras principales en Java
date: 2023-10-30
showSidebar: true
authors:
  - Eduardo Ortiz Romero
---
# ¿Qué tipos de programas podemos crear?
1. Aplicaciones de consola.
	Se ejecutan en una ventana de comandos o shell.
2. Aplicaciones de propósito general.
	Son programas que se construyen para distintas necesidades.
3. Applets.
	Son programas que se ejecutan dentro de un navegador.
## Aplicación de consola.
### Anatomía de un programa Java.

**case sensitive**: Java distingue mayúsculas de minúsculas

**Modificador de acceso**: *public*

**Clase**: *class* (Todo programa Java debe estar dentro de al menos una clase)

```java
public class PrimeraClase {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.print("Hola mundo");
	}
}
```

# Tipos de datos en Java

## Tipos primitivos
1. **Enteros**
	1. **Int**: $4$ bytes de espacio para almacenamiento. Desde $-2,147,483,648$ hasta $2,147,483,647$
	2. **Short**: $2$ bytes de espacio para almacenamiento. Desde $-32,768$ hasta $32,767$
	3. **Long**: $8$ bytes de espacio de almacenamiento. Sufijo L
	4. **Byte**: $1$ byte de espacio para almacenamiento. Desde $-128$ hasta $127$
2. **Coma flotante** (decimales)
	1. **Float**: $4$ bytes de espacio para almacenamiento. Aproximadamente 6 a 7 cifras decimales significativas. Sufijo F.
	2. **Double**: 8 bytes de espacio para almacenamiento. Aproximadamente 15 cifras decimales significativas.
3. **Char**: para representar caracteres.
4. **Boolean**

## Variables en Java
### ¿Cómo se crea una variable en Java?
```java
int salario;
salario = 7;
```
