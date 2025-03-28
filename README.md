# ROLLINGCLINIC

## Descripción
Este proyecto consiste en una página web para una clínica que permite la gestión de turnos médicos y la interacción entre pacientes, médicos y administradores. Está diseñada para ser completamente funcional desde dispositivos móviles, ofreciendo accesibilidad y una experiencia de usuario optimizada.

## Funcionalidades Principales

### Tipos de Usuarios
1. **Paciente**: Puede registrarse, iniciar sesión, buscar médicos, solicitar turnos y visualizar sus turnos.
2. **Médico**: Puede registrarse, iniciar sesión, gestionar su agenda y visualizar los turnos asignados.
3. **Administrador**: Aprueba los registros de usuarios.

### Características
- **Registro y Login:**
  - Registro diferenciado para pacientes y médicos mediante formularios específicos.
  - Login para pacientes y médicos desde una página compartida.
  - Validación y aprobación de registros por parte del administrador antes de habilitar el acceso.

- **Gestión de Turnos:**
  - **Pacientes:**
    - Buscar médicos por especialidad y disponibilidad.
    - Solicitar turnos indicando el motivo de consulta.
    - Visualizar los turnos solicitados desde su cuenta.
  - **Médicos:**
    - Recibir y visualizar turnos asignados desde un panel de control.

- **Página Principal:**
  - Página institucional simple que permite a los usuarios registrarse y loguearse.

## Tecnologías Utilizadas
- **Frontend:**
  - HTML5, CSS3, JavaScript (framework recomendado: React).
  - Diseño responsivo optimizado para dispositivos móviles (CSS Framework: Bootstrap).

- **Otros:**
  - Control de versiones: Git.

## Instalación y Configuración
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/josema-P020/RollingClinic-1.0.git
   cd RollingClinic-1.0
   ```

2. Instalar dependencias (ejemplo para Node.js):
   ```bash
   npm install
   ```
3. Iniciar el servidor:
   ```bash
    npm run dev
   ```

4. Acceder a la aplicación desde un navegador:
   [visita Rollingclinic](https://rollingclinic1.netlify.app/login)

## Roadmap
1. Implementación básica de registro y login.
2. Desarrollo de paneles para médicos y pacientes.
3. Gestión de turnos y notificaciones.
4. Optimización de diseño responsivo.
5. Despliegue en producción.

## Autores
Ramiro Nahuel Romano GitHub https://github.com/nahuel-11
Javier Mauricio Gómez GitHub https://github.com/JavierMauricioGomez
José Alvarez Domínguez GitHub https://github.com/joalvarez05
José Maria Perez GitHub https://github.com/josema-P020

## Contribuciones
¡Contribuciones son bienvenidas! Por favor, abre un _issue_ o envía un _pull request_ con tus sugerencias o mejoras.
