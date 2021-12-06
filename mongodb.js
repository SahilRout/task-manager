//CRUD Create Read
const { MongoClient, ObjectId } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable To Connect To Database!");
    }
    const db = client.db(databaseName) //database refrence

    // db.collection('users').findOne({ _id: new ObjectId("617fe844d44822fd380baab6") }, (err, user) => {
    //     if (err) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({ age: 19 }).toArray((err, users) => {
    //     if (err) {
    //         return console.log("Unable To Connect To Database!");
    //     }
    //     console.log(users)
    // })
    // db.collection('tasks').findOne({ _id: new ObjectId("617fe51f53f6e319dc1d35b3") }, (err, user) => {
    //     if (err) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user);
    // })
    // db.collection('tasks').find({ completed: true }).toArray((err, users) => {
    //     if (err) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(users)
    //})
    // db.collection('users').updateOne({
    //     _id: new ObjectId("617fe03fbf07cbb5527eb2d1")
    // }, {
    //     $set: {
    //         name: 'Sahil'
    //     }
    // }).then((result) => {
    //     console.log("result");
    //     console.log(result);
    // }).catch((error) => {
    //     //console.log("error")
    //     console.log(error)
    // });
    // db.collection('tasks').updateMany({ completed: false }, {
    //     $set: {
    //         completed: true,
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
    db.collection('tasks').deleteOne({ description: "Do dsa Questons on DP" }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})
