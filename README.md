# 📚 Gestión de Estudiantes - CRUD con LocalStorage

Una aplicación web moderna para la gestión de estudiantes desarrollada con React y Vite. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) con persistencia de datos en el navegador mediante localStorage.

## 🚀 Características

- **Gestión completa de estudiantes**: Crear, editar, eliminar y visualizar registros
- **Persistencia de datos**: Los datos se guardan automáticamente en localStorage
- **Interfaz intuitiva**: Diseño responsive con Bootstrap 5
- **Validación de formularios**: Campos obligatorios con mensajes de error
- **Confirmación de eliminación**: Diálogo de confirmación antes de eliminar registros
- **Modo edición**: Edición inline de registros existentes

## 🛠️ Tecnologías Utilizadas

- **React 18.2.0** - Biblioteca de JavaScript para interfaces de usuario
- **Vite 4.4.5** - Herramienta de construcción rápida para desarrollo
- **Bootstrap 5.3.2** - Framework CSS para diseño responsive
- **LocalStorage** - Almacenamiento local del navegador
- **ESLint** - Linter para mantener calidad del código

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

## 🚀 Creación del Proyecto desde Cero

Si quieres crear este proyecto desde el inicio, sigue estos pasos:

### 1. **Crear el proyecto con Vite**
```bash
npm create vite@latest crud-students-localstorage -- --template react
cd crud-students-localstorage
```

### 2. **Instalar dependencias base**
```bash
npm install
```

### 3. **Instalar Bootstrap (opcional pero recomendado)**
```bash
npm install bootstrap@5.3.2
```

### 4. **Configurar ESLint (ya incluido en el template)**
```bash
npm run lint
```

### 5. **Ejecutar el proyecto**
```bash
npm run dev
```

## 🔧 Instalación (Proyecto Existente)

Si ya tienes el proyecto clonado:

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd crud-students-localstorage
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   Navega a `http://localhost:5173` para ver la aplicación

## 📖 Uso

### Agregar un Nuevo Estudiante
1. Completa todos los campos del formulario:
   - Documento (número)
   - Nombre
   - Apellido
   - Teléfono
   - Correo electrónico
2. Haz clic en "Registrar"

### Editar un Estudiante
1. Haz clic en el botón "Editar" en la fila del estudiante
2. Los datos se cargarán automáticamente en el formulario
3. Modifica los campos necesarios
4. Haz clic en "Editar" para guardar los cambios

### Eliminar un Estudiante
1. Haz clic en el botón "Eliminar" en la fila del estudiante
2. Confirma la eliminación en el diálogo emergente

### Cancelar Operación
- Haz clic en "Cancelar" para limpiar el formulario y salir del modo edición

## 🏗️ Estructura del Proyecto

### **Estructura Inicial (después de crear con Vite)**
```
crud-students-localstorage/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx                # Componente principal (modificar)
│   └── main.jsx               # Punto de entrada
├── index.html                 # Archivo HTML principal (modificar)
├── package.json               # Dependencias y scripts
├── vite.config.js             # Configuración de Vite
├── .eslintrc.cjs              # Configuración de ESLint
└── README.md                  # Documentación
```

### **Estructura Final (después del desarrollo)**
```
crud-students-localstorage/
├── public/
│   └── vite.svg
├── src/
│   ├── components/            # Carpeta creada manualmente
│   │   ├── Error.jsx          # Componente para mostrar errores
│   │   ├── Estudiante.jsx     # Componente individual de estudiante
│   │   ├── Formulario.jsx     # Formulario de registro/edición
│   │   └── ListaEstudiantes.jsx # Tabla de estudiantes
│   ├── App.jsx                # Componente principal (modificado)
│   └── main.jsx               # Punto de entrada
├── index.html                 # Archivo HTML principal (modificado)
├── package.json               # Dependencias y scripts
├── vite.config.js             # Configuración de Vite
├── .eslintrc.cjs              # Configuración de ESLint
└── README.md                  # Este archivo
```

### **Archivos a Crear/Modificar**

1. **Crear carpeta `components/`** en `src/`
2. **Crear componentes React** en la carpeta `components/`
3. **Modificar `App.jsx`** para integrar los componentes
4. **Modificar `index.html`** para incluir Bootstrap

## 🔧 Scripts Disponibles

### **Comandos Principales**
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

### **Comandos Adicionales Útiles**
```bash
# Verificar versión de Node.js
node --version

# Verificar versión de npm
npm --version

# Limpiar caché de npm (si hay problemas)
npm cache clean --force

# Ver dependencias instaladas
npm list

# Actualizar dependencias
npm update

# Instalar una dependencia específica
npm install nombre-paquete

# Instalar dependencia de desarrollo
npm install --save-dev nombre-paquete
```

## 📱 Funcionalidades Técnicas

### Gestión de Estado
- Utiliza React Hooks (`useState`, `useEffect`) para el manejo del estado
- Estado centralizado en el componente `App.jsx`
- Sincronización automática con localStorage

### Persistencia de Datos
- Los datos se guardan automáticamente en localStorage
- Recuperación automática al cargar la aplicación
- Estructura de datos: Array de objetos con propiedades `id`, `documento`, `nombre`, `apellido`, `correo`, `telefono`

### Validación
- Validación de campos obligatorios
- Mensajes de error personalizados
- Prevención de envío de formularios incompletos

## 🎨 Interfaz de Usuario

- **Diseño responsive** que se adapta a diferentes tamaños de pantalla
- **Bootstrap 5** para estilos modernos y consistentes
- **Tabla organizada** con columnas claras para cada campo
- **Botones de acción** con colores distintivos (verde para guardar, azul para editar, rojo para eliminar)

## 🔒 Consideraciones de Seguridad

- **Validación del lado del cliente** para campos obligatorios
- **Confirmación de eliminación** para prevenir borrados accidentales
- **Sanitización básica** de datos de entrada

## 🚀 Despliegue

Para desplegar la aplicación en producción:

1. **Construye la aplicación**
   ```bash
   npm run build
   ```

2. **Los archivos de producción se generan en la carpeta `dist/`**

3. **Sube el contenido de `dist/` a tu servidor web**



## 👨‍💻 Autor

**Desarrollado por:**

👥 Daniel Alejandro Vargas Uzuriaga <br>
👥 Daniela López Chica <br>
👥 Jonathan Cardona Calderon <br>
👥 Luz Eleidis Baldovino González

:computer: Programa Tecnólogo en Análisis y Desarrollo de Software
Ficha Técnica 2977435

![Logo SENA](https://docs.google.com/drawings/d/e/2PACX-1vRHtXZUAI_yYltgXtZnIChIn1CDQyMCtZJLQ8R-5TiVO_IjaDVPsQnYlPEotP63Jz_I06loshw4yA1X/pub?w=50&h=50)

---

⭐ Si este proyecto te ha sido útil, ¡no olvides darle una estrella!
