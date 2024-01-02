---
title: Plantilla para calificar exámenes de opción múltiple
authors:
  - Eduardo Ortiz Romero
---
# Problema
Una empresa local que brinda servicios educativos a jóvenes de secundaria y preparatoria, 
Calificar un examen de opción múltiple para uno o dos alumnos no representa mayor esfuerzo que dedicarle algunos minutos, pero si son grupos de $30$, $60$ o incluso una escuela completa, ya se convierte en un problema y si además le sumas que quieres entregar un reporte a cada alumno sobre sus resultados, se convierte en semanas de trabajo. 
Este problema se puede resolver creando una plantilla de Excel que haga todo el trabajo de forma automática, con el único esfuerzo de capturar las respuestas y que la computadora se encargue del resto. 
## ¿Por qué Excel?
Elegimos usar Excel porque este problema le puede ocurrir a profesores de primaria, secundaria o preparatoria que no necesariamente tengan conocimientos avanzados de programación y tiempo. Todo mundo tiene Exel en sus computadoras, por eso es la opción práctica.
# Plan
Cada examen contiene la siguiente información.
* Escuela
* Nombre del alumno
* Sexo
	* Masculino o Femenino
* Turno
	* Matutino o Vespertino
* Grupo
	* $A$, $B$, $C$, $D$, $E$, etc
* Respuestas 
	* Cada pregunta contiene $4$ opciones de respuesta ($A$, $B$, $C$, $D$), puede seleccionar solo una.
## Diagrama Entidad-Relación

```mermaid

erDiagram

Alumno ||--o{ Respuestas-del-alumno : Genera
Alumno{
		int id_alumno PK
		string Nombre-del-alumno
		string Sexo
		string Nombre-de-la-escuela
		string Grupo
		string Turno
}
Escuela ||--o{ Alumno : Pertenece
Escuela{
		int id_escuela PK
		string Nombre-de-la-escuela
		string Grupos
		string Turnos
}
Respuestas-del-alumno ||--|| Resultados : Generan
Respuestas-del-alumno{
		int id_respuesta PK
		string Nombre-del-alumno
		int Numero-de-examen
		string Respuestas-del-alumno
}
Resultados{
		int id_resultados PK
		string Nombre-del-alumno
		int Numero-de-examen
		int Evaluaciones
}
Respuestas-correctas ||--|{ Respuestas-del-alumno : Evaluan
Respuestas-correctas{
		int id_respuestas_correcta PK
		int Numero-de-examen
		string Respuestas-correctas
}

```

## Excel


