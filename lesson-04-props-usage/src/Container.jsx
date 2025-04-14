import React from 'react'

function Container({children}) { //we can distruct it using children so we get the Product component
    //or with props we captured Product component in Container component (in app.jsx)
  return (
  <div>
    <hr />
      <div>Container component is worked</div>
      <hr />
      {children} {/*it runs after the container com.. div above */}
  </div>
  )
}

export default Container