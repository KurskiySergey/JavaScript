const fs = require('fs');

const log_to = (file, action, req) => {

    object = req.params.id ? req.params.id : req.body.id_product;
    time = new Date();
    log_info = `${req.connection.remoteAddress}, ${action}, product_id - ${object}, ${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
    fs.readFile(file, 'utf-8', (err, data) => {
        if ( err ) {
            console.log(err);
        } else {
            array = JSON.parse(data);
            array.push(log_info);
            fs.writeFile(file, JSON.stringify(array, null, 4), (err) => {

                if ( err ) {
                    console.log(err);
                }

            });
        }
    });

};


module.exports = log_to;