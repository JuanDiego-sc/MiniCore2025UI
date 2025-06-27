```markdown
# MiniCore2025UI

Interfaz web para el sistema MiniCore2025. Este frontend permite visualizar, filtrar y consultar de forma intuitiva las **ventas**, **comisiones** por vendedor y las **reglas** aplicadas, todo ello conectado con un backend en ASP.NET Core.

## 🌐 Tecnologías Utilizadas

- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) para desarrollo rápido
- [Axios](https://axios-http.com/) para llamadas HTTP
- [React Query](https://tanstack.com/query) para manejo eficiente de estado remoto
- [PostCSS + CSS Vanilla](https://developer.mozilla.org/en-US/docs/Web/CSS) con estilos responsivos

## 🧱 Estructura del Proyecto

```

minicore-ui/
├── public/              # Archivos estáticos (favicon, etc.)
├── src/                 # Código fuente
│   ├── app/             # Componente principal App
│   ├── features/        # Componentes por funcionalidad (CommissionsTable)
│   ├── lib/
│   │   ├── api/         # Cliente Axios
│   │   ├── hooks/       # Custom hooks con React Query
│   │   └── types/       # Tipado TypeScript
│   └── styles/          # Estilos globales
├── index.html           # HTML principal
├── vite.config.ts       # Configuración de Vite
└── package.json         # Dependencias y scripts

````

## 🚀 Características

- Visualización **en tiempo real** de:
  - Ventas registradas
  - Comisiones calculadas por rango de fechas
  - Reglas de negocio aplicadas
- Filtro por fechas para generar dashboard de comisiones.
- Interfaz limpia, responsiva y con animaciones suaves.
- Lógica desacoplada en hooks (`useSeller`, `useSales`, `useRules`).
- Estilos CSS con enfoque moderno y responsivo.

## 📦 Instalación

```bash
# Clona el repositorio
git clone https://github.com/JuanDiego-sc/MiniCore2025UI
cd minicore-ui

# Instala las dependencias
npm install
````

## 🧪 Desarrollo local

Asegúrate de que el backend esté corriendo en `https://localhost:5160`.

```bash
# Ejecuta el proyecto
npm run dev
```

Abre tu navegador en: [http://localhost:5173](http://localhost:5173)

## 🖥️ Funcionalidad de la UI

* **Filtro por fechas**: permite al usuario establecer un período y obtener automáticamente los vendedores con sus respectivas comisiones calculadas desde el backend.
* **Vista de ventas**: muestra cada venta, su valor total, el vendedor y la regla aplicada.
* **Vista de reglas**: permite al usuario comprender la lógica de cálculo de comisiones.

## 🔗 Conexión con API

El archivo `src/lib/api/agent.ts` contiene la configuración base de Axios apuntando al backend:

```ts
const agent = axios.create({
  baseURL: 'https://localhost:5160/api'
});
```

Puedes cambiar este valor para entornos productivos.

## 📋 Scripts disponibles

* `npm run dev`: iniciar servidor de desarrollo.
* `npm run build`: compilar para producción.
* `npm run preview`: previsualizar build.
* `npm run lint`: ejecutar linter ESLint.

## ✅ Buenas Prácticas

* Tipado fuerte con `types.d.ts`.
* Código modular y componentes reutilizables.
* `eslint.config.js` personalizado con reglas para React 19 y TypeScript.
* Arquitectura limpia, separando lógica, presentación y datos.

## 📝 Licencia

Proyecto educativo con fines demostrativos. Puedes reutilizar este código para fines académicos y personales.

---

```

¿Deseas una versión del `README.md` para producción con configuración Docker o despliegue continuo (CI/CD)?
```
