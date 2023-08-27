import React from 'react';
import * as S from './styled';

import { useDispatch } from 'react-redux';
import { Grid, useMediaQuery } from '@mui/material';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { setSelectedTaskSlice } from '../../redux/selectedTaskSlice';
import { useNavigate } from 'react-router-dom';

import formatarData from '../../utils/formatarData';
import { color } from '../../utils/colors';
import { TasksProps } from '../../utils/type';
import { FormData } from "../../utils/type";

interface TaskItemProps {
  task: TasksProps;
  setIsConfirm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TaskItem({ task, setIsConfirm }: TaskItemProps) {
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
    <>
      {task && 
      <S.Lines container concluded={task.concluded}>
        <Grid
          item
          xs={isMobile ? 7 : 8}
          style={{ display: 'flex', cursor: 'pointer' }}
          onClick={() => handleSelected(task as FormData)}
        >
          <S.Tasks item xs={isMobile ? 6.5 : 6}>
            {task.name}
          </S.Tasks>
          {!isMobile &&
            <S.Tasks item xs={5}>
              {formatarData(task.time as unknown as string)}
            </S.Tasks>}
          <S.Tasks item xs={2}>
            {task.concluded ? 'Concluida' : 'Pendente'}
          </S.Tasks>
        </Grid>
        <S.Tasks item xs={2}>
          <S.Severity color={color(task.severity)} />
        </S.Tasks>
        <S.Tasks item xs={isMobile ? 1 : 2}>
          {!task.concluded &&
            <S.Conclude
              onClick={() => handleConclude(task)}
            >
              Concluir Tarefa
            </S.Conclude>}
        </S.Tasks>
      </S.Lines>}
    </>
  )
}