const express = require('express')
const path = require('path')

const startServer = (options) => {
    const {port, public_path = 'public'} = options
    const app = express()
    
    //para poder usar middleware se usa express --> configuran nuestra applicacion
    app.use(express.static(public_path)) //contenido estatico que ponemos disponible
    //para que si nos hacen una peticion, es un servidor// ahora mismo devuelvo la web
    app.get("*", (req, res)=>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    //abrir un puerto y estar escuchando por ese
    app.listen(port,()=>{
        console.log(`Escuando en el puerto ${port}`)
    })

}

module.exports = {
    startServer
}