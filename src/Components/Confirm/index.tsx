import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styled'
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { TaskStateProps, TasksProps } from '../../utils/type';
import { updateApi } from '../../redux/apiSlice';

interface ConfirmProps {
    setIsConfirm: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Confirm({setIsConfirm, setLoading}:ConfirmProps) {
    const { tasks } = useSelector((state: RootState) => state.api);

    const { selectedTask } : TaskStateProps = useSelector((state: RootState) => state.selectedTask);

    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();
    
    const handlePatch = async (item: TasksProps) => {
        const updatedTask = { ...selectedTask, concluded: true };
        await dispatch(updateApi({ item: item as unknown as string, patchData: updatedTask as TasksProps }));
      };

      const handleConclude = async () => {
        setLoading(true)
        const tasksArray = tasks ? Object.entries(tasks) : [];
        const existingtask = tasksArray?.find(([_, task]) => {
            const { id } = task;
            return (
                id === (selectedTask as TasksProps).id
            );
        });
        if (existingtask) {
            await handlePatch(existingtask[0] as unknown as TasksProps);
        } 
        setIsConfirm(false)
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }

    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>A tarefa vai alterar para concluida.</S.Title>
                <S.Title>Tem certeza?</S.Title>
                <S.BoxButtons>
                    <S.Yes onClick={handleConclude}>Sim</S.Yes>
                    <S.No onClick={() => setIsConfirm(false)}>Não</S.No>
                </S.BoxButtons>
            </S.Container>
        </S.Wrapper>
    )
}
