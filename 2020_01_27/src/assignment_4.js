
const luoLaskuri = () => {
    var lsk = 1;
    return () => {
        console.log(lsk++);
    }
}

laskuri = luoLaskuri();
setInterval(() => laskuri(), 1000);
