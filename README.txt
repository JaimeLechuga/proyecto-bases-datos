# **Fajas Colombianas - Ecommerce** 💍👗

Bienvenido al repositorio del sistema ecommerce especializado en **fajas colombianas, vestidos de novia y accesorios para bodas**.

Este proyecto fue desarrollado como una solución práctica para negocios que requieren conocer las **preferencias de sus clientes**, especialmente en productos donde la decisión de compra suele hacerse presencialmente.

---

## **🎯 Propósito del Proyecto**

Más que un simple CRUD, este sistema está centrado en una **lista de deseos interactiva** que permite identificar los productos más deseados por los clientes. Ideal para negocios de moda nupcial donde las clientas desean probar múltiples productos antes de decidirse.

El objetivo principal es que el sistema ayude a:

- **Visualizar tendencias de deseo**
- **Priorizar el inventario y la atención al cliente**
- **Facilitar la gestión de productos y stock**

---

## **📦 Características Clave**

- ✅ Agregar productos desde el frontend (manual)
- 💖 Agregar/eliminar productos a la lista de deseos
- 📊 Visualización automática del catálogo desde la base de datos
- 🧠 Uso de procedimientos y triggers para manejar stock y auditoría
- 📁 Estructura conectada: **MySQL + Express + React**

---

## **🛠️ Tecnologías Utilizadas**
| Área         | Tecnologías                                |
|--------------|---------------------------------------------|
| Frontend     | React, Axios, React Router, CSS Modules     |
| Backend      | Node.js, Express, MySQL2                    |
| Base de Datos| MySQL (Triggers, Procedimientos, Funciones) |
| Herramientas | Git, Postman, MySQL Workbench               |

---

## **⚙️ Configuración del Entorno**

### Requisitos
- Node.js v16+
- MySQL 8.0+
- Git

### Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/JaimeLechuga/proyecto-bases-datos.git
   cd fajas-colombianas
````

2. Configura la base de datos:

   * Importa `database/schema.sql` en tu servidor MySQL.
   * Edita el archivo `backend/config/db.js` y reemplaza `'tuusuario'` y `'tucontra'` con tus credenciales locales.

3. Instala dependencias:

   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

---

## **🚀 Ejecución**

1. Inicia el backend:

   ```bash
   cd backend
   npm start
   ```

   > Disponible en `http://localhost:5001`

2. Inicia el frontend:

   ```bash
   cd frontend
   npm start
   ```

   > Abre automáticamente en `http://localhost:3000`

---

## **📂 Estructura del Proyecto**

```
fajas-colombianas/
├── backend/
│   ├── config/            # Conexión a MySQL
│   ├── controllers/       # Lógica de la API
│   ├── database/          # Scripts SQL
│   ├── routes/            # Rutas de la API
│   └── app.js             # Servidor principal
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Páginas principales
│   │   ├── services/      # Comunicación con API
│   │   └── App.js         # App principal
└── README.md
```

---

## **🔗 Funcionalidad de API Principal**

| Método | Endpoint          | Función                           |
| ------ | ----------------- | --------------------------------- |
| GET    | `/api/productos`  | Lista todos los productos         |
| POST   | `/api/productos`  | Agrega un nuevo producto          |
| GET    | `/api/deseos`     | Muestra lista de deseos           |
| POST   | `/api/deseos`     | Agrega producto a lista de deseos |
| DELETE | `/api/deseos/:id` | Quita producto de la lista        |

---

## **💡 Extras Técnicos**

* **Base de datos prellenada** con más de 60 productos
* **Triggers de auditoría** para registrar cambios
* **Procedimientos SQL** para control de inventario
* **Función SQL** para calcular descuentos

---

## **📄 Licencia**

MIT © Jaime 2023

---

## **📬 Contacto**

📧 [l21550308@chihuahua2.tecnm.mx](mailto:l21550308@chihuahua2.tecnm.mx)

---

````

---
