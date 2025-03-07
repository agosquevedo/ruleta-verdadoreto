# 🎡 Verdad o Reto - Ruleta  

## 📌 Descripción
Esta es una aplicación web de **Verdad o Reto** interactiva con una **ruleta de categorías** y una **interfaz moderna**. Los participantes giran la ruleta para obtener una categoría (Fácil, Intermedio, Difícil), y luego pueden elegir entre **Verdad o Reto**. Si no cumplen, deben hacer un castigo aleatorio como **shots o ejercicios físicos**.

## 🚀 Tecnologías Utilizadas
- **React + Vite** ⚛️
- **Framer Motion** (para animaciones) 🎞️
- **CSS moderno con Glassmorphism** 🎨
- **JSON como base de datos** 🗂️

## 📂 Estructura del Proyecto
```
📂 reto-app
 ┣ 📂 public
 ┃ ┗ 📜 vite.svg  👈 Ícono de la app
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┃ ┗ 📜 react.svg  👈 Imagen de React
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 ChallengeCard.jsx 👈 Muestra el reto o la verdad
 ┃ ┃ ┣ 📜 ChallengeWheel.jsx 👈 Ruleta de categorías
 ┃ ┃ ┗ 📜 GameController.jsx 👈 Lógica del juego (Verdad/Reto)
 ┃ ┣ 📂 data
 ┃ ┃ ┗ 📜 challenges.json  👈 Archivo con los retos y verdades
 ┃ ┣ 📂 pages
 ┃ ┃ ┗ 📜 Home.jsx 👈 Página principal
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 ChallengeCard.css
 ┃ ┃ ┣ 📜 ChallengeWheel.css
 ┃ ┃ ┗ 📜 styles.css 👈 Estilos generales
 ┃ ┣ 📜 App.jsx 👈 Renderiza el juego
 ┃ ┣ 📜 index.css 👈 Estilos generales
 ┃ ┣ 📜 main.jsx 👈 Punto de entrada
 ┗ 📜 vite.config.js 👈 Configuración de Vite
```

## 🛠 Instalación y Ejecución
1. Clona este repositorio:
   ```sh
   git clone https://github.com/tuusuario/reto-app.git
   ```
2. Entra al directorio del proyecto:
   ```sh
   cd reto-app
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Ejecuta el servidor de desarrollo:
   ```sh
   npm run dev
   ```
5. Abre tu navegador y visita:
   ```sh
   http://localhost:5173
   ```

## 🎨 Estilos y Diseño
- **Fondo oscuro con Glassmorphism** ✨
- **Fuente `Quicksand` para un look más moderno**
- **Ruleta animada con `Framer Motion`**
- **Botones con hover y efectos llamativos**

## 📝 Funcionamiento
1. **Gira la ruleta** 🎡 → Obtendrás una categoría (Fácil, Intermedio, Difícil).
2. **Elige Verdad o Reto** 🤔 → Aparecerá un desafío acorde a la categoría.
3. **Si no cumples, hay castigo** 🏋️ → Shots o un ejercicio aleatorio (sentadillas, burpees, abdominales).
4. **¡Diviértete con amigos!** 🎉

## 🎯 Mejoras Futuras
✅ **Agregar un contador de retos completados.**
✅ **Opción de customizar los retos desde la interfaz.**
✅ **Modo multijugador con conexión en tiempo real.**

## 💖 Créditos
Hecho por **Aguitos** y **Chuca**✨

📌 **¿Sugerencias? ¡Abre un issue o envía un pull request!** 🚀