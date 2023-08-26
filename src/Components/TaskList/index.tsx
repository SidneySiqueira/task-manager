import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid, useMediaQuery } from '@mui/material';

import * as S from './styled';
import TaskForm from '../TaskForm';
import Confirm from '../Confirm';

import { RootState } from '../../redux/store';
import { TasksProps } from '../../utils/type';
import { fetchApi } from '../../redux/apiSlice';
import { setSelectedTaskSlice } from '../../redux/selectedTaskSlice';
import TaskItem from '../TaskItem';
import CategoryFilter from '../CategoryFilter';

interface FormData {
  id: string;
  name: string;
  description: string;
  time: Date;
  concluded: boolean;
}

const initialFormData: FormData = {
  id: uuidv4(),
  name: '',
  description: '',
  time: new Date(),
  concluded: false,
};

export default function TaskList() {
  const [showModal, setShowModal] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newTasks, setNewTasks] = useState<TasksProps[]>([])
  const isMobile = useMediaQuery('(max-width:758px)');

  const { tasks } = useSelector((state: RootState) => state.api);
  const tasksArray = tasks ? Object.values(tasks) : [];

  const newTasksArray = newTasks.length > 0 ? newTasks : tasksArray

  const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

  useEffect(() => {
      setLoading(true);
    dispatch(fetchApi())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  const addDescription = () => {
    dispatch(setSelectedTaskSlice(initialFormData));
    setShowModal(true);
  };

  return (
    <S.Container>
      <S.ButtonBox>
        <CategoryFilter newTasks={newTasks} setNewTasks={setNewTasks} tasksArray={tasksArray}/>
        <S.AddTask onClick={addDescription}>Adicionar Descrição</S.AddTask>
      </S.ButtonBox>
      <S.Table>
        <S.Content>
          <S.Lines container>
            <Grid item xs={10} style={{ display: 'flex' }}>
              <S.Title item xs={6}>
                Descrição
              </S.Title>
              {!isMobile &&
                <S.Title item xs={4}>
                  Data de Criação
                </S.Title>}
              <S.Title item xs={2}>
                Status
              </S.Title>
            </Grid>
          </S.Lines>
        </S.Content>
        {loading ? (
          <CircularProgress />
        ) : (
          <S.Content>
            {newTasksArray.map((task, index) => (
              <TaskItem task={task} index={index} setIsConfirm={setIsConfirm} />
            ))}
          </S.Content>
        )}
      </S.Table>
      {showModal && <TaskForm setShowModal={setShowModal} setLoading={setLoading} />}
      {isConfirm && <Confirm setIsConfirm={setIsConfirm} setLoading={setLoading} />}
    </S.Container>
  );
}