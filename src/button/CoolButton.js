import 'bulma/css/bulma.css';
import React from 'react';

function CoolButton(props) {
    return (   
        <div class='buttons'>

<button className={props.className}>{props.value}</button>

</div>);
    } 
  
    export default CoolButton;

    {/* <button class="button is-small is-success">Button 2</button> */}