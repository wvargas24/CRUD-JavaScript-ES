const post = new Post();

const updatePost = async (data) => {
    try {
        const updatePost = await post.update(data);
        console.log(updatePost);
        post.showAlert("success", "Success", "Your post has been updated");
        $('#update-post-form')[0].reset();
    } catch (error) {
        post.showAlert("warning", "Opps!", error.message);
    }
};

$(document).ready(() => {
    // Handler for adding custom fields
    $("#add-custom-field").click(() => {
        $(".custom-fields").append(`
            <div class="custom-field">
                <label for="custom-key" class="form-label">Custom Key:</label>
                <input type="text" class="form-control custom-key" name="custom-key[]">
                <label for="custom-value" class="form-label">Custom Value:</label>
                <input type="text" class="form-control custom-value" name="custom-value[]">
            </div>
        `);
    });

    // Handler for form submission
    $("#update-post-form").submit((event) => {
        event.preventDefault();
        const postData = {
            userId: 1,
            id: $("#post-id").val(),
            title: $("#title").val(),
            body: $("#body").val(),
        };

        // Loop through custom fields and add them to postData
        $(".custom-fields .custom-field").each((index, element) => {
            const key = $(element).find(".custom-key").val();
            const value = $(element).find(".custom-value").val();
            postData[key] = value;
        });

        console.log(postData);
        updatePost(postData);
    });
});
