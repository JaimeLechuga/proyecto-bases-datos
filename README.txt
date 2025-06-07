# **Fajas Colombianas - Ecommerce** 🛍️


Bienvenido al repositorio del sistema de ecommerce especializado en **fajas colombianas, vestidos de novia y accesorios**. Este proyecto incluye:


- **Frontend**: Aplicación React con interfaz moderna
- **Backend**: API REST con Node.js y Express
- **Base de Datos**: MySQL con estructura normalizada


---


## **🚀 Características Principales**
- **Gestión de productos** (CRUD completo)
- **Lista de deseos** interactiva
- **Filtros por categorías**
- **Sistema de inventario**
- **Procedimientos almacenados y triggers** en MySQL


---


## **🛠️ Tecnologías Utilizadas**
| **Área**       | **Tecnologías**                          |
|----------------|------------------------------------------|
| Frontend       | React, Axios, React Router, CSS Modules  |
| Backend        | Node.js, Express, MySQL2                 |
| Base de Datos  | MySQL (Triggers, Procedimientos, Funciones) |
| Herramientas   | Git, Postman, MySQL Workbench            |


---


## **⚙️ Configuración del Entorno**


### **Requisitos Previos**
- Node.js v16+
- MySQL 8.0+
- Git


### **Instalación**
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/fajas-colombianas.git
   cd fajas-colombianas
   ```


2. **Configura la base de datos**:
   - Importa el script SQL desde `database/schema.sql`
   - Configura las variables en `backend/config/db.js`


3. **Instala dependencias**:
   ```bash
   # Backend
   cd backend
   npm install


   # Frontend
   cd ../frontend
   npm install
   ```


---


## **🚦 Ejecución**
1. **Inicia el backend**:
   ```bash
   cd backend
   npm start
   ```
   > El servidor estará en `http://localhost:5001`


2. **Inicia el frontend**:
   ```bash
   cd frontend
   npm start
   ```
   > La aplicación se abrirá en `http://localhost:3000`


---


## **📂 Estructura del Proyecto**
```
fajas-colombianas/
├── backend/
│   ├── controllers/       # Lógica de endpoints
│   ├── database/          # Scripts SQL
│   ├── models/            # Modelos de datos
│   ├── routes/            # Rutas de la API
│   └── app.js             # Servidor principal
│
├── frontend/
│   ├── public/            # Assets estáticos
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Vistas principales
│   │   ├── services/      # Conexión con API
│   │   └── App.js         # Punto de entrada
│
└── README.md              # Este archivo
```


---


## **🔍 Endpoints Clave (API)**
| **Método** | **Endpoint**               | **Descripción**                |
|------------|----------------------------|--------------------------------|
| GET        | `/api/productos`           | Obtener todos los productos    |
| POST       | `/api/productos`           | Crear nuevo producto           |
| GET        | `/api/deseos`              | Listar productos deseados      |
| DELETE     | `/api/deseos/:id`          | Eliminar de lista de deseos    |


---


## **💡 Extras Incluidos**
- **Base de datos pre-poblada** con 60 productos de ejemplo
- **Triggers** para auditoría de cambios
- **Procedimientos almacenados** para gestión de stock
- **Función SQL** para cálculos de descuentos


---


## **🤝 Contribución**
1. Haz fork del proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Agrega X funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request


---


## **📄 Licencia**
MIT © Jaime 2023


---


## **📧 Contacto**
¿Preguntas? Contacta al desarrollador:  
📩 l21550308@chihuahua2.tecnm.mx 




---


