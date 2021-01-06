import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer'





const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <ItemListContainer />
          </Route>

          <Route path="/categoria/:id">
            <ItemListContainer />
          </Route>

          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>

        </Switch>

      </main>
    </BrowserRouter>
  )


}




/*
function App() {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer />
    <ItemCount
    initial={1} 
    stock={10}
    />
    </>
  );
}
*/


export default App;