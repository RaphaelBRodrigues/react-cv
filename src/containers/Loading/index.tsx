import { setGlobalLoading } from '@Store/ducks/ui';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styled';

const Loading = () => {
  const dispatch = useDispatch();
  const [activatedDot, setActivatedDot] = useState(-1);
  useEffect(() => {
    setTimeout(() => {
      setActivatedDot(activatedDot + 1);
    }, 500);

    if (activatedDot >= 13) {
      dispatch(setGlobalLoading(false));
    }
  }, [dispatch, activatedDot]);
  return (
    <S.LoadingWrapper finished={activatedDot >= 9}>
      <S.LoadingBox finished={activatedDot === 8}>
        {[...Array(6)].map((_, index) => {
          return (
            <S.LoadingItem key={index} activated={index === activatedDot} />
          );
        })}
      </S.LoadingBox>
    </S.LoadingWrapper>
  );
};

export default Loading;
