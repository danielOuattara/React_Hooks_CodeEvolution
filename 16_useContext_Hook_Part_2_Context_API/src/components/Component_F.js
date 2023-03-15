//----------------------------------------------------------

// function solution

// import React from "react";
// import { UserContext, ChannelContext } from "./../App";

// export default function Component_F() {
//   return (
//     <UserContext.Consumer>
//       {(user) => (
//         <ChannelContext.Consumer>
//           {(channel) => {
//             return (
//               <>
//                 <h2> User context value : {user}</h2>
//                 <h2> {channel}</h2>
//               </>
//             );
//           }}
//         </ChannelContext.Consumer>
//       )}
//     </UserContext.Consumer>
//   );
// }

//----------------------------------------------------------

// class solution

import React, { Component } from "react";
import { UserContext, ChannelContext } from "./../App";

export default class Component_F extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => (
          <ChannelContext.Consumer>
            {(channel) => {
              return (
                <>
                  <h2> User context value : {user}</h2>
                  <h2> {channel}</h2>
                </>
              );
            }}
          </ChannelContext.Consumer>
        )}
      </UserContext.Consumer>
    );
  }
}
