 Biota Orgánicos – MVP React Native
Aplicación móvil creada con React Native + Expo para conectar consumidores y productores agroecológicos. Incluye funcionalidades de registro, login, persistencia local con AsyncStorage y autenticación con Firebase.

📦 Tecnologías Usadas
Expo (React Native)

Firebase Auth

@react-native-async-storage/async-storage

@react-native-picker/picker

React Navigation (Stack)

📁 Estructura del Proyecto
Copiar
Editar
biota_mvp/
├── App.jsx
├── firebaseConfig.js
├── screens/
│   ├── RegistroScreen.jsx
│   ├── LoginScreen.jsx
│   └── HomeScreen.jsx
├── assets/
│   └── logo.png
└── README.md
🚀 Instalación del Proyecto
bash
Copiar
Editar
git clone https://github.com/tu_usuario/biota_mvp.git
cd biota_mvp
yarn install
🔐 Configurar Firebase
Crea un proyecto en Firebase Console.

Habilita Authentication > Email/Password.

Copia tu configuración de Firebase y reemplaza en firebaseConfig.js:

js
Copiar
Editar
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_BUCKET",
  messagingSenderId: "TU_MESSAGING_ID",
  appId: "TU_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
📱 Ejecutar en Dispositivo
bash
Copiar
Editar
expo start
Abre con la app de Expo Go en Android o iOS.

Usa expo start -c para limpiar la caché si hay errores.

🧠 Funcionalidades
Registro de usuarios con dos tipos: Productor y Consumidor.

Campos dinámicos si el usuario es productor (como finca, municipio, productos, etc.).

Almacenamiento local con AsyncStorage.

Autenticación con Firebase.

Navegación entre pantallas (Login, Registro, Home).

📝 TODOs
🔐 Vincular también el Login con Firebase.

📦 Subida de productos desde el Productor.

🛒 Visualización y pedidos por parte del Consumidor.

☁️ Migrar almacenamiento local a Firestore.

✨ Créditos
desarrollado por Daniel Vargas Hermosa.

