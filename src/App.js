import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './button/CoolButton';

const App = () => {
  return (
    <div>
  <Navbar />
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <CoolButton className="button isRounded my-class is-small is-danger" value='Button 1'></CoolButton>
<CoolButton className="button isSmall isSuccess" value='Button 2'></CoolButton>
</div>)
};



export default App;
