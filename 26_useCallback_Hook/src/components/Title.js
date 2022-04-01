
import React from 'react'

function Title() {
    console.log('Rendering Title\n')
  return (
      <h2>useCallback hook</h2>
  );
}

export default React.memo(Title);

// React.memo is a Higher Order Component (HOC)
// that prevent a functionnal to re-render if
// its props or state does not change.