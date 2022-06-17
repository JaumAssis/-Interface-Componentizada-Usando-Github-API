import { cleanup } from '@testing-library/react';
import React, { useEffect } from 'react'
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';
function Profile() {

  const {githubState} = useGithub();

    useEffect(() => {
      console.log(githubState.user);
    }, [githubState.user]);

return (<S.Wrapper>
  <S.WrapperInforUsers>
      <S.WrapperImage
         src={githubState.user.avatar} alt="Avatar of user"
      />
    <div>
        <h1>{githubState.user.name}</h1>
        <S.WrapperUserName>
        <h3>Username: 
        <a href= {githubState.user.html_url} target="blank" rel='noreferrer'>
        {githubState.user.login}
        </a>
        </h3>
        </S.WrapperUserName>
    </div>
        <S.WrapperStatusCounter>
        <div>
          <h4>Followers</h4>
          <span>{githubState.user.followers}</span>
        </div>
        <div>
          <h4>Followings</h4>
          <span>{githubState.user.following}</span>
        </div>
        <div>
          <h4>Gists</h4>
          <span>{githubState.user.public_gists}</span>
        </div>
        <div>
          <h4>Repos</h4>
          <span>{githubState.user.public_repos}</span>
        </div>
        
        </S.WrapperStatusCounter>
    </S.WrapperInforUsers>
      
</S.Wrapper>
  );
  
};

export default Profile;
