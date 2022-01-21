# EIKA Shopping List

This project was created as part of a test assignment to join the Novare Intensive Frontend Course.  As a self taught developer, the aim is to showcase my knowledge of writing functional React - in particular React Components, handling events, understanding of fundamental javascript logic and software architecture.  The assignment is to create a Shopping Task app where the user can create their own shopping list by adding a title and price ( and an image if they wish ) which is then stored in local or cloud storage.  Furthermore, the user should be able to check items which have been completed.  When the app is mounted all non completed tasks are displayed, with the option for the user to toggle to all completed items.  The user can also sort the task items by price or name.  As an extra feature, rather than just displayed completed / !completed tasks - the user can toggle completed items to become non completed.

### `Deployed Website`(https://eika.netlify.app/)

## Motivation

Besides wanting to impress the instructors at Novare, I also wanted to approach this task trying to keep my thinking and organisation focused on the goals of the app as well as ensuring that to the best of my abilities it doesnt break.  Furthemore, I wanted to have a clear structure to my code where any developer can look at my code, folders and files and get a sense of how it has been built.  The directive given was that I need to show that i have a understanding of React where I will be able to fullfill the requirments of the upcoming course.  Therefore, to show my abilities I have incorporated React Router V6, Styled Components, React Context for state management, Components, demonstrated passing props, written inline conditional statements, util functions as well demonstrating higher order function methods like map and filter.  As I have been building the app i have made regular commits in a development branch and have progressivelly refactored my code, removed unused or old comments / ensured no errors or warnings are active.  In tersm of writing clean architecture, i have redcued prop drilling by created a TaskContextProvider where state and functions are passed.  I have also written util funcitons to keep my components as clean, simple yet purposeful.  I feel all my code is clearly marked of its purpose as well as navigating through a clear folder structure.

## Installation
**For developers wanting to clone the repo** [https://github.com/stu1612/eika.git](https://github.com/stu1612/eika.git)
### `yarn install`
### `yarn start`


## Tech/framework used
- [React](https://reactjs.org/)
- [Styled-Components](https://styled-components.com/)

## Features

The only piece of code which required some trial and error to make my application stand out was figuring out to not only input a imge file but have it save in LS whilst rendering.  Thanks to stack overflow I came across afew code snippets with FileReader and was able to mash together 

`// fileReader function allows for uploading image file
  // also allows to safely store in LS without getting blob error
  const fileChangeHandler = (e) => {
    const fileTarget = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => setFile(e.target.result);
    reader.readAsDataURL(fileTarget);
    setFileName(fileTarget.name);
  };`



## Code EXample

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

## Releases

My thinking at the begining of this project was to implement cloud storage with Firebase and create a ContextReducer.  However, for this project I wanted to focus on my organisation, writing clean code and having an application that works that can be submitted.  So, future updates I aim to make is to make this application be saved to cloud storage, implement typescript and jest testing.  These are three important skills I need to learn.  But for now, my thinking is to start from the basics and do it well and build on this knowledge.  Furthermore, my planning at the begining of this project was not as good as i first thought - and so this expereince has helped better prepare me.  Example being, if I have a well laid out plan i should create my folders and files straight away with empty OOP function description.

## Support

For anyone wishing to see more of my work, please go to my github accout at **stu1612** [https://github.com/stu1612](https://github.com/stu1612)

Alternatively you can contact me by [email](stu.bolderson@aol.com)

## Credits

- [PluralSight](https://www.pluralsight.com/product/skills/individuals?aid=701j0000002BGhvAAG&cq_cmp=230408478&gclid=CjwKCAiA0KmPBhBqEiwAJqKK42XeKgQVJiS0d_YbjYBtjiciucBmec7P0_wFlEcuJIdSbSOcL1ywkRoCdIYQAvD_BwE&promo=&pslp=product-skills-personal&utm_campaign=EMEA_SWE_Brand_E&utm_content=&utm_medium=digital_paid_search_google&utm_source=branded&utm_term=)
- [Stackoverflow](https://stackoverflow.com/)

# eika
