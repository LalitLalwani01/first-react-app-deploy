import Question from "./question";
function Card(props) { 
    
    const question=props.question
    const opti=props.options
    console.log(props)
    return (  <>
        
        <div>{question}</div>
        <input type='radio'></input>
        <label>{props.opti}</label>
        <input type='radio'></input>
        <label>{props.opti}</label>
        <input type='radio'></input>
        <label>{props.opti}</label>
        <input type='radio'></input>
        <label>{props.opti}</label>



    </>);

} 
export default Card;