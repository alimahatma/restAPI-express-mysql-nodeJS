const logRequest = (req, res, next) => {
    console.log('Terjadi request ke PATH: ', req.path);
    next();
};


// app.use((req, res, next) => {
//     console.log("miidleware ke-dua");
//     next();
// });


module.exports = logRequest;