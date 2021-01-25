import { setGlobalLoading } from '@Store/ducks/ui';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styled';

const Loading = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGlobalLoading(false));
  });
  return <S.LoadingWrapper>Loading</S.LoadingWrapper>;
};

export default Loading;
