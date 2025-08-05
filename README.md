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

### 🧪 Escalabilidad
- **Paginación**:
  - Divide los datos de superhéroes en páginas.
  - Carga incremental al hacer scroll.

- **Optimización de listas**:
  - Usar `getItemLayout` para mejorar el rendimiento.
  - Virtualización para renderizar solo lo visible.

- **Mejoras en búsqueda**:
  - Mostrar número de resultados.
  - Agregar debounce para evitar llamadas excesivas a la API.

- **Turbo Module para autenticación**:
  - Reemplazar `Expo Local Authentication` por un módulo nativo.
  - Exponer un método como:
    ```ts
    authenticate: (
      onSuccess: () => void,
      onFailure: (error: BiometricAuthenticationError) => void
    ) => void
    ```

---

### 📦 Manejo de grandes volúmenes de datos

- **Filtrado en servidor**:  
  Desplazar la lógica de búsqueda al backend para aliviar el frontend.

- **Caching**:  
  Usar Redux Persist o AsyncStorage para datos frecuentes.

- **Lazy Loading**:  
  Cargar imágenes y estadísticas de poder solo cuando se necesiten.

---

### 🚀 Mejora de rendimiento

1. **Analizar cuellos de botella**:  
   Usar herramientas como Flipper o React Native Debugger.

2. **Optimizar llamadas a la API**:  
   Evitar duplicaciones y agregar debounce.

3. **Reducir renderizados innecesarios**:  
   Usar `React.memo` y `useCallback`.

4. **Optimización de imágenes**:  
   Comprimir recursos y usar placeholders.

---

## ⏳ Trabajo pendiente

### 🔐 Turbo Module para biometría
Actualmente se utiliza `Expo Local Authentication`, pero planeo migrarlo a un módulo nativo por rendimiento y flexibilidad.

- Mejor manejo de errores
- Logging avanzado
- Compatibilidad con más dispositivos

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

## 📝 Licencia

Este proyecto está bajo la licencia MIT.  
Ver archivo `LICENSE` para más detalles.

---

## 📬 Contacto

- GitHub: [@orellanamr](https://github.com/orellanamr)