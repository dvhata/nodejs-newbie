module.exports = {
    multipleMongooseToObject: function (mongooses) {
        return  mongooses.map(mongooses => mongooses.toObject())
    },
    singleMongooseToObject: function (mongooses) {
        return  mongooses? mongooses.toObject() : mongooses
    }
}