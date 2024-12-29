# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


ToDo
- conectar con la api  OpenFDA (https://open.fda.gov/apis/)
- realizar una busqueda
- Mostrar resultados concordantes
- Controlar muchos resultados
- Mostrar informacion de un resultado en una pagina independiente
- usar materialUi

El objetivo sería realizar una web en React que use el API de OpenFDA (https://open.fda.gov/apis/) para permitir la búsqueda de medicamentos (de los registrados en EEUU). Estos serían los requerimientos:

https://api.fda.gov/drug/label.json?search=openfda.brand_name:%22ava%22&limit=2

Debe haber un campo de búsqueda para introducir el texto.
Se deben mostrar los resultados concordantes (conforme a la petición hecha al API) tras la introducción de texto en el mismo.
Si hay muchos resultados, idear una forma para permitir acceder a ellos y/o indicar la situación.
Al pinchar en un resultado, se debe mostrar la máxima información posible del medicamento en una página independiente.
Debe usarse MaterialUI.
Si quieres añadirle más cosas o funcionalidades que encuentres interesantes, son bienvenidas.

Valoraremos también:

Calidad y limpieza del código entregado.
Efectividad en la búsqueda.
Que sea responsive.
Aspecto visual en general.
Puedes dejarlo subido a GitHub o Bitbucket, como repositorio público, si no te importa, para que podamos echarle un ojo todos aquí.

Nos damos de plazo hasta las campanadas, por hacerlo más épico.

Si tienes alguna duda, no dudes en contactarme por email.
