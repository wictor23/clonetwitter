import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return(
      <Container>
          <Header>
              <button>
                  <BackIcon/>
              </button>

             <ProfileInfo>
                 <strong>Wictor diniz</strong>
                 <span>612121 Tweets</span>
            </ProfileInfo> 
          </Header>
          {/* <ProfilePage /> */}
          {/* <BottomMenu>
              <HomeIcon />
              <SearchIcon />
              <BellIcon />
              <EmailIcon/>
              <BottomMenu />
          </BottomMenu> */}
      </Container>
  );

}
export default Main;