import React, { useState } from 'react'

import Todo from './components/Todo'


function App() {
 return(
  <div>
  <h1>My Todos</h1>
  <Todo title={'learn react '}></Todo>
  <Todo title={'master react'}></Todo>
  <Todo title={'explor new tfhing in react'}></Todo>

  
</div>
  
 )
  
}

export default App;
