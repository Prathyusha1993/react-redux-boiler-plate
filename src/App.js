//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Posts from './components/Posts'
import PostForm from './components/PostForm'

function App() {
  return (
    <Provider store={store}>
      <>This is App Component</>
      <div>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
