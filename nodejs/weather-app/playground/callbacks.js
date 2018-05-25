var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Javier'
    };

    setTimeout(() => {
        callback(user);        
    }, 3000);

};

getUser(1910, (user) => {
    console.log(user);
});