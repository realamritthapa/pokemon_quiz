export const messageHandler = (socket, data, io) => {
  let info = {
    id: socket.id,
    name: data.userName.charAt(0).toUpperCase(),
    message: data.sendMessage,
  };
  console.log("this is id:", data.id);
  io.to(data.id).emit("incommingMessage", info);
};
