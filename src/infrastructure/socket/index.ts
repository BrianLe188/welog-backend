import { Server } from "socket.io";
import todoHandler from "./handlers/TodoHandler";
import { Server as HttpServer } from "http";

const initializeSocket = (server: HttpServer) => {
    const io = new Server(server);

    io.on("connection", (socket) => {
        console.log("User connected");

        todoHandler(socket);

        socket.on("disconnect", () => {
            console.log("Aser disconnected");
        });
    });

    return io;
};

export default initializeSocket;
