Aquí está tu README mejorado y corregido, con los ajustes solicitados y algunas mejoras adicionales:

```markdown
# **Fajas Colombianas - Ecommerce** 💍👗

Bienvenido al repositorio del sistema ecommerce especializado en **fajas colombianas, vestidos de novia y accesorios para bodas**.

## **⚠️ Nota Importante sobre Puertos**
El proyecto usa por defecto el puerto **5001** para el backend debido a que:
- macOS suele usar el puerto 5000 para servicios del sistema (Control Center)
- Si necesitas cambiar el puerto, modifica `backend/app.js` y `frontend/src/services/api.js`

---

## **🎯 Propósito del Proyecto**
Sistema con **lista de deseos interactiva** para identificar preferencias de clientes en moda nupcial, permitiendo:
- 📊 Visualizar tendencias de productos deseados
- 📦 Gestionar inventario inteligentemente
- 💡 Mejorar la experiencia de compra presencial

---

## **🛠️ Tecnologías Utilizadas**
| Área         | Tecnologías                                |
|--------------|---------------------------------------------|
| **Frontend** | React, Axios, React Router                 |
| **Backend**  | Node.js, Express, MySQL2                   |
| **Database** | MySQL (Triggers, Procedimientos)           |
| **Herramientas** | Git, Postman, MySQL Workbench          |

---

## **⚡ Instalación Rápida**

```bash
# 1. Clonar repositorio
git clone https://github.com/JaimeLechuga/proyecto-bases-datos.git
cd fajas-colombianas

# 2. Configurar MySQL (Requisito: Tener MySQL instalado)
mysql -u root -p < database/schema.sql

# 3. Configurar credenciales (editar archivo)
nano backend/config/db.js  # Actualiza usuario/contraseña

# 4. Instalar dependencias
cd backend && npm install
cd ../frontend && npm install
```

---

## **🚀 Ejecución**
```bash
# Terminal 1 (Backend - Puerto 5001)
cd backend
node app.js

# Terminal 2 (Frontend - Puerto 3000)
cd ../frontend
npm start
```

**Acceso:**
- Backend: http://localhost:5001
- Frontend: http://localhost:3000

---

## **🔧 Solución de Problemas Comunes**

### **Error de puerto en uso**
```bash
# Verificar procesos usando el puerto 5001
sudo lsof -i :5001

# Si está ocupado, cambiar puerto en:
# 1. backend/app.js (línea del listen)
# 2. frontend/src/services/api.js (baseURL)
```

### **Error de conexión a MySQL**
Verifica que en `backend/config/db.js` tengas:
```javascript
{
  host: 'localhost',
  user: 'root',       // Usuario de tu MySQL
  password: 'tu_contraseña',  // Tu contraseña
  database: 'fajas_colombianas'
}
```

---

## **📂 Estructura del Proyecto**
```
fajas-colombianas/
├── backend/
│   ├── config/
│   │   └── db.js       # Configuración de conexión MySQL
│   ├── database/
│   │   ├── schema.sql  # Estructura + datos iniciales
│   │   └── triggers.sql # Triggers adicionales
├── frontend/
│   └── src/
│       └── services/
│           └── api.js  # Configuración de Axios
```

---

## **🔌 Endpoints Clave**
| Método | Endpoint          | Función                           |
|--------|-------------------|-----------------------------------|
| POST   | `/api/productos`  | Agregar producto (ejemplo JSON):  
```json
{
  "nombre": "Faja Postparto",
  "precio": 75.50,
  "stock": 20,
  "categoria_id": 1
}
```

---

## **📄 Licencia**
MIT © [Jaime Lechuga](mailto:l21550308@chihuahua2.tecnm.mx) - 2023
```
---
