# Black Code Collective Website

Black Code Collective official home page. Through this website you can learn about the organization, their latest meetups, volunteer events, projects and founding members.

# Requirements
You will need to have Node Package Manager (NPM) installed to install the dependencies of the project and your own API Keys from the following sources.
* Github
* Meet Up
* Imgur


# To Get Started
To get a view of how the website is suppose to look like you can checkout the images in the `mockups/` folder. There are no deadlines to this project and you can select any type of issue as you please.  To claim an issue just simply assign it to yourself.  If you come across something within the project you can also create an issue for it with details and a screenshot on what you came across, so it will be a lot easier for everyone to understand.

*  Run `npm install`
* Create a file called apikeys.json within the root directory of the project.
* Check if your `.gitignore` file has apikeys.json in it, if it doesn't add it.
* Add the following in your apikeys.json file.
```
{
  "github": "YOUR_KEY",
  "meetup": "YOUR_KEY",
  "imgur": "YOUR_KEY"
}
```
* Run `npm start` to view the application.

If there is some discrepancies in the step please feel free to update the ReadMe and let the project owners aware of the changes.

# Testing
This is a full stack React project so we figured that we would be using the offical React testing framework Jest. 
Jest was created by the FaceBook and we are using it concurrently with Enzyme to test our components as well as reducers and Actions
To run the tests you will need to run `npm test`

Below is a link to the Jest framework as well as a really detailed
guide on how to write tests for React components. 
[Jest Framework](https://facebook.github.io/jest/)
[Enzyme](http://airbnb.io/enzyme/)
[Guide to Writing tests for React Components and Reducers](http://redux.js.org/docs/recipes/WritingTests.html)

Thanks a million for contributing!!!!
