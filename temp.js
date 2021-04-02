app.post('/login', (req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var sql = 'SELECT * FROM user WHERE id = ?';

    connection.query(sql, id, (err, result) => {
        var resultCode = 404;
        var message = 'error';

        if(err) console.log(err);
        else {
            if(result.length === 0) {
                
            }
        }
    })
})