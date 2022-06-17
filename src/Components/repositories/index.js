import React from 'react'
import RepositoryItem from '../repository-item';
import * as S from './styled';
export default function Repositories() {
  return (
    <S.WrapperTabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
    >

        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
            <S.WrapperTabPanel>
              <RepositoryItem 
              name="Adivinhar-Numero-Python" 
              linkToRepo="https://github.com/JaumAssis/Advinhar-Numero-Python"
              fullName="JaumAssis/Advinhar-Numero-Python"
              />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
              <RepositoryItem
              name="Calculadora" 
              linkToRepo="https://github.com/JaumAssis/Calculadora"
              fullName="JaumAssis/Calculadora"
              />
            </S.WrapperTabPanel>


    </S.WrapperTabs>
  );
};

