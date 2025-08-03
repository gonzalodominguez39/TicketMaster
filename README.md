# 🎫 Ticker Master

Ticker Master es una aplicación web para descubrir y explorar eventos de todo tipo (conciertos, conferencias, festivales, etc.) con funcionalidad de búsqueda y paginación.


## 🚀 Tecnologías utilizadas

- ⚛️ **React** – Librería principal para la construcción de la interfaz.
- 🧠 **TypeScript** – Tipado estático para mayor robustez del código.
- 📦 **React Paginate** – Control de paginación accesible y personalizable.
- 🪝 **Custom Hooks** – Separación de la lógica de negocio (`useEventsData`).
- 🖼️ **CSS Modules** – Estilos encapsulados por componente.

---



## ⚙️ Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/tuusuario/ticker-master.git
cd ticker-master

# 2. Instala las dependencias
npm install
# o
yarn install

# 3. Inicia el proyecto
npm run dev
# o
yarn dev

📁 Estructura del proyecto

src/
│
├── components/
│   ├── Navbar.tsx
│   ├── Events.tsx
│   └── ...
├── hooks/
│   └── useEventsData.ts
├── pages/
│   └── Home/
│       ├── Home.tsx
│       └── Home.module.css
├── types/
│   └── event.ts
├── App.tsx
└── main.tsx
