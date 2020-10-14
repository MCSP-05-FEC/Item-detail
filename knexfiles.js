module.exports= {
    developement:{
        client: 'postgresql',
        connetion:`postgres://localhost:5432/${fec}`,
        migrations: {
            directory: __dirname + "/migrations"
        },
        seeds:{
            directory: __dirname + "/seeds"
        }
    }
};