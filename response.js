'use strict'

exports.welcome = function(msg,res){
    const message = {
        status: 200,
        message: msg,
    }
    res.json(message)
    res.end()
}
exports.ok = function(row,page,limit,value,res){
    const data = {
        status: 200,
        value: value,
        totalNote: row.length,
        totalPage: Math.ceil(row.length/limit),
        page: page,
        limit: limit
    }
    res.json(data)
    res.end()
}
exports.res = function(msg,value,res){
    const data = {
        status: 200,
        value: value,
        message: msg
    }
    res.json(data)
    res.end()
}