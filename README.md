# EIKA Shopping List

This project was created as part of a test assignement to join the Novare Intensive Frontend Course.  As a self taught developer, the aim is to shoecase my knowledge of writing functional React components.  The assignment is to create an app where the user can create their own shopping list by adding a title and price ( and an image if they wish ) which is then stored in local or cloud storage.  Furthermore, the user should be able to check items which have been completed.  Items which are not completed shoould only be shown as well as render when the application is mounted.  However, the user should be able to toggle between completed and non completed tasks.  The user should also be able to sort the list items by price and name.

### `Deployed Website`(https://eika.netlify.app/)

## Motivation

Besides wanting to impress the instructors at Novare, I also wanted to approach this task trying to keep my thinking and organisation focused on the goals of the app as well as ensuring that to the best of my abilities it doesnt break.  Furthemore, I wanted to have a clear structure to my code where any developer can look at my code, folders and files and get a sense of how it has been built.  The directive given was that I need to show that i have a understanding of React where I am able to filfill the requirments of the upcoming course.  Therefore, to show my abilities I have incorporated React Router V6, Styled Components, React Context for state management, Components, demonstrated passing props, written inline conditional statements, util functions as well demonstrating higher order function methods like map and filter.

## Description

*Syling*

This application uses a variety of styling methods - Styled Components, css classes, inline Styling

I decided to predominalty use styled components - in the **src/styles/containerStyles.js** i have set up universal container block styles which accept props to reduce repeated code throughout the application

`export const FlexStyle = styled.div
  display: ${(props) => props.display || null};
  flex-direction: ${(props) => props.flexDirection || null};
  align-items: ${(props) => props.alignItems || null};
  justify-content: ${(props) => props.justifyContent || null};
  flex: ${(props) => props.flex || null};
  margin: ${(props) => props.margin || null};
  width: ${(props) => props.width || null};
;
`

A globalStyles provides base styling for tag elemnents and small helper css classes **src/themes/globalStyles.js**

Any specific styling is written as a styled component within the component

`export const Button = ({ title, onClick, type }) => {
  return (
    <ButtonStyle
      onClick={onClick}
      bgcolor="#0058ab"
      color="#fff"
      hoverbgcolor="#014788"
      className="button"
      type={type}
    >
      {title || "Add Item"}
    </ButtonStyle>
  );
};
const ButtonStyle = styled.button
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  &:hover {
    background-color: ${(props) => props.hoverbgcolor};
  };
`

*Functions*

- Add Task

Adds task object to task item array and when completed navigates to /tasks page

`const addTask = (title, price, file) => {
    const newTask = {
      id: Math.random() * 1000,
      title: title,
      price: price,
      img: file,
      isCompleted: false,
    };
    setTasksArr([...tasksArr].concat(newTask));
    navigate("/tasks");
  };`
  
- Complete Task 

When item.id is equal to id then isCompleted === true which will change the items styling

When the app is mounted - isCompleted and !isCompleted tasks are rendered in different lists - the user can toggle the status from isCompleted to !isCompleted and visa versa

`const completeTask = (id) => {
    setTasksArr(
      tasksArr.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      })
    );
  };
  `
  
- Filter isCompleted and !isCompleted Status 

`export const switchStatus = (state, stateVar, stateSetter) => {
  switch (state) {
    case "completed":
      stateSetter(stateVar.filter((item) => item.isCompleted === true));
      break;
    case "current":
      stateSetter(stateVar.filter((item) => item.isCompleted === false));
      break;
    default:
      stateSetter(stateVar.filter((item) => item.isCompleted === false));
      break;
  }
};
`
- Sort array by Name

`export const sortTasksByName = (stateVar, stateSetter) => {
  const newNameArr = [...stateVar];
  newNameArr.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  stateSetter(newNameArr);
};
`

- Sort array by Price

`export const sortTasksByPrice = (stateVar, stateSetter) => {
  const newArr = [...stateVar];
  newArr.sort((a, b) => {
    return a.price - b.price;
  });
  stateSetter(newArr);
};
`


## Installation
**For developers wanting to clone the repo** [https://github.com/stu1612/eika.git](https://github.com/stu1612/eika.git)
### `yarn install`
### `yarn start`

## Support

For anyone wishing to see more of my work, please go to my github accout at **stu1612** [https://github.com/stu1612](https://github.com/stu1612)

Alternatively you can contact me by [email](stu.bolderson@aol.com)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# eika
