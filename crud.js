const { v4: uuidv4 } = require('uuid')
const tasks = []

const handleCreateData = (req, res) => {
    const { title, detail, duedate } = req.body;
    if (title && detail && duedate) {
        const id = uuidv4()
        const task = {
            id,
            title,
            detail,
            duedate
        }
        tasks.push(task)
        console.log("Pushed date:", tasks)
        res.send(tasks)
    }
    else {
        res.status(400).json({ message: "Please fill all the fields" })
    }
}

const handleDisplayData = (req, res) => {
    if (tasks) {
        res.send(tasks)
    }
    else {
        res.send("No data")
    }
}

const handleUpdateData = (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = req.body;
    const task = tasks.find((task) => task.id === id)
    if (task) {
        task.title = data.title;
        task.detail = data.detail;
        task.duedate = data.duedate;
        res.send(task);
    }
    else {
        res.status(400).send("Task not found")
    }
}

const handleDeleteData = (req, res) => {
    const id = req.params.id;
    const task = tasks.find((task) => task.id == id);
    if (task) {
        const task = tasks.filter((task) => task.id !== id);
        console.log(task);
        res.status(200).json({message : "Task deleted"})
    }
    else {
        res.status(400).json({message :"Task not found"})
    }
}

module.exports = {
    handleCreateData,
    handleDisplayData,
    handleUpdateData,
    handleDeleteData
}