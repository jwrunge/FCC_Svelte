const fs = require('fs')

fs.readFile(__dirname + "/../public/data/sermons.json", 'utf-8', (err, data)=> {
    if(err) console.log(err)
    else {
        data = JSON.parse(data)
        for(let video of data) {
            fs.writeFile(__dirname + '/../public/data/sermons/' + video.date + '.json', JSON.stringify(video), (err)=> {
                if(err) console.log(err)
            })
        }
    }
})

