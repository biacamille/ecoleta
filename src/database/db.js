//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o obejeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o obejeto de banco de dados para fazer as operações 
// db.serialize(() => {
//     //criar uma tabela com comandos SQL
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         )

//     `)
// })

// //inserir dados da tabela
// // const query = `
// //         INSERT INTO places(
// //         image,
// //         name,
// //         adress,
// //         adress2,
// //         state,
// //         city,
// //         items
// //         )VALUES( ?,?,?,?,?,?,?)
// //         `
// // const values = [
// //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
// //     "Colectoria",
// //     "Guilerme Gamballa, Jardim América",
// //     "Número 260",
// //     "Santa Catarina",
// //     "Rio do Sul ",
// //     "Resíduos Eletrônicos, Lâmpadas"
// // ]


// function afterInsertData(err) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log("Cadastrado com sucesso")
//     console.log(this)

// }

    
//    db.run(query, values, afterInsertData)

   //consultar dados da tabela

    // db.all(`SELECT name * FROM places`, function(err,rows){
    //     if(err) {
    //         return console.log(err)
    //     } 
    //     console.log ("Aqui estão os seus registros")
    //     console.log(rows)
    // })


    // //deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    //     if(err) {
    //         return console.log(err)

    // }
    // console.log("Registrado deletado com sucesso")


    // })

//