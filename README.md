# Bird App
## Bird App is a social media application built in React and Tailwind CSS. 

The app has the following features:

- A landing page for the social media.

- A login page at /login.

- A registration page at /register.

- Basic validation to the registration process: Usernames should be unique, alphanumeric only, and passwords should be strong.

- When the user registers a new account, the details of user are stored in localStorage. localStorage has a key called "allUsers" and value as a JSON stringified array of username and password of all users.

- When a user logs in, the app checks if allUsers contains the user, and if the username and password match. If they match, the user is redirected to the /dashboard screen.

- The logged in user's username is stored inside localStorage too. The key loggedIn has the username of the user logged in as the value.

- The dashboard loads feed from all the users. This feed is stored in localStorage as feed as the localStorage key, and the following structure as the value:

```    
    [{
        postID: '', // a unique post ID
        contents: '', // contents of the post
        postAuthor: '', // username of the author of the post
        createdOn: 0, // a unix timestamp (stored in seconds) of the time it was created
        updatedOn: 0, // a unix timestamp (stored in seconds) of time it was updated
    }]
```
- Whenever a user creates a new post, it is added into the localStorage key feed as an individual post.

- All posts inside feed localStorage are visible to everyone in random order who create an account and visit /dashboard.

- Only the post author can edit and delete the post.

## Technologies
This project is built using:

- React
- Tailwind CSS

Getting Started
- Clone this repo using git clone https://github.com/reevan-manglore/bird-app.git
- Move to the appropriate directory: cd Project-Name.
- Run yarn install to install dependencies.
- Run yarn dev to start the development server.

Contributing
Contributions are welcome. Feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.
