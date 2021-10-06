function RequestHeaderMessage() {
    const mescontb = document.getElementById('mes')
    console.log(mescontb.validity.tooLong)
    if (mescontb.validity.tooLong || mescontb.validity.valueMissing) {
        console.log("Failed validity check")
    } else {
        const aj = new XMLHttpRequest;
        aj.addEventListener('load', function(){
            console.log("E0x1")
        })
        aj.open('GET', 'https://webappapi.shaperorblx.repl.co/?c=' + mescontb.value)
        aj.send()
    }
    
}
