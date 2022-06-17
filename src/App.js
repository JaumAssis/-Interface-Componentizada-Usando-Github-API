import React from 'react';
import { ResetCSS } from './Components/global/resetCSS';
import Layout from './Components/layout';
import Profile from './Components/profile';
import Repositories from './Components/repositories';
import GithubProvider from './providers/github-provider';
import useGithub from './hooks/github-hooks';

function App() {
  const {githubState} = useGithub();
  return (
    
      
      <Layout>
        {githubState.hasUser ? <>
      {githubState.loading ? (
      <p>Loading</p>
      ) : (
        <>
        <Profile/>
          <Repositories/>
          </>
      )}
      </>
      : <div>Nenhum usuário pesquisado
        </div>
      }
        
      </Layout>
      
    
  );
};

export default App;
