# Página Web de Carolina Rodríguez

Este proyecto es una página web para practicar con Astro y React desarrollada por Carolina Rodríguez. La página muestra un contador que cuando finaliza enseña el regalo que contiene. Tambien tiene un calendario que cuando se selecciona una fecha se guarda en la BBDD.

Este proyecto fue creado con [Astro](https://astro.build).

## 🚀 Estructura del Proyecto

Dentro de tu proyecto Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro busca archivos .astro o .md en el directorio src/pages/. Cada página se expone como una ruta basada en su nombre de archivo.

No hay nada especial en src/components/, pero ahí es donde nos gusta poner cualquier componente de Astro/React/Vue/Svelte/Preact.

Cualquier recurso estático, como imágenes, se puede colocar en el directorio public/.

El archivo index.js en la raíz del proyecto es el servidor backend que se conecta a una base de datos PostgreSQL. Este servidor recibe la fecha seleccionada por el usuario y la guarda en la base de datos a través de la API save-date. Para ejecutar el backend localmente, utiliza el comando **node index.js**. Esto iniciará el servidor backend en localhost:5000.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📚 Librerías Utilizadas

Este proyecto utiliza las siguientes librerías:

- Astro.js
- Tailwind CSS
- Axios
- Express.js
- Cors
- pg (para la conexión con PostgreSQL)

## Despliegue

Este proyecto se despliega en Vercel.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
```


