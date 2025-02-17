### Requisitos del Proyecto - Módulo Backend

**1. Creación del Servidor:**
x El servidor debe estar desarrollado en **Node.js** utilizando el framework **Express**.

**2. Entidades y CRUDs:**
x El proyecto debe contar con **mínimo tres entidades**, que estén relacionadas entre sí.
- Cada entidad debe tener implementado **un CRUD completo** (Crear, Leer, Actualizar, Eliminar).
    x CRUD vehiculo
    x CRUD usuario
    x CRUD cliente
    x CRUD venta
x Una de las entidades debe ser obligatoriamente para la **gestión de usuarios**.

**3. Gestión de Usuarios:**
- La gestión de usuarios debe incluir:
  x Un **middleware de autenticación** para verificar el acceso.
  x Contraseñas **encriptadas** (por ejemplo, usando bcrypt).
  x Uso de **JSON Web Tokens (JWT)** para la autenticación.

**4. Base de Datos:**
x Se debe establecer conexión con una base de datos **MongoDB**.
x Para la definición de modelos y la lógica de interacción con la base de datos se debe utilizar **Mongoose**.

**5. Middleware de Autorización:**
x Es necesario implementar un middleware que valide que **solo los usuarios autenticados** puedan acceder a las rutas protegidas.

### Notas Importantes:
x Asegurarse de que las entidades tengan relaciones entre ellas para cumplir con el requisito de interconexión.
x Implementar buenas prácticas en la organización del código y manejo de errores.