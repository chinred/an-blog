import React from 'react';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';

const App = () => {
  const posts = [
    { id: 1, title: 'Welcome to My Blog', imageUrl: 'https://via.placeholder.com/600x300' },
    { id: 2, title: 'React is Awesome', imageUrl: 'https://via.placeholder.com/600x300' },
    { id: 3, title: 'Why I Love Coding', imageUrl: 'https://via.placeholder.com/600x300' },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <PostList posts={posts} />
      </main>
    </div>
  );
};

export default App;
