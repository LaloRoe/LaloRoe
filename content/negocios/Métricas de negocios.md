---
title: Métricas de negocios
date: 2023-10-17
authors:
  - Eduardo Ortiz Romero
---
---
<center>
*"Si no puedes medirlo no puedes mejorarlo"* *
</center>
---
# Introducción
* **Ingresos**: Los ingresos representan el total de las ventas generadas por un negocio, producto o servicio. Se calculan multiplicando el valor de cada producto o servicio vendido por la cantidad de unidades vendidas.

<pre>
Valor del producto o servicio * Número de unidades vendidas
</pre>

* **Costos Totales**: Los costos totales son el conjunto de gastos necesarios para crear y ofrecer el producto o servicio. Incluyen costos directos e indirectos, como materias primas, mano de obra, gastos de producción, etc.

* **Utilidad Real**: La utilidad real representa la verdadera ganancia que se obtiene después de restar los costos totales de los ingresos totales.

<pre>
Ingresos Totales - Costos Totales
</pre>

# LTV - Life Time Value 

**Valor del tiempo de vida del cliente.**

Valor total que un cliente generará a lo largo del tiempo. Es una predicción del beneficio neto atribuido a la relación completa con un cliente.

<pre>
Tiempo promedio de uso * Ingresos promedios por cliente
</pre>
# CAC -  Customer Acquisition Cost

**Costo de Adquisición del Cliente.**

Es el costo asociado con la adquisición de un nuevo cliente. Incluye gastos como publicidad, salarios de ventas y marketing, etc.

<pre>
Total de Gastos de Adquisición de Clientes / Número de Nuevos Clientes Adquiridos
</pre>

# LTV:CAC

Relación entre el valor de tiempo de vida del cliente y el costo de adquisición de cliente. Esta relación ayuda a entender cuánto estás gastando para adquirir un cliente en comparación con el valor que ese cliente trae a tu negocio a lo largo del tiempo.

El valor debe ser
$$\frac{LTV}{CAC}>1$$

Significa que por cada peso invertido recibes  $\frac{LTV}{CAC}$ 

# Índice Big Mac 

**Comparación de cambio usando el valor de una Big Mac.**

Es un índice creado por “The Economist” para medir el poder adquisitivo en diferentes países utilizando el precio de un Big Mac como referencia. Se basa en la teoría de la paridad del poder adquisitivo.

Ejemplo:
Big Mac Alemania (4 dólares) / EEUU (5 dólares)
$$\frac{4}{5}=0.8$$
Si la tasa de cambio es $0.91$ euros por dólar, entonces el euro está devaluado
$$\frac{0.11*100}{0.91}=12\%$$
# Mounthly Recurrent Revenue MRR

**Ingresos recurrentes mensuales.**

Usadas principalmente por empresas con modelo de negocios Software as a Service (SaaS)

<pre>
Número de usuarios * precio al mes/Cuentas activas
</pre>
# Return on Investment ROI

**Retorno de inversión.**

Es una métrica que se utiliza para evaluar la rentabilidad de una inversión o proyecto. En términos sencillos, el ROI nos muestra cuánto dinero se ha ganado o perdido en relación con la cantidad de dinero invertida. Se expresa generalmente como un porcentaje.

<pre>
(Ganancias - Costo de la inversión) / Costo de la inversión *100
</pre>
# CHURN

**Cantidad de clientes que pierdes en el tiempo o Tasa de abandono o deserción.**

Representa el porcentaje de clientes que dejan de usar un producto o servicio en un período determinado.

<pre>
Clientes perdidos/Clientes iniciales
</pre>

*Es mejor retener clientes que adquirir nuevos.*

# Blended y Paid CAC

Es una combinación del CAC para diferentes canales, tanto pagados como orgánicos. Es útil para tener una visión general del costo promedio de adquisición por cliente.

* **Paid CAC**: Costos de Marketing, Clientes generados

<pre>
Costos / Clientes generados
</pre>

* **Blended CAC**:  Costos de Marketing, Contenido, Ventas (Sin incluir salarios), Clientes generados (pagos y orgánicos)

<pre>
Costos / Clientes generados
</pre>
## Utilidad Neta y Utilidad Bruta

* **Utilidad Bruta**

<pre>
Ingresos totales - Costos de Producción
</pre>

* **Utilidad Neta (Net Profit)**

<pre>
Utilidad Bruta - Gastos adicionales
</pre>