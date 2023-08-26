import React from 'react';
import * as S from './styled';

import { useDispatch } from 'react-redux';
import { Grid, useMediaQuery } from '@mui/material';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { setSelectedTaskSlice } from '../../redux/selectedTaskSlice';
import { useNavigate } from 'react-router-dom';

import formatarData from '../../utils/formatarData';

export default function TaskItem ({task, index, setIsConfirm}: any) {
  const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width:758px)');

    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    const handleSelected = (choice: FormData) => {
        dispatch(setSelectedTaskSlice(choice));
        navigate('/detalhes')
      };

      const handleConclude = (choice: FormData) => {
        dispatch(setSelectedTaskSlice(choice));
        setIsConfirm(true);
      };

    return (
        <S.Lines container key={index} concluded={task.concluded}>
                <Grid
                  item
                  xs={isMobile? 8 : 10}
                  style={{ display: 'flex', cursor: 'pointer' }}
                  onClick={() => handleSelected(task)}
                >
                  <S.Tasks item xs={6}>
                    {task.name}
                  </S.Tasks>
                  {!isMobile && 
                  <S.Tasks item xs={4}>
                    {formatarData(task.time as unknown as string)}
                  </S.Tasks>}
                  <S.Tasks item xs={2}>
                    {task.concluded ? 'Concluida' : 'Pendente'}
                  </S.Tasks>
                </Grid>
                <S.Tasks item xs={1}>
                  {!task.concluded && 
                  <S.Conclude
                    onClick={() => handleConclude(task)}
                  >
                    Concluir Tarefa'
                  </S.Conclude>}
                </S.Tasks>
              </S.Lines>
    )
}