function RequestHeaderMessage() {
    const aj = new XMLHttpRequest;
    aj.addEventListener('load', function(){
        console.log("Error while sending")
    })
    aj.open('GET', 'https://webappapi.shaperorblx.repl.co/?c=' + document.getElementById('mes').value)
    aj.send()
    
}
