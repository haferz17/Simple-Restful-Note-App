<h1 align="center">Simple Restful Note App</h1>

<p align="center">
  <img width="400" src="https://miro.medium.com/max/1838/0*udqKV8dsTEnBeKRm.png"/>
</p>

## Introduction
____
### What is React Native ?

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications.

## Requirements
1. npm (node package manager)
2. Xampp
3. Postman
3. Code Editor
4. Browser

## How to Run the App ?
1. Clone or download backend repository
2. Open your terminal, go to backend directory and run `npm start`

## Related Project
- [Front End](https://github.com/haferz17/Simple-React-Native-Note-App)

## How To Use

- Run Xampp and Postman
- Type route below in postman

========================================================
* '/' -- Show Welcome
* '/notes' 
   * Method GET -- Show all data from table notes
     * '/notes?search=key' -- Show result from notes where title = key
     * '/notes/sort=key' -- Show all data from table notes where sort by time in ASC or DESC
     * '/notes/limit=key' -- Show limited data as much key from table notes 
     * '/notes/page=key' -- Show page from data
   * Method POST -- Insert data to table notes
* '/notes/id'
   * Method PUT -- Update data from table notes by id
   * Method DELETE -- Delete data from table notes by id
* '/categories' 
  * Method GET -- Show all data from table categories
  * Method POST -- Insert data to table categories
* '/categories/id'
  * Method PUT -- Update data from table categories by id
  * Method DELETE -- Delete from table categories by id   
