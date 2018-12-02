const express = require('express');
const _ = require('lodash');
const app = express();


app.use(express.json())

const courses = [
                  {id: 1, label: "Laravel"}, 
                  {id: 2, label: "Python"},
                  {id: 3, label: "NodeJS"}
                ]

    app.get('/api/courses', (req, res) => {
        res.send(courses);
    })


    app.post('/api/courses', (req, res) => {
        courses.push({id: courses.length + 1, label: req.body.label});
        res.send(courses)
    })


    app.get('/api/courses/:id', (req, res) => {
        let id = +req.params.id;
        let myCourse = _.find(courses, (course) => course.id === id);
        res.send(myCourse);
    })

app.listen(3000, () => console.log('server is running on port 3000...'))