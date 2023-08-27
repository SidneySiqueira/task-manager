import React from 'react';
import * as S from "./styled";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { TaskStateProps, TasksProps } from '../../utils/type';
import { deleteApi } from '../../redux/apiSlice';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../TaskForm';
import { color } from '../../utils/colors';

const Info = () => {
    const [showModal, setShowModal] = React.useState(false);

    const navigate = useNavigate();

    const { tasks } = useSelector((state: RootState) => state.api);
    const { selectedTask }: TaskStateProps = useSelector((state: RootState) => state.selectedTask);        

    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    const handleOpenEdit = () => {
        setShowModal(true);
    }

    const handleDelete = (item: TasksProps) => {
        const tasksArray = tasks ? Object.entries(tasks) : [];
        const existingTask = tasksArray.find(([_, task]) => task.time === item.time);
        existingTask && dispatch(deleteApi(existingTask[0]));
       
        setTimeout(() => {
            navigate('/');
        }, 500);
    };
    
    return (
        <S.Wrapper>
            <S.Container>
                <S.Back className="close" onClick={() => navigate('/')}>
                    <ArrowBackIcon/> Voltar
                </S.Back>
                <S.Title>{(selectedTask as TasksProps).name}</S.Title>
                <S.Severity color={color((selectedTask as TasksProps).severity)}>{(selectedTask as TasksProps).severity}</S.Severity>
                <S.BoxName>
                    <S.Description>{(selectedTask as TasksProps).description}</S.Description>
                </S.BoxName>
                <S.BoxButton>
                    {!(selectedTask as TasksProps).concluded && <S.Edit onClick={handleOpenEdit}>Editar</S.Edit>}
                    <S.Delete onClick={() => handleDelete(selectedTask as TasksProps)}>Excluir</S.Delete>
                </S.BoxButton>
            </S.Container>
            {showModal && <TaskForm setShowModal={setShowModal} />}
        </S.Wrapper>
    );
};

export default Info;
