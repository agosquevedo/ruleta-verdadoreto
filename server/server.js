const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Permitir conexiones desde cualquier frontend
    methods: ["GET", "POST"]
  }
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("🔌 Cliente conectado:", socket.id);

  // Evento para iniciar el giro de la ruleta
  socket.on("spin", () => {
    console.log("🎡 Ruleta girando...");
    io.emit("spinning"); // Notificar a todos los clientes que está girando
  });

  // Evento para enviar el resultado
  socket.on("result", (data) => {
    console.log("🏆 Resultado:", data);
    io.emit("result", data); // Enviar el resultado a todos los clientes
  });

  socket.on("disconnect", () => {
    console.log("❌ Cliente desconectado:", socket.id);
  });
});

server.listen(3001, () => {
  console.log("🚀 Servidor escuchando en http://localhost:3001");
});
