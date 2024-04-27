const post = new Post();

// Function to get the post data by ID
const getPost = async (id) => {
    try {
        const response = await post.getPostById(id);
        return response;
    } catch (error) {
        console.error('Error obtaining post info:', error);
        throw error;
    }
}

// Function to get the comments data by post ID
const getComments = async (id) => {
    try {
        const response = await post.getCommentsByPostId(id);
        return response;
    } catch (error) {
        console.error('Error getting comments', error);
        throw error;
    }
}

// Function to show the post and comments information
const displayInfo = (data) => {
    // Show the post title
    $("#post-info").html(`<h2>${data.title}</h2>`);

    // Show the post body
    $("#post-info").append(`<p>${data.body}</p>`);

    // Show the comments information
    $("#post-info").append("<h3>Comments</h3>");
    data.comments.forEach(comment => {
        $("#post-info").append(`
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title
                    ">${comment.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${comment.email}</h6>
                    <p class="card-text">${comment.body}</p>
                </div>
            </div>
        `);
    });
}


// Main function to fetch post and comments
const mainFunctionality = async (id) => {
    try {
        // Get the post data
        const postData = await getPost(id);

        // Get the comments data
        const commentsData = await getComments(id);

        // Merge the post and comments data
        const mergeData = {
            ...postData,
            comments: commentsData
        };

        // Call the showSweetAlert
        post.showAlert("success", "Success", "Post and comments fetched successfully!");

        // Log the merged data
        console.log(mergeData);

        // Call the displayInfo
        displayInfo(mergeData);

    } catch (error) {
        // Log the error
        console.error('Error getting the post and comments:', error);
        // Call the showSweetAlert
        post.showAlert("error", "Error", "An error occurred while fetching the post and comments.");
    }
}


// Document ready
$(document).ready(() => {
    // Handle the form submission
    $("#fetch-post-form").submit(async function (event) {
        event.preventDefault();
        var id = $("#post-id").val();

        // Check if the ID is empty or is not a number
        if (isNaN(id) || !id) {
            // Call the showSweetAlert
            post.showAlert("error", "Error", "An error occurred while fetching the post and comments.");
            return;
        } else {
            id = parseInt(id);
            // Call the mainFunctionality
            mainFunctionality(id);
        }

    });
});
