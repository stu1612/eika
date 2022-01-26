import React from "react";
import { Navigation } from "./components/Navigation";
import { FlexStyle } from "./styles/containerStyles";

/**
 * I usually write "no comments in production -1"
 * This case is different this is the project documentation, you could put it in a separate file,
 *  as the interaction between the 3 import lines at the top and the JSX on the bottom is loss by the time i scroll down.
 * Plus as using pure comments make you lose the valuable oportunity of using markdown (in a separate file) to create headings, bullet points, etc
 */

// EIKA APP Objectives

// User is able to create a task whereby they can add a title, price and image(optional)
// The task is to be saved in a list whereby the user can see current tasks
// User can check tasks so that they can be marked as completed
// User can toggle between Completed / inCompleted tasks
// The information stored in the list is required to be saved in local storage
// Adding an image is optional

// Index.js

// Onload the index.js will be loaded
// Index.js - contains image, app heading, app description, button
// when user clicks button - modal will open with a form
// Functionality
// - Once the user clicks Add Task button - and adds a task - the user remains in the list page of the app

// Form
// Form contains : input - title (type text), input - price (type number), input - img (type file)
// Functionality
// - Button - will addTask to list
// - Images - when loading image check for file size and return information is err or too big

// List Section
// A list of the tasks will be displayed in column css format
// Each task will contain checkbox, title, price and image(optional)
// If no image is inputted a text element will display 'No image' to save on LS space
// Functionality
// - When app is mounted the current tasks should be displayed
// - User should be able to toggle to completed tasks
// - User should be able to sort tasks based on price, name
// - All data is to be saved in Local Storage

// App design
// will create TaskContextProvider to pass functionality / state to components to keep functionality easy to follow
// when user navigates from index.js a truthy statement will check its status and will save to LS so that the app loads to list content when app is mounted

// Styling
// App.css to style classes > when styling completed will switch to styled components to make it easier to re-check styling and update for future changes

// Components
// <Form />
// <Input />
// <Button />
// <TaskList />
// <TaskItem />

// Extra - will test cloud storage when all funcitonality is completed in jsx

// We usually use App as an entry point, if the code start at "Navigation" then App is redundant -1
// Although using const does not affect the performance or generate any errors, using functions is the official way to write component not const.
// For example the default create react app AND the official React documentation uses them, we will use that format during the course.
// Bonus point: It saves you from modifiying index.js by adding {App} with {} at the import over there.
export const App = () => {
  return (
    <FlexStyle display="flex" justifyContent="center">
      <Navigation />
    </FlexStyle>
  );
};
