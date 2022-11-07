{
    let x = 0
    function next(name) {
        if (x < 2) {
            x += 1;
        }
        document.getElementById('message').innerHTML = name[x]['name'] + ' / content';
        console.log(name);
    }

    function previous(name) {
        if (x > 0) {
            x -= 1;
        }
        document.getElementById('message').innerHTML = name[x]['name'] + ' / content';
    }
}