import express from "express";
import cors from "cors";
import mysql2 from "mysql2";
// import multer from 'multer'

const app = express();
// Express Server Middleware
app.use(express.json());
// cors and axios Middleware
app.use(cors());
// Create Connection to mySQL Database
const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Nasif",
    database: "test",
});
// Storage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
//     }
// })
// const upload = multer({
//     storage: storage
// })

// Access Database
app.get("/", (req, res) =>{
    res.json("This is Backend Server");
});
// Access Books from Database
app.get("/books", (req, res) =>{
    const sql = "SELECT * FROM books";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
// Access a Book for Update in Database
// app.get('/books/:id', (req, res) => {
//     const bookID = req.params.id;
//     const sql = "SELECT * FROM books WHERE id = ?";
//     con.query(sql, [bookID], (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data);
//     });
// });

app.get('/edit/:id', (req, res) =>{
    const bookID = req.params.id;
    const sql = "SELECT * FROM books WHERE id = ?";
    db.query(sql, bookID, (err, result) =>{
       if (err) return res.json({Error:err});
       return res.json(result); 
    });
});

// Insert Books into Database
app.post("/books", (req, res) =>{
    const sql = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];
    db.query(sql, [values], (err, data) =>{
        if (err) return res.json(err);
        return res.json("Book has been created successfully.");
    });
});

// app.post('/create', upload.single('image'), (req, res) => {
//     const sql = "INSERT INTO employee (`name`,`email`,`password`, `address`, `salary`,`image`) VALUES (?)";
//         const values = [
//             req.body.name,
//             req.body.email,
//             req.body.address,
//             req.body.salary,
//             req.file.filename
//         ]
//         con.query(sql, [values], (err, result) => {
//             if (err) return res.json({ Error: "Inside singup query" });
//             return res.json({ Status: "Success" });
//         })

// })

// Delete Books from Database
app.delete("/books/:id", (req, res) =>{
    const bookID = req.params.id;
    const sql = "Delete FROM books WHERE id = ?";
    db.query(sql, [bookID], (err, data) =>{
        if(err) return res.json(err);
        return res.json("Book has been deleted successfully.");
    });
});
// Update Books in Database
app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const sql = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];
    db.query(sql, [...values, bookId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

// Server Running Port Configuration
app.listen(8081, () =>{
    console.log("Connected To the Backend.");
});