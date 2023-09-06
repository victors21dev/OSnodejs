const os = require('os')

const { totalmem, freemem, hostname, type, arch, cpus} = os

function converter(TotalRam, RamLivre){
    config = {
        TotalRam: `${parseFloat(((TotalRam / 1024 / 1024) / 1024)).toFixed(2)} GB`,
        RamLivre: `${parseFloat(((RamLivre / 1024 / 1024) / 1024)).toFixed(2)} GB`,
        UsoRam: `${parseFloat(((TotalRam - RamLivre) / 1024 / 1024) / 1024).toFixed(2)} GB`,
        "---":'---',
        OS: type(),
        Arquitetura: arch(),
        CPU: JSON.stringify(cpus()[0].model),
    }
}

setInterval(() => {
    converter(totalmem, freemem)
    console.clear()
    console.log(`===========================${hostname()}===========================`)
    console.table(config)
}, 1000)