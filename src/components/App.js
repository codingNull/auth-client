import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Content from './Content';
import SignOut from './SignOut';
import WelCome from './Welcome';

class App extends React.Component {

    render(){
        return (
            <div>
                <Header/> 
                <Route path='/' exact component={WelCome}/> 
                <Route path='/signup' exact component={SignUp}/> 
                <Route path='/signin' exact component={SignIn}/> 
                <Route path='/content' exact component={Content}/> 
                <Route path='/signout' exact component={SignOut}/> 
            </div>
        )
    }
}

export default App;