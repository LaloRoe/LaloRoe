---
title: Funciones de activación
date: 2023-09-16
authors:
  - Eduardo Ortiz Romero
---
# Introducción

La funciones de activación que se utilizan en redes neuronales artificiales son variadas y la elección que hagamos depende del problema que se planea resolver así como de la rapidez con la que con la que converge a la solución entre otros aspectos, como su comportamiento asintótico, si es acotada, derivable, etc.

Podemos clasificar las funciones de activación en dos tipos: continuas y discretas.

Las funciones de activación discretas arrojan un conjunto finito de valores. Diremos que son **binarias** si arrojan $0$ o $1$ y **bipolares** si arrojan $−1$ o $1$. Una neurona que evalúa la suma ponderada en una función de activación binaria se le conoce como perceptrón.

En este trabajo vamos a utilizar funciones de activación continuas con dominio en los números reales y cuya imagen está contenida en los intervalos $[0, 1]$ o $[−1, 1]$, además, son no lineales, monótonas crecientes y derivables. Esto como veremos más adelante será de gran importancia para el entrenamiento de las redes neuronales, utilizando el algoritmo llamado **Propagación hacia atrás o Backpropagation**.

Las funciones de activación continuas que utilizaremos en la red neuronal de la implementación son las siguientes:

# Función sigmoidal.

La función sigmoidal con parámetro $s > 0$ se define como:

$$\sigma(x;s)=\frac{1}{1+e^{-sx}}$$

Esta función tiene las siguientes características: es no lineal, es acotada $0 < \sigma(x; s) < 1$, monótona creciente y su comportamiento asintótico es

$$\lim_{x\to\infty}\sigma(x;s)=1$$

$$\lim_{x\to-\infty}\sigma(x;s)=0$$

Las gráficas de las funciones sigmoidales tiene una característica forma de S.

![[sigmax4.png]]

Podemos observar que conforme el valor de el parámetro s aumenta, la inclinación de la función en la vecindad con centro en cero aumenta, por lo que los valores de la función se asemejan a la función de activación de el perceptrón

En efecto, si $x > 0$ entonces

$$\lim_{s\to\infty}\sigma(x;s)=1$$

por otro lado, si $x < 0$

$$\lim_{s\to\infty}\sigma(x;s)=0$$

Esto lo podemos comprobar en la siguiente gráfica.

![[sigmavsbin.png]]

La función sigmoidal es derivable y su derivada se puede expresar en términos de la misma función $\sigma(x; s)$. Para comprobar esto notemos que

$$1-\sigma(x;s)=1-\frac{1}{1+e^{-sx}}=\frac{e^{-sx}}{1+e^{-sx}}$$

$$=\frac{1}{1+e^{sx}}=\frac{1}{1+e^{-s(-x)}}=\sigma(-x;s)$$

es decir

$$1-\sigma(x;s)=\sigma(-x;s)$$

calculamos la derivada

$$\frac{d\sigma(x;s)}{dx}=\frac{se^{-sx}}{(1+e^{-sx})^2}= s\frac{1}{1+e^{-sx}}\frac{e^{-sx}}{1+e^{-sx}}=$$

$$=s\frac{1}{1+e^{-sx}}\frac{1}{1+e^{sx}}=s\sigma(x;s)\sigma(-x;s).$$

Por lo tanto, la derivada de la función sigmoidal con parámetro $s$ es
  $$\frac{d\sigma(x;s)}{dx}=s\sigma(x;s)(1-\sigma(x;s)).$$

La derivada está acotada en 

$$0<\frac{d\sigma(x;s)}{dx}<\frac{s}{4}$$
su gráfica tiene forma de campana pues es creciente en $(−\infty, 0)$ y decreciente en $(0,\infty)$.
  ![[dsigmax4.png]]

Como la derivada está acotada por su parámetro, esto nos dice que cuando el parámetro aumenta, la inclinación de la campana o la velocidad con la que crece o decrece aumenta.

Podemos comprobar que su comportamiento asintótico es

$$\lim_{x\to\infty}\frac{d\sigma(x;s)}{dx}=0$$

$$\lim_{x\to-\infty}\frac{d\sigma(x;s)}{dx}=0$$

Vamos a utilizar dos tipos de funciones sigmoidales: la primera cuando el parámetro $s = 1$, la segunda una expansión y traslación de la función sigmoidal con parámetro $s = 2$.
## Función logística.

Cuando el parámetro toma el valor $s = 1$ la función sigmoidal recibe el nombre de función logística.

$$\sigma(x;s=1)=\frac{1}{1+e^{-x}}$$

![[Logistica.png]]

