//styling react component

//1.css stylesheet
//create a file with filename.css extension then import it on file 
<h1 className={`${className} font-xl`}>stylesheet</h1>  //anotherway

//2.inline styling
//write the css inside the tag with in style property to style that element
<h1 style={{color:"blue"}}>hello</h1>

//3.css module
//craete a file with filename.module.css 
//this css applies to every child component as well
import styles from style.module.css;

<h1 className={styles.heading}>hello</h1>

//4.javascript object
//write the css in a variableand pass it as style to that element
const heading={
    color:"blue",
}

<h1 style={heading}>hello</h1>


//fragments
//groups a list of children elements without adding extra nodes to the Dom.
<React.Fragment>-----</React.Fragment>
<>------</>

//Higher Order Components (HOC) in React.js are components that wrap other components to add additional functionality.
