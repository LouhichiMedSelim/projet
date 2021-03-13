const mysql = require('mysql2');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const samplePosts = [
    {
        name: 'School BUS',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Autob%C3%BAs_escolar%2C_Walker%2C_Indiana%2C_Estados_Unidos%2C_2012-10-20%2C_DD_02.jpg/1200px-Autob%C3%BAs_escolar%2C_Walker%2C_Indiana%2C_Estados_Unidos%2C_2012-10-20%2C_DD_02.jpg',
        descrption: `This kind is designed for schools . 
  `
    },
    {
        name: 'mini bus',
        imageUrl: 'https://www.autoredo.com/wp-content/uploads/2018/05/VEH-002347-1.jpg',
        descrption: `This kind is designed for 30 personnes . 
  `
    },
    {
        name: 'Camping car',
        imageUrl: 'https://www.campingcarlesite.com/wp-content/uploads/2018/12/01-LAIKA-Ecovip-305.jpg',
        descrption: `This kind is designed for famillies maximum 8 personnes .
  `
    },
    {
        name: 'big bus',
        imageUrl: 'https://img.via-mobilis.com/1/autocar.jpg',
        descrption: `This kind is designed for 60 personnes ..
  `
    },
    {
        name: 'our biggest bus',
        imageUrl: 'https://image.made-in-china.com/202f0j10EGLftDFIFWrH/Syp-18-Meter-90-Seat-200-Passenger-Load-New-Electroic-BRT-Bus.jpg',
        descrption: `This kind is designed for 70 personnes .
  `
 
    }
];

const insert = (data) => {
    return new Promise((resolve, reject) => {
        for (const buss of data) {
            let syntax = ` insert into postbuss( name,imageUrl, descrption) values (? ,? ,? )`
            connection.query(syntax, [buss.name, buss.imageUrl, buss.descrption], (err, res) => {
                if (err) return reject(err)
                return resolve(res)
            })
        }
    })
}
insert(samplePosts)
    .then(_ => {
        connection.end()
    })
    .catch(err=>{
        throw err
    })

   