# Prueba Técnica Front-End

Este proyecto es una resolución para una prueba técnica para la vacante de desarrollador front-end. La aplicación que se encuentra en este repositorio cuenta con la versión más reciente de Angular y cuenta con los requisitos previamente mencionados en la prueba.  

## Instalación y uso

Para instalar y hacer uso del proyecto en tu entorno local, debes de tener lo siguiente:

* Node.js
* npm
* Angular CLI (versión 17 o superior)

### Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/SuperVix19/prueba-tecnica-frontend.git
```

2. Navegamos al directorio del proyecto

```bash
cd prueba-tecnica-frontend
```

3. Instala todas las dependencias

```bash
npm install
```

### Uso de la aplicación

1. Podemos ejecutar el servidor de desarrollo de dos maneras

```bash
npx ng serve
```
o
```bash
npx ng serve -o
```

## Uso de Capacitor

Para cumplir con el requisito de una aplicación híbrida, en el proyecto se utiliza Capacitor. Es una herramienta de código abierto que toma una aplicación web existente (en este caso, el proyecto) y la convierte en una aplicación nativa real tanto para iOS, Android y la web.

### Uso

1. Cada vez que se haga un cambio, debemos de compilar la aplicación

```bash
npx ng build
```

2. Sincronizamos los cambios

```bash
npx cap sync
```

3. Una vez sincronizados, podemos abrir y ejecutar

  * Para abrir en Android:
    ```bash
    npx cap run android
    ```

  * Para abrir en Xcode:
    ```bash
    npx cap run ios
    ```

