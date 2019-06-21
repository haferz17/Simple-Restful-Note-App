# How To Use

## ROUTE
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