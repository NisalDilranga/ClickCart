const mongoose = require("mongoose");


const dburl = "mongodb+srv://nisal:123456N@cluster0.x7jnudc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connection = async () => {
    try {
        await mongoose.connect(dburl);
        console.log("db connected");
    } catch (e) {
        console.error(e.message);
        process.exit();
    }
}
module.exports = connection;