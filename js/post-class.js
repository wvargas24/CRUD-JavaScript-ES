
// Define the endpoint
const endpoint = "https://jsonplaceholder.typicode.com";

/**
 * Create a new Post object.
 * @class
 * @classdesc Represents a blog post.
 */
class Post {
    /**
     * Create a new Post object.
     * @constructor
     */
    constructor() {
    }

    /**
     * Show a SweetAlert.
     * @method
     * @param {string} icon - The icon to display.
     * @param {string} title - The title of the alert.
     * @param {string} text - The text of the alert.
     * @returns {Promise} - The Promise object representing the alert.
    */
    showAlert(icon, title, text) {
        return Swal.fire({
            icon: icon,
            title: title,
            text: text,
        });
    }

    /**
     * Create a new post.
     * @method
     * @param {object} data - The data of the post.
     * @returns {Promise} - The Promise object representing the post.
     */
    async create(data) {
        let url = `${endpoint}/posts`;
        let response = this.postData(url, data);
        return response;
    }

    /**
     * Update an existing post.
     * @method
     * @param {object} data - The data of the post.
     * @returns {Promise} - The Promise object representing the post.
     */
    async update(data) {
        let url = `${endpoint}/posts/${data.id}`;
        let response = this.putData(url, data);
        return response;
    }

    /**
     * Delete an existing post.
     * @method
     * @param {number} id - The ID of the post.
     * @returns {Promise} - The Promise object representing the post.
     */
    async delete(id) {
        let url = `${endpoint}/posts/${id}`;
        let response = this.deleteData(url);
        return response;
    }

    /**
     * Get a post by ID.
     * @method
     * @param {number} id - The ID of the post.
     * @returns {Promise} - The Promise object representing the post.
     */
    async getPostById(id) {
        let url = `${endpoint}/posts/${id}`;
        let response = this.fetchData(url);
        return response;
    }

    /**
     * Get all comments by post ID.
     * @method
     * @param {number} id - The ID of the post.
     * @returns {Promise} - The Promise object representing the comments.
     */
    async getCommentsByPostId(id) {
        let url = `${endpoint}/posts/${id}/comments`;
        let response = this.fetchData(url);
        return response;
    }

    /** 
     * Post data to the server.
     * @method
     * @param {string} url - The URL of the server.
     * @param {object} data - The data to post.
     * @returns {Promise} - The Promise object representing the post.
    */
    async postData(url, data = {}) {
        return await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }
        ).then((response) => {
            return response.json();
        }).catch((err) => {
            throw new Error(err);
        });
    }

    /**
     * Update data from the server.
     * @method
     * @param {string} url - The URL of the server.
     * @param {object} data - The data to put.
     * @returns {Promise} - The Promise object representing the put.
     */
    async putData(url, data = {}) {
        return fetch(
            url,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }
        ).then((response) => {
            return response.json();
        }).catch((err) => {
            throw new Error(err);
        });
    }

    /**
     * Fetch data from the server.
     * @method
     * @param {string} url - The URL of the server.
     * @returns {Promise} - The Promise object representing the data.
     */
    async fetchData(url) {
        return await fetch(
            url,
        ).then((response) => {
            return response.json();
        }).catch((err) => {
            throw new Error(err);
        });
    }

    /**
     * Delete data from the server.
     * @method
     * @param {string} url - The URL of the server.
     * @returns {Promise} - The Promise object representing the data.
     */
    async deleteData(url) {
        return fetch(
            url,
            {
                method: 'DELETE',
            }
        ).then((response) => {
            return response.json();
        }).catch((err) => {
            throw new Error(err);
        });
    }
}