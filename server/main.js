var imageDetails = new Mongo.Collection('images');

Slingshot.fileRestrictions("myImageUploads", {
    allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
    maxSize: 2 * 1024 * 1024,
});

Slingshot.createDirective("myImageUploads", Slingshot.S3Storage, {
    AWSAccessKeyId: "Key puts here",
    AWSSecretAccessKey: "Key puts here",
    bucket: "Bucket Name puts here",
    acl: "public-read",
    region: "region name puts in here",

    authorize: function () {
        if (!this.userId) {
            var message = "Please login before posting images";
            throw new Meteor.Error("Login Required", message);
        }

        return true;
    },

    key: function (file) {
        var currentUserId = Meteor.user().emails[0].address;
        return currentUserId + "/" + file.name;
    }

});