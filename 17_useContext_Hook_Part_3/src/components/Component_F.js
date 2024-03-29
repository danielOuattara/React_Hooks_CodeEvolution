import { UserContext, ChannelContext } from "./../App";

function Component_F() {
  return (
    <UserContext.Consumer>
      {(user) => (
        <ChannelContext.Consumer>
          {(channel) => {
            return (
              <>
                <h2> User context value : {user}</h2>
                <h2> {channel}</h2>
                <p>from component F</p>
              </>
            );
          }}
        </ChannelContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}
export default Component_F;
