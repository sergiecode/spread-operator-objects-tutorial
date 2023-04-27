![enter image description here](https://raw.githubusercontent.com/sergiecode/spread-operator-objects-tutorial/master/spread-operator-objects-tutorial.png)

## Tutorial del operador de propagación en JavaScript

El operador de propagación, también conocido como spread operator en inglés, es un operador de sintaxis introducido en ECMAScript 6 que permite que un objeto iterable, como un arreglo o una cadena, se expanda en lugar de una secuencia de elementos.

### Sintaxis

El operador de propagación se escribe como tres puntos consecutivos (`...`) seguidos del objeto iterable a expandir. Aquí hay un ejemplo:

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    
    const combined = [...array1, ...array2];
    
    console.log(combined); // [1, 2, 3, 4, 5, 6]

En este ejemplo, el operador de propagación se utiliza para combinar dos arreglos (`array1` y `array2`) en un solo arreglo `combined`.

### Usando el operador de propagación para combinar objetos

También puedes usar el operador de propagación para combinar objetos. Aquí hay un ejemplo:

    const object1 = { nombre: "Sergie Code" };
    const object2 = { profesion: 'programador' };
    
    const combined = { ...object1, ...object2 };
    
    console.log(combined); // { nombre: "Sergie Code", profesion: 'programador' }

En este ejemplo, el operador de propagación se utiliza para combinar dos objetos (`object1` y `object2`) en un solo objeto `combined`.

### Conclusión

El operador de propagación es una característica útil en JavaScript que te permite combinar fácilmente objetos y arreglos en uno solo. ¡Prueba su uso en tus proyectos y verás lo útil que puede ser!

## Ejemplo

Aquí está el ejemplo que proporcionaste, pero con un poco más de explicación:

    const object1 = { nombre: "Sergie Code" };
    const object2 = { profesion: 'programador' };
    
    const combined = { ...object1, ...object2 };
    
    console.log(combined); // { nombre: "Sergie Code", profesion: 'programador' }

En este ejemplo, primero se crean dos objetos: `object1` y `object2`. Luego, el operador de propagación se utiliza para combinar estos dos objetos en un solo objeto llamado `combined`. Finalmente, el objeto `combined` se imprime en la consola mediante `console.log()`.
