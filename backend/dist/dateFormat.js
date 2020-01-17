const moment = require('moment')

const sqlDate = new Date()
const format = 'D-MMM-YYYY'

console.log(sqlDate)

const formatDate = (sqlDate, format)=>{
    if(sqlDate){
        const newformat = moment(sqlDate).format(format)
        console.log(newformat + ' hora format')
        return newformat
    } else {
        console.log('nothing to show')
    }
}

module.exports = formatDate()