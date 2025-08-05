# 🦸‍♂️ StarTrackHeroes App

Bienvenido a **StarTrackHeroes App**, una aplicación móvil en **React Native** diseñada para gestionar equipos de superhéroes de forma eficiente. Este repositorio demuestra mis habilidades técnicas en la construcción de aplicaciones escalables, rápidas y fáciles de usar, utilizando **React Native**, **TypeScript** y **Redux**.

---

## 🚀 Funcionalidades

### 🔹 Funcionalidad principal
- **Gestión de superhéroes**: Visualiza, busca y filtra superhéroes mediante una barra de búsqueda dinámica.
- **Creación de equipos**: Crea y administra equipos personalizados con nombre.
- **Autenticación biométrica**: Asegura la creación de equipos con autenticación por huella o rostro (implementado con Expo Local Authentication).
- **Agregar/Quitar héroes**: Añade o elimina superhéroes de un equipo.
- **Carga esquelética**: Se muestran tarjetas esqueléticas mientras se cargan los datos para una mejor experiencia de usuario.

### 🔧 Aspectos técnicos destacados
- **Optimización de listas**: Renderizado eficiente con `FlatList` para manejar listas grandes.
- **Gestión de estado con Redux**: Estado centralizado para superhéroes, favoritos y equipos.
- **Integración con TypeScript**: Código tipado para mayor mantenibilidad y menos errores.
- **Estilizado dinámico**: Uso de componentes estilizados para una UI atractiva y adaptable.

---

## 🛠️ Instalación

### 📋 Requisitos previos
- Node.js >= 14.x
- npm o yarn
- Expo CLI
- Android Studio o Xcode (para correr la app en dispositivo o emulador)

### 📦 Pasos para instalar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/orellanamr/startrackheroes-app.git
   ```
2. Ingresa al directorio del proyecto:
   ```bash
   cd startrackheroes-app
   ```
3. Instala las dependencias:
   ```bash
   yarn install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npx expo start
   ```
5. Corre la app en tu dispositivo o emulador:

   - **Android**:  
     ```bash
     npm run android
     ```

   - **iOS**:  
     ```bash
     npm run ios
     ```

---

## 📲 Uso de la aplicación

### 🧑‍🤝‍🧑 Crear equipos
- Pulsa el botón "+" en la pantalla de equipos.
- Autentícate con biometría (huella o rostro).
- Ingresa un nombre y presiona "Crear equipo".

### 🔁 Gestionar equipos
- Toca una tarjeta de equipo para ver su detalle.
- Añade héroes usando la barra de búsqueda.
- Elimina héroes con el botón de eliminar.

### 🔍 Buscar superhéroes
- Usa la barra de búsqueda en la pantalla de inicio.
- Filtra por nombre o nombre real.
- Los resultados se actualizan dinámicamente mientras escribís.

---

## 📈 Plan de optimización futura

### 🧪 Escalabilidad (si la cantidad de superhéroes crece)
- **Paginación**:
  - Actualmente se cargan todos los datos de una vez. Si la lista crece, sería ideal implementar paginación para cargar por partes.
  - Carga incremental al hacer scroll.
  
- **FlatList con carga limitada**: Ya estoy usando FlatList, que solo renderiza los elementos visibles, lo cual ayuda al rendimiento.
  
- **Mostrar cantidad de resultados**: Sería útil mostrar cuántos héroes coinciden al buscar, para dar mejor feedback al usuario.
  
- **Buscar formas de reducir el tiempo de carga**: Usar almacenamiento local (como AsyncStorage) podría ayudar para guardar temporalmente algunos datos si no cambian con frecuencia.

---

### ¿Qué haría si la app se siente lenta?

- **Revisaría el flujo de datos**: Buscaría si hay renderizados innecesarios o llamadas a la API repetidas.
  
- **Agregaría debounce a la barra de búsqueda**: Para evitar hacer una búsqueda en cada letra que se escribe, se puede esperar unos milisegundos después de que el usuario termine de tipear.
  
- **Optimización visual**: Cargar solo imágenes o estadísticas cuando sean necesarias (esto me gustaría probar en el futuro).
  
- **Mediría tiempos de respuesta**: Usaría console logs o herramientas básicas para identificar qué partes tardan más y por qué.

---

## ⏳ Trabajo pendiente

### 🔐 Turbo Module para autenticación biométrica

El enunciado pedía implementar un Turbo Module nativo para manejar la autenticación, pero no logré completarlo por falta de experiencia con desarrollo nativo (Java/Kotlin o Swift/Obj-C). Sin embargo, logré implementar la autenticación biométrica usando Expo Local Authentication, lo cual permite probar la funcionalidad en esta versión de la app.

Con más tiempo, me gustaría aprender más sobre cómo crear Turbo Modules personalizados y poder implementarlo como se solicitaba originalmente.

---

## 💻 Tecnologías usadas

- **React Native**: Framework de desarrollo móvil cross-platform.
- **TypeScript**: Tipado estático para mayor robustez.
- **Redux Toolkit**: Manejo de estado moderno.
- **Expo**: Plataforma de desarrollo para apps React Native.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!

1. Haz un fork del repo
2. Crea una nueva rama:
   ```bash
   git checkout -b feature-nombre
   ```
3. Realiza tus cambios:
   ```bash
   git commit -m "feat: agregar feature-nombre"
   ```
4. Haz push a tu rama:
   ```bash
   git push origin feature-nombre
   ```
5. Crea un Pull Request

---

## 📬 Contacto

- GitHub: [@orellanamr](https://github.com/orellanamr)

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.