Su comportamiento y características son las descritas anteriormente con el parámetro $s = 1$.

Su derivada es

$$\frac{\sigma(x;s=1)}{dx}=\frac{1}{1+e^{-x}}\left(1-\frac{1}{1+e^{-x}}\right)$$

o también se puede escribir como

$$\frac{\sigma(x;s=1)}{dx}=\frac{1}{\left(1+e^{-x}\right)\left(1+e^x\right)}.$$

Su gráfica es

![[dlogist.png]]

Esta función es muy utilizada en redes neuronales, por sus características de estar acotada y el hecho de que su derivada esté en términos de la misma función.

## Tangente hiperbólica.

La función sigmoidal con parámetro $s = 2$, expansión vertical $2$ y traslación vertical $−1$ recibe el nombre de tangente hiperbólica, se denota como $\tanh(x)$.

$$\tanh(x)=2\sigma(x;s=2)-1.$$

Si sustituimos el valor de la función sigmoide con parámetro $s=2$

$$\tanh(x)=2\left(\frac{1}{1+e^{-2x}}\right)-1=\frac{1-e^{-2x}}{1+e^{-2x}}$$

Por lo tanto podemos escribir a la $\tanh(x)$ como

$$\tanh(x)=\frac{1-e^{-2x}}{1+e^{-2x}}$$

Por la expansión y traslación  vertical podemos deducir que la tangente hiperbólica está acotada en $|\tanh(x)|<1$. Por lo que su comportamiento asintótico es:

$$\displaystyle\lim_{x\to\infty}\tanh(x)=1$$
$$\displaystyle\lim_{x\to-\infty}\tanh(x)=-1.$$

Su gráfica también tiene la característica forma de S.

![[TH.png]]

Calculamos su derivada

$$\frac{d\tanh(x)}{dx}=\frac{d}{dx}(2\sigma(x;s=2)-1)=2(2\sigma(x;s=2)(1-\sigma(x;s=2)))$$

$$=-4\sigma^2(x;s=2)+4\sigma(x;s=2)=-4\sigma^2(x;s=2)+4\sigma(x;s=2)-1+1$$

$$=-(4\sigma^2(x;s=2)-4\sigma(x;s=2)+1)+1=-(2\sigma(x;s=2)-1)^2+1=-\tanh^2(x)+1.$$

Por lo tanto la derivada de la función tangente hiperbólica es:

$$\frac{d\tanh(x)}{dx}=1-\tanh^2(x).$$

Su gráfica como era de esperar tiene forma de campana.

![[dtanh.png]]

La derivada está acotada en $0<1-\tanh^2(x)<1$, su comportamiento asintótico es

$$\lim_{x\to\infty}\frac{d\tanh(x)}{dx}=0$$

$$\lim_{x\to-\infty}\frac{d\tanh(x)}{dx}=0$$

# Función Gaussiana

La función Gaussiana se define como

$$f(x)=e^{-x^2}.$$

Es una función no lineal, acotada en $0<f(x)<1$, monótona creciente en $(-\infty,0]$ y monótona decreciente en $[0,\infty)$, su comportamiento asintótico es

$$\lim_{x\to\infty}f(x)=0$$

$$\lim_{x\to-\infty}f(x)=0$$

![[Gaussiana.png]]

Es derivable y su derivada es:

$$f'(x)=-2xe^{-x^2}$$

Notemos que $f''(x)=e^{-x^2}(4x^2-2)$, entonces los valores máximos y mínimos se encuentran en $x=\pm \frac{1}{\sqrt{2}}$ y estos son:

$$f'\left(\pm \frac{1}{\sqrt{2}}\right)=-2\left(\pm\frac{1}{\sqrt{2}}\right)e^{-\left(\pm\frac{1}{\sqrt{2}}\right)^2}=\mp\frac{2}{\sqrt{2}}e^{-\frac{1}{2}}=\mp\sqrt{2}\frac{1}{\sqrt{e}}=\mp \sqrt{\frac{2}{e}}$$

 Por lo tanto la derivada está acotada en $-\sqrt{\frac{2}{e}}\leq f'(x)\leq \sqrt{\frac{2}{e}}$.
Su comportamiento asintótico es

$$\displaystyle\lim_{x\to\infty}f'(x)=0$$

$$\displaystyle\lim_{x\to-\infty}f'(x)=0.$$

![[dgauss.png]]

<script src="https://utteranc.es/client.js"
        repo="LaloRoe/LaloRoe"
        issue-term="/DS_IA/Funciones%20de%20Activación"
        theme="dark-blue"
        crossorigin="anonymous"
        async>
</script>