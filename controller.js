'use strict'

const response = require('./response');
const db = require('./connect');
const moment = require('moment');

// Welcome
exports.welcome = function(req,res){
    response.welcome('Welcome',res);
}
// View
exports.viewNotes = function(req,res){
    let search = req.query.search || ''
    let sort = req.query.sort || 'asc'
    let limit = req.query.limit || 10
    let page = req.query.page || 1
    if(page=='0'){page = '1'}
    let offset = (page-1)*limit
 
    var sql = `SELECT notes.id,notes.title,notes.note,notes.time,categories.name AS category FROM notes INNER JOIN categories ON notes.category_id=categories.id 
    WHERE title LIKE '%${search}%' ORDER BY time ${sort} LIMIT ${limit} OFFSET ${offset}`
    var query = `select * from notes`
    
    db.query(sql,(err,rows,field)=>{
        if(err) throw err;
        else{
            db.query(query,(err,row,field)=>{
                response.ok(row,parseInt(page),parseInt(limit),rows,res);
            })
        }
    })
}
exports.viewCategories = function(req,res){
    db.query(`SELECT * FROM categories`,(err,rows,field)=>{
        if(err) throw err;
        else{
            response.res('Read',rows,res);
        }
    })
}
// Insert
exports.addNote = function(req,res){
    let title = req.body.title;
    let note = req.body.note;
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    let categoryId = req.body.categoryId;

    db.query(`INSERT INTO notes SET title=?,note=?,time=?,category_id=?`,[title,note,time,categoryId],(err,rows,field)=>{
        if(err) throw err;
        else{
            response.res('Created',rows,res);
        }
    })
}
exports.addCategory = function(req,res){
    let name = req.body.name;

    db.query(`INSERT INTO categories SET name=?`,[name],(err,rows,field)=>{
        if(err) throw err;
        else{
            response.res('Created',rows,res);
        }
    })
}
// Update
exports.updateNote = function(req,res){
    let id = req.params.id;
    let title = req.body.title;
    let note = req.body.note;
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    let categoryId = req.body.categoryId;
    db.query(`UPDATE notes SET title=?,note=?,time=?,category_id=? WHERE id=?`,[title,note,time,categoryId,id],(err,rows,field)=>{
        if(err) throw err;
        else{
            if(rows.affectedRows==0){
                res.send('ID Not Found');
            }
            else{
                response.res('Updated',rows,res);
            }
        }
    })
}
exports.updateCategory = function(req,res){
    let id = req.params.id;
    let name = req.body.name;
    db.query(`UPDATE categories SET name=? WHERE id=?`,[name,id],(err,rows,field)=>{
        if(err) throw err;
        else{
            if(rows.affectedRows==0){
                res.send('ID Not Found');
            }
            else{
                response.res('Updated',rows,res);
            }
        }
    })
}
// Delete
exports.delNote = function(req,res){
    let id = req.params.id;

    db.query(`DELETE FROM notes WHERE id=?`,[id],(err,rows,field)=>{
        if(err) throw err;
        else{
            if(rows.affectedRows==0){
                res.send('ID Not Found');
            }
            else{
                response.res('Deleted',rows,res);
            }
        }
    })
}
exports.delCategory = function(req,res){
    let id = req.params.id;
    
    db.query(`DELETE FROM categories WHERE id=?`,[id],(err,rows,field)=>{
        if(err) throw err;
        else{
            if(rows.affectedRows==0){
                res.send('ID Not Found');
            }
            else{
                response.res('Deleted',rows,res);
            }
        }
    })
}