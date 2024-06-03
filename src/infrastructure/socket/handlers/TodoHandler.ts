import { Socket } from "socket.io";

const todoHandler = (socket: Socket) => {
    socket.on("message", () => {
        socket.emit("message", {});
    });
};

export default todoHandler;
