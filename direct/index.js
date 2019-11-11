const db = require('./db');
const mysqlInfo = db.mysqlConnection;
mysqlInfo.connect();

mysqlInfo.query('select * from user_test', (err, results) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(results);
    console.log('------------------------------------------------------------\n\n');
});

