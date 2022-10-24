const os = require('os')

const { totalmem, freemem, hostname, type, arch, cpus} = os

function converter(totalRam, usoRam){
    config = {
        totalRam: `${parseFloat(((totalRam / 1024 / 1024) / 1024)).toFixed(2)} GB`,
        usoRam: `${parseFloat(((usoRam / 1024 / 1024) / 1024)).toFixed(2)} GB`,
        livreRam: `${parseFloat(((totalRam - usoRam) / 1024 / 1024) / 1024).toFixed(2)} GB`,
        "---":'---',
        os: type(),
        arquitetura: arch(),
        cpu: JSON.stringify(cpus()[0].model),
    }
}

setInterval(() => {
    converter(totalmem, freemem)
    console.clear()
    console.log(`===========================${hostname()}===========================`)
    console.table(config)
}, 1000)