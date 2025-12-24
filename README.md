# TaskFlow Fullstack

Una aplicación de gestión de tareas diseñada bajo el paradigma de separación de responsabilidades, utilizando un stack tecnológico moderno, tipado estricto y despliegue automatizado mediante contenedores.

---

## Funcionalidades Principales

El proyecto permite gestionar el ciclo de vida completo de una tarea:
* **Creación de Tareas:** Registro con título (mínimo 3 caracteres) y fecha de entrega opcional.
* **Gestión de Estados:** Transición entre estados: Pendiente, En progreso y Completado.
* **Persistencia de Datos:** Almacenamiento en base de datos PostgreSQL, garantizando integridad y persistencia.
* **Validación de Datos:** Validación en el servidor mediante la librería Zod, asegurando la consistencia de los datos ingresados.

---

## Stack Tecnológico y Estructura

### **Backend (Node.js & Express)**
Implementado bajo el patrón MVC (Modelo-Vista-Controlador):


### **Frontend (React & TypeScript)**
Estructura modular para facilitar el mantenimiento y escalabilidad:


---

## Infraestructura y Despliegue

El proyecto se encuentra contenerizado mediante Docker para garantizar la paridad entre los entornos de desarrollo y producción.

* **Docker Compose:** Orquestación de tres servicios principales:
    1.  **db:** Base de datos relacional PostgreSQL.
    2.  **backend:** API REST con soporte para recarga en caliente (Hot-Reload).
    3.  **frontend:** Aplicación construida con Vite.
* **CI/CD (GitHub Actions):** Flujo de integración continua que verifica la integridad de los tipos de TypeScript y la construcción del proyecto en cada envío de código.

---

## Guía de Inicio Rápido

### Requisitos previos
* Docker y Docker Compose instalados en el sistema.

### Instalación y Ejecución
1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
2. Ejecutar docker compose:
   ```bash
   docker-compose up --build
3. Ya es posible acceder al back y front
    Interfaz de usuario: http://localhost:5173
    API: http://localhost:3000/tasks
