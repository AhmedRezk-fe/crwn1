import React from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import HomePage from "./pages/homePage/homePage.compnent"
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/Header/Header.component"
import signInSignUp from "./pages/sign-in--sign-up/sign-in--sign-up.component"
import { auth } from "./firebase/fireBase.Utile"


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header  currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign" component={signInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
