
function luoLaskuri() {
    var lsk = 0;
    return function () {
        return lsk++;
    }
}

laskuri = luoLaskuri();
for (var i = 0; i < 10; ++i) {
    console.log(laskuri());
}
