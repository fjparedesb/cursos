var getuser = (id, callback) => {
    var user = {
        id: id,
        name: 'Javier'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
    
};

getuser(1, (user) => {
    console.log(user);
});