# 🎨 Sistema de Diseño - TicketMaster

## Descripción General

Este proyecto implementa un **sistema de diseño profesional y consistente** con una paleta de colores moderna, tipografía elegante y componentes reutilizables.

## 📚 Estructura de Estilos

### Archivos Principales

```
src/
├── index.css                 # Estilos globales y variables CSS
├── App.css                   # Estilos de la aplicación
├── styles/
│   ├── pagination.css        # Estilos de paginación
│   ├── components.css        # Componentes reutilizables
│   └── utilities.css         # Clases utilitarias
```

### Componentes

```
components/
├── Events/
│   ├── Events.module.css     # Contenedor de eventos
│   └── components/
│       └── EventItem/
│           └── EventItem.module.css  # Tarjeta individual
├── Navbar/
│   └── styles.css            # Estilos de navegación
└── SignUpForm/
    └── (estilos locales)
```

### Vistas

```
views/
├── Home/
│   └── Home.module.css       # Página principal
├── Detail/
│   └── Detail.module.css     # Página de detalles
├── Profile/
│   └── Profile.module.css    # Perfil de usuario
└── Error404/
    └── Error404.module.css   # Página de error
```

## 🎨 Variables CSS

### Tipografía

```css
--font-primary: 'Inter'      /* Fuente principal */
--font-secondary: 'Poppins'  /* Fuente de títulos */
```

### Paleta de Colores

#### Primaria
- `--color-primary: #6500e0` - Color principal
- `--color-primary-light: #7c3aed` - Variante clara
- `--color-primary-dark: #4c1d95` - Variante oscura
- `--color-primary-darker: #2d1b69` - Variante muy oscura

#### Secundaria
- `--color-secondary: #1e3a8a` - Azul secundario
- `--color-secondary-light: #1e40af` - Más clara
- `--color-secondary-dark: #0f172a` - Más oscura

#### Acentos
- `--color-accent-success: #10b981` - Verde
- `--color-accent-warning: #f59e0b` - Naranja
- `--color-accent-error: #ef4444` - Rojo
- `--color-accent-info: #0ea5e9` - Cian

#### Neutros
- `--color-neutral-white: #f8f9fa` - Blanco
- `--color-neutral-light: #e9ecef` - Gris claro
- `--color-neutral-gray: #94a3b8` - Gris
- `--color-neutral-dark: #1a1a1a` - Gris oscuro
- `--color-neutral-darker: #0f0f0f` - Muy oscuro

### Espaciado

```css
--spacing-2xs: 4px
--spacing-xs: 8px
--spacing-sm: 12px
--spacing-md: 16px
--spacing-lg: 20px
--spacing-xl: 24px
--spacing-2xl: 32px
--spacing-3xl: 40px
```

### Border Radius

```css
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 20px
--radius-full: 999px
```

### Sombras

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2)
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.3)
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.4)
--shadow-xl: 0 12px 40px rgba(45, 27, 105, 0.3)
--shadow-glow: 0 0 20px rgba(101, 0, 224, 0.3)
```

### Transiciones

```css
--transition-fast: 0.15s ease
--transition-normal: 0.3s ease
--transition-slow: 0.5s ease
```

## 🎯 Componentes Reutilizables

### Botones

```html
<!-- Variantes -->
<button class="btn btn-primary">Botón Primario</button>
<button class="btn btn-secondary">Botón Secundario</button>
<button class="btn btn-success">Botón Éxito</button>
<button class="btn btn-danger">Botón Peligro</button>
<button class="btn btn-outline">Botón Outline</button>

<!-- Tamaños -->
<button class="btn btn-sm">Pequeño</button>
<button class="btn btn-lg">Grande</button>
```

### Tarjetas

```html
<div class="card">
  <h3 class="card-header">Título</h3>
  <div class="card-body">Contenido</div>
  <div class="card-footer">
    <button class="btn btn-primary">Acción</button>
  </div>
</div>
```

### Badges

```html
<span class="badge badge-primary">Etiqueta</span>
<span class="badge badge-success">Éxito</span>
<span class="badge badge-warning">Advertencia</span>
<span class="badge badge-danger">Peligro</span>
```

### Alertas

```html
<div class="alert alert-success">
  <div class="alert-icon">✓</div>
  <div class="alert-content">
    <div class="alert-title">Éxito</div>
    <div class="alert-message">Operación completada</div>
  </div>
</div>
```

## 🎨 Clases Utilitarias

### Espaciado

```css
.m-md, .mt-lg, .mb-xl, .p-md, .pt-lg, .pb-xl
```

### Texto

```css
.text-center, .text-lg, .font-bold, .text-primary
```

### Display

```css
.flex, .flex-col, .items-center, .justify-between, .gap-md
```

### Dimensiones

```css
.w-full, .w-1/2, .h-full, .min-h-screen
```

### Bordes

```css
.rounded-lg, .border, .border-primary
```

### Sombras

```css
.shadow-sm, .shadow-md, .shadow-lg, .shadow-xl
```

### Transiciones

```css
.transition-fast, .transition-normal, .transition-slow
```

## 📱 Responsive Design

El proyecto implementa **breakpoints profesionales**:

```css
@media (max-width: 1200px) { /* Tablets grandes */ }
@media (max-width: 1024px) { /* Tablets */ }
@media (max-width: 768px)  { /* Tablets pequeños */ }
@media (max-width: 480px)  { /* Móviles */ }
```

## ✨ Características de Diseño

### 1. **Fondos con Gradientes Animados**
- Fondo principal con gradiente de 135 grados
- Animación suave que cambia de posición cada 15 segundos

### 2. **Efecto Glassmorphism**
- Uso de `backdrop-filter: blur()` para efecto de cristal
- Fondos semi-transparentes en componentes

### 3. **Sombras Suaves**
- Sombras en cascada para profundidad visual
- Efecto de "glow" en elementos interactivos

### 4. **Animaciones Suaves**
- Transiciones de 0.15s, 0.3s y 0.5s
- Transformaciones en hover (scale, translateY)

### 5. **Tipografía Premium**
- Inter para cuerpo de texto
- Poppins para títulos y encabezados
- Text-shadow sutil para mejor legibilidad

## 🎯 Mejoras Implementadas

✅ **Variables CSS centralizadas** - Fácil mantenimiento y consistencia
✅ **Paleta de colores profesional** - 15+ colores base
✅ **Componentes reutilizables** - Botones, tarjetas, badges, alertas
✅ **Clases utilitarias** - 100+ clases helper
✅ **Responsive design** - Mobile-first approach
✅ **Animaciones suaves** - Transiciones profesionales
✅ **Accesibilidad mejorada** - Focus states, contrast ratios
✅ **Documentación completa** - Guía de uso

## 🚀 Uso Recomendado

### Para nuevos componentes

1. Usar **variables CSS** en lugar de valores hardcodeados
2. Aplicar **clases reutilizables** cuando sea posible
3. Seguir el patrón de **respuesta adaptable**
4. Mantener **coherencia visual** con el sistema

### Ejemplo

```css
/* ✅ Correcto */
.miComponente {
  background: var(--color-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

/* ❌ Evitar */
.miComponente {
  background: #6500e0;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease;
}
```

## 📖 Referencias

- **Google Fonts**: Inter, Poppins
- **Design System**: Custom CSS Variables
- **Estándar**: CSS 3 + Flexbox + Grid
- **Navegadores**: Chrome, Firefox, Safari, Edge (últimas 2 versiones)

---

**Última actualización**: Noviembre 2025
**Versión**: 1.0.0
**Mantenedor**: TicketMaster Team
