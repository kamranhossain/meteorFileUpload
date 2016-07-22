Items.attachSchema(new SimpleSchema({
    title: {
        type: String,
        defaultValue: "",
        label: "Title (max: 20) :",
        max: 20,
    }
    
}));
