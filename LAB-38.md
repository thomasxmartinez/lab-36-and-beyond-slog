401 JS --  Lab 38 Slog Backend Page Routes

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  
## Learning Objectives  
* Firebase Auth

## Resources  
* [firebase admin sdk docs](https://firebase.google.com/docs/admin/setup)
* [firebase sdk docs](https://firebase.google.com/docs/web/setup)

## Requirements  
#### Configuration  
* **server/model/**
 
#### Feature Tasks  
* Write a page model 
 * should have a fetchAll static method that grabs all the pages from firebase
 * shoud have a findByIdAndDelete static method that deletes a page from firebase and logsout (on success or error)
 * should have a validate instance method that ensures the page has all required properties
 * should have a save instance method that saves a page to firebase and logsout (on success or error)
* Write a page router 
 * should have a PUT /api/page route for creating and updating a page
  * must use bearer auth
  * must pass page validation
 * should have a GET /api/page route 
  * no auth 
 * should have a DELETE /api/page/:id route for deleteing a page
  * must use bearer auth
  
####  Documentation  
#### Testing  
* write a 200, 400, and 401 test for PUT route
* write a 200 test for GET route
* write a 200 and 401 test for DELETE route

## Rubric  
* 2ps Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation

<!-- links --> 
