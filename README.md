# 🩸 Proyecto Login de Donantes de Sangre

Sistema de inicio de sesión para donantes y administradores en una clínica, con validación de campos, diseño responsivo y conexión a un panel de control simulado. Forma parte del módulo de **Programación Web**.

---

## 🔧 Estructura del Proyecto

El proyecto se compone de los siguientes archivos principales:

- `login.html`: Interfaz de login para donantes y administración.
- `registro.html`: Formulario de registro de nuevos usuarios.
- `dashboard.html`: Panel de bienvenida tras iniciar sesión.
- `login.css`: Estilos personalizados para el diseño visual y responsividad.
- `login.js`: Validación de campos y lógica de navegación.
- `/img/logo.png`: Logo principal.
- `/img/lab.png`: Imagen decorativa (donación de sangre).

---

## 📑 Explicación Técnica

### 🧩 HTML
- **Login (`login.html`)** incluye pestañas para cambiar entre Donantes y Administración, además de inputs accesibles y una interfaz atractiva.
- **Registro (`registro.html`)** solicita nombre, correo, sexo, contraseña y confirmación.
- **Dashboard (`dashboard.html`)** muestra próximas citas, historial de donaciones y perfil, con diseño limpio y mensajes motivacionales.

### 🎨 CSS (`login.css`)
- Estilo moderno y responsivo, usando flexbox y media queries.
- Colores suaves con buena accesibilidad visual.
- Inputs con íconos, botones personalizados, sombra y bordes redondeados.
- Imagen decorativa oculta en móvil para mejor usabilidad.

### 🧠 JavaScript (`login.js`)
- Botones de pestaña alternan clases `.active`.
- Valida campos de login: correo obligatorio, formato correcto y contraseña.
- Redirige al `dashboard.html` tras validación exitosa.
- Muestra mensajes de error dinámicos debajo del formulario.

---

## 🖼️ c. Capturas de pantalla

### Código ejecutándose en navegador:
![image](https://github.com/user-attachments/assets/9b9425be-f1b3-437a-b147-59c8e6a7c170)
![image](https://github.com/user-attachments/assets/0e4545a1-f595-4d64-b325-981af7d14673)
