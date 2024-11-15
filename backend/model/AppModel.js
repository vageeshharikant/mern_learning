class AppModel {
    FlightModel = () => {
        const collection_name = 'flight';
        const collection_fields = {
                airline: String, 
                source: String,
                destination: String, 
                fare: Number,
                duration:Number
        };
        const collection_config = {
            timestamps: false
        };
        
        const schema = mongoose.Schema(collection_fields, collection_config);
        const Model = mongoose.model(collection_name, schema);
    
        return Model;
    }
}

module.exports = AppModel;