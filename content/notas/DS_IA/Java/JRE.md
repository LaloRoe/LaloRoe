---
title: JRE
authors:
  - Eduardo Ortiz Romero
showSidebar: true
---
# ¿Qué es JRE?
**Java Runtime Environment** (Entorno de ejecución de JAVA)

Java es un lenguaje multiplataforma, esto implica que debe ser **Compilado** e **Interpretado**.

## ¿Qué es compilar?

```mermaid
classDiagram 
Código_Fuente --> Código_Máquina : Compilador
Código_Fuente : import...
Código_Fuente : print('Hola mundo')
Código_Máquina : 0001100101101
```
Se debe generar un ejecutable distinto para cada plataforma.
```mermaid
graph TD;
Programador --> Versión_1;
Programador --> Versión_2;
Programador --> Versión_3;
Versión_1 --> Ejecutable_Windows;
Versión_2 --> Ejecutable_Linux;
Versión_3 --> Ejecutable_Mac;
Ejecutable_Windows --> Usuario_Windows;
Ejecutable_Linux --> Usuario_Linux;
Ejecutable_Mac --> Usuario_Mac
```
Solución de Java. **Independencia de plataforma**.
```mermaid
classDiagram 
Código_Fuente --> Código_Bytecodes : Compilador
Código_Bytecodes --> Código_Máquina : JRE
Código_Fuente : import...
Código_Fuente : print('Hola mundo')
Código_Máquina : 0001100101101
Código_Bytecodes : 00111001101010
Código_Bytecodes : Extensión .class
```
Write once, run everywhere.
```mermaid
graph TD;
Programador --> Única_Versión;
Única_Versión -->|Compilación| Bytecodesclass;
Bytecodesclass --> JRE;
JRE --> Usuario_Windows;
JRE --> Usuario_Linux;
JRE --> Usuario_Mac;
```

