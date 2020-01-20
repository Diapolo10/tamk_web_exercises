
function homeView() {
    document.getElementById('title-div').innerHTML = "<h1>Tervetuloa sääasemalle!</h1>";
    document.getElementById('data-div').innerHTML = "<p>Miltä sää näyttää? ⛅</p>";
}


function updateView(event) {

    const d = new Date();
    const date = d.toLocaleDateString();
    const time = d.toLocaleTimeString();

    if (event.id == 'temperature') {
        document.getElementById('title-div').innerHTML = "<h1>Lämpötila</h1>";
        document.getElementById('data-div')
    }
    else if (event.id == "wind-speed") {
        document.getElementById('title-div').innerHTML = "<h1>Tuulennopeus</h1>";
        document.getElementById('data-div').innerHTML = `<p>${date}</p><time>${time}</time>`;
    }
}
