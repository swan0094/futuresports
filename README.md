FutureSports
COS60015: Front-end Web Development
Assignment 2: Build a functional public-facing website
Written and developed by Alex Swan
https://swan0094.github.io
https://github.com/swan0094/futuresports


##Table of Contents##
1.	Comments on Components
1.1 App.js
1.2 search_bar.js
1.3 contact_us.js
1.4 fan_engagement.js
1.5 our_history.js
1.6 player_profile.js
1.7 player_updates.js
1.8 nav_bar.js
1.9 footer.js
1.10 modal.js
2.	Documentation of Version Control
2.1 Version Control System
2.2 Repository Hosting
3.	Purpose of Each Test Suite
3.1 App.js
3.2 search_bar.js
3.3 contact_us.js
3.4 fan_engagement.js
3.5 our_history.js
3.6 player_profile.js
3.7 player_updates.js
4. Deployment Process
4.1 Setting up the Project for Deployment 
4.2 Adding Deployment Scripts
4.3 Deploying to GitHub Pages
 
##Comments on Components##
App.js
The App.js component is the entry point for the application, utilizing React Router to control navigation between different pages. It imports and renders the NavBar, SearchBar, and Footer components, defining routes for the different pages: Home, ContactUs, FanEngagement, OurHistory, PlayerProfile, PlayerUpdates, and TermsPrivacy.

search_bar.js
The SearchBar.js component implements a search bar, utilizing React's state management to handle user input. It highlights the matching text on the current page when a search button is clicked. Using an input field and button, this component updates the state with the searched term to dynamically highlight matching elements with the class of highlightable.

contact_us.js
The ContactUs.js component provides a contact form for users to submit inquiries. It uses React's state management for form data and the visibility of modals. It has form fields for name, email, and message. The form shows a modal upon successful submission. It disables the submit button unless all fields are filled.

fan_engagement.js
The FanEngagement.js component is a table of fan engagement data fetched from a JSON using React's useEffect hook. A button simulates downloading the full report, which triggers a modal confirmation of the download. Control of the modal is managed using state.



our_history.js
The OurHistory.js component displays moments of the Adelaide Football Club's history in a gallery of images with descriptions. It imports images and uses React to render them within styled div elements. Each image card will include a title, description, and a button for further exploration that enhances user engagement.

player_profile.js
The PlayerProfile.js component displays detailed profiles of players, including their images, positions, and other personal information. It uses React's state management to handle player selection, likes on images, and comments. The component fetches player data from a JSON file and includes modals for submitting and confirming comments.

player_updates.js
The PlayerUpdates.js component provides real-time updates on player statuses and recovery stages. It fetches data from a JSON file using React's useEffect hook and displays it in a structured format. The component uses state management to store and render the updates, ensuring users stay informed about their favorite players.

nav_bar.js
The NavBar.js component implements a navigation bar for the application. It allows users to move between different pages. It uses React Router's Link component to create navigable links and ensures a seamless user experience, maintaining the state of the application and routing.



footer.js
Footer.js - The component rendering the footer section of the app that is in charge of other links and info navigation. React-structuring the footer content guarantees that on any different pages the app has, it renders consistency.

modal.js
The Modal.js component provides a reusable modal dialog to show messages and forms. It uses React's state management to control the visibility of itself, including event handlers to close the modal when clicking outside the content or on the close button. The component improves user interaction by providing a consistent interface for modals.
 
##Documentation of Version Control##
Version Control System
The project uses Git as the version control system to manage and track changes in the codebase. Git provides a robust and distributed version control mechanism, allowing multiple developers to collaborate efficiently.
Repository Hosting
The project repository is hosted on GitHub, a popular platform for version control and collaboration. GitHub offers features such as pull requests, issue tracking, and continuous integration, which are essential for maintaining the project's quality and workflow.
 
Purpose of Each Test Suite
App.test.js
This is meant to test the main application component and that all the routes are correctly set. Documented Outcomes:
-	The header contains NavBar and SearchBar components.
-	The footer contains the Footer component.
-	All the routes Home, ContactUs, FanEngagement, OurHistory, PlayerProfile, PlayerUpdates, TermsPrivacy, are set correctly and render with appropriate components.

search_bar.test.js
It will be used to test the functionality of the search bar, whether it can handle input or whether it highlights text accordingly. Documented Outcomes:
-	The search bar input field is rendered and accepts user input.
-	The search button triggers the functionality of the search.
-	Matching text on the page is highlighted upon clicking the search button.

contact_us.test.js
This test covers the functionality of the contact form. This includes form validation, form submission, and showing a modal. Documented Outcomes:
-	The contact form fields (name, email, message) are rendered and accept user input.
-	The submit button is only enabled when all fields are filled.
-	Upon submission, the form displays a success modal.
-	The modal can be closed by clicking the "Ok" button.

fan_engagement.test.js
This test should cover the correct rendering of the fan engagement table and ensure that the download button triggers the modal display. Documented Outcomes:
-	The fan engagement table is rendered with the correct data.
-	The download button will display a success modal upon clicking.
-	The modal can be closed by clicking the "Ok" button.

our_history.test.js
Purpose: To test the historical moments gallery with images and descriptions rendered properly. Documented Outcomes:
-	All historical images are rendered with the proper src attributes.
-	The titles and descriptions for each historical moment are displayed correctly.

player_profile.test.js
Purpose: Test player profile functionality, such as selecting a player, liking images, and commenting. Documented Outcomes:
-	The list of player profiles is rendered with all players.
-	When a player is selected, that player's details are shown.
-	liking an image updates the like count.
-	Clicking the comment button toggles the comment modal
-	Submitting a comment toggles a confirmation modal
-	The confirmation modal is able to be closed by clicking "Ok".

player_updates.test.js
Purpose: Coverage of player updates and recovery information being rendered correctly. Documented Outcomes:
-	The player updates and recovery section is rendered with a correct heading and description.
-	Each player's name, status, recovery stage, next match availability, and profile image are displayed correctly.

##Summary of Documented Outcomes##
The tests ensure that each component of the React project is working as expected. It tests the rendering, user interactions, and state management and covers the fact that the application behaves correctly in every different situation. The outcomes documented confirm that components render the right elements, handle user input as expected, and show modals when they should. Running these tests provides a lot of confidence in the speed at which developers can identify issues and fix them, keeping the quality and reliability of the application high.
 
##Deployment Process##
The React project is deployed using GitHub Pages, a static site hosting service offered by GitHub. This report presents the procedures that were performed to build and deploy the project, ensuring that it is accessible to users via a public URL.

Setting up the Project for Deployment
We update the package.json to include a homepage field. Set this to the URL of your GitHub Pages site:
 
Install the gh-pages package as a development dependency to help create deployments easily:
 
Adding Deployment Scripts
We will add to our package.json some deployment scripts which will automate creating the build and deploying it:
 
The predeploy script ensures the project is built before deployment, and the deploy script publishes the contents of the build directory to GitHub Pages.

Deploying to GitHub Pages
The project is deployed to GitHub Pages by running the following command:
 
This command uses the gh-pages package to push the contents of the build directory to the gh-pages branch of the repository, making the site live.
After deployment, the project is accessible at the URL listed in the homepage field. Users can visit it to interact with the application.
