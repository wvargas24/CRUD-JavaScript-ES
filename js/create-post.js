const post = new Post();

const createPost = async (data) => {
    try {
        const newPost = await post.create(data);
        console.log(newPost);
        post.showAlert("success", "Success", "Your post has been created");
        $('#create-post-form')[0].reset();
    } catch (error) {
        post.showAlert("warning", "Opps!", error.message);
    }
};

$(document).ready(() => {
    // Handle the form submission
    $("#create-post-form").submit(function (event) {
        event.preventDefault();
        const title = $("#title").val();
        const body = $("#body").val();
        const excerpt = body.substring(0, 20);
        // Validate the form
        if (title === "" || body === "") {
            post.showAlert("warning", "Opps!", "Please fill in all fields");
            return;
        } else {
            post.showAlert("info", "Info", "Creating post...");
            const data = {
                "userId": 1,
                "title": title,
                "body": body,
                "excerpt": excerpt
            };
            createPost(data);
        }
    });
});