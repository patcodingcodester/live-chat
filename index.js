require("dotenv").config({path: __dirname + '/config.env'})
const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");


const socket = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});


app.use(cors());

const port = parseInt(process.env.PORT) || 6051;


app.get('/', (req, res)=>{
    console.log("here")
    res.send("Server is running.");
});


// io.on('connection', (socket) => {
//     socket.emit('me', socket.id);

//     socket.on('disconnect', ()=>{
//         socket.broadcast.emit("callended")
//     })

//     socket.on('calluser',({userToCall, signalData, from, name})=>{
//         io.to(userToCall).emit("calluser", { signal: signalData, from, name});
//     });

//     socket.on("")

//     socket.on('disconnect', ()=>{
//         socket.broadcast.emit("callended")
//     })
// })



server.listen(port, (err)=>{

    if(err) {
        console.log("Error starting app")
        console.log("Message: " + err.message);
    }

    console.log(`App is now listening${process.env.NODE_ENV === 'development' ? ' on port: ' + port : '.'}`)
    })

// const handleRoomJoin = async (req, res, next) => {
//     try{

//         const {roomId} = req.params

//         const server = http.createServer(app);
//         const io = socket(server)

//         const rooms = async() =>{
   
//         // const allRooms = await Room.find()
//         // if(!allRooms) return console.log("No rooms found")
    

//         io.on("connection",  socket => {
//                 socket.on("join room", async roomId => {
//                     try{
//                         const room = await Room.findById(roomId);
//                         if(!room) {
//                             console.log("Please create room")
//                             return res.status(403).json({
//                                 error: {status: true, message: "Please create a room"}
//                             })
//                         }
//                         room.push(socket.id);
//                         await room.save();
                        
//                         const otherUser = room.users.filter(u => { return u !== socket.id})
//                         if(otherUser){
//                             socket.emit("other user", otherUser);
//                             socket.to(otherUser).emit("user joined", socket.id);
//                         }
//                     }catch(err){
//                         console.log(err.message)
//                     }
        
//                 });

//                 socket.on("offer", payload =>{
//                     io.to(payload.target).emit("offer", payload); //payload is offer, who is caller and offer to other user
//                 })
//                 socket.on("answer", payload => {
//                     io.to(payload.target).emit("answer", payload); //payload after offer is recieved answer formulates from offer
//                 })

//                 socket.on("ice-candidate", incoming => {
//                     io.to(incoming.target).emit("ice-candidate", incoming.candidate); //ice is either stun or turn is just two pairs agree on common connection
//                 })
//             }
            
//         )}
//     }
//     catch(err){
//         res.status(500).json({
//             error: {status: true, message: "Not able to join"},
//             msg: err.message
//         })
//     }
// }




