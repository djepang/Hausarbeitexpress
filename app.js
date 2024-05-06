const express = require('express')
const app = express()
app.use(express.json());
const port = 3001

let todos=[]
let counter=0

app.get('/todo', (req, res) => {

  res.status(200).json(todos);
})

app.post('/todo', (req, res) => {
    
console.log(req.body)
const {description} = req.body
const todo = {id:counter, description:description}
counter += 1
todos.push(todo)
res.json(201, todo)


  })

  app.put('/todo/:id', (req, res) => {
 const{description} = req.body
 const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
 if (todoIndex === -1) {
     return res.status(404).send('Todo not found');
 }
 todos[todoIndex].description=description
 res.status(200).json(todos[todoIndex])

  })



  app.delete('/todo/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
        return res.status(404).send('Todo not found');
    }
    todos.splice(todoIndex, 1);
    res.status(204).send();

  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})