import React, { useState } from 'react';
import * as S from "./styled"
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../redux/store';
import { OptionsProps, TasksProps } from '../../utils/type';
import { AddApi, updateApi } from '../../redux/apiSlice';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../Dropdown';
import { options } from '../../utils/options';
import { FormData } from "../../utils/type";

interface TaskFormProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>,
}

const initialFormData: FormData = {
    id: '',
    name: '',
    description: '',
    severity:'',
    time: new Date(),
    concluded: false,
};

const TaskForm = ({ setShowModal, setLoading }: TaskFormProps) => {
    const navigate = useNavigate();
    const { tasks } = useSelector((state: RootState) => state.api);
    const { selectedTask } = useSelector((state: RootState) => state.selectedTask);
    const [formData, setFormData] = useState<FormData>(selectedTask as FormData);
    const [formErrors, setFormErrors] = useState<Partial<FormData>>({});    

    const dispatch: ThunkDispatch<RootState, undefined, Action<any>> = useDispatch();

    const handleCloseModal = () => {
        setShowModal(false);
        setFormData(initialFormData);
        setFormErrors({});
    };

    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {        
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    // const handleDropdownChange = (options: OptionsProps) => {        
    //     setFormData({ ...formData, ['severity']: options.value });
    // };

    const handleDropdownChange = (selectedOption: OptionsProps) => {
        setFormData((prevFormData) => ({ ...prevFormData, severity: selectedOption.value }));
    };

    // const handlePost = (array: TasksProps) => {        
    //     dispatch(AddApi(array));
    //     setShowModal(false)
    //     setTimeout(() => {
    //         window.location.reload()
    //     }, 500);
    // };

    const handlePost = async (array: TasksProps) => {
        dispatch(AddApi(array));
        setShowModal(false);
        await new Promise((resolve) => setTimeout(resolve, 500));
        window.location.reload();
    };

    const handlePatch = (id: string, patchData: TasksProps) => {
        dispatch(updateApi({ item: id, patchData: patchData }));
        setTimeout(() => {
            navigate('/')
        }, 500);
    };

    // const handleAdd = async () => {
    //     if (setLoading) {
    //         setLoading(true)
    //     }
    //     if (!formData) {
    //         return;
    //     }
    //     const tasksArray = tasks ? Object.entries(tasks) : [];
    //     const existingtask = tasksArray?.find(([_, task]) => {
    //         const { id } = task;
    //         return (
    //             id === formData.id
    //         );
    //     });
    //     if (existingtask) {
    //         await handlePatch(existingtask[0], formData);
    //     } else {
    //         const newFormData = { ...formData, id: uuidv4() };
    //         await handlePost(newFormData);
    //     }

    //     setShowModal(false);
    //     setTimeout(() => {
    //         window.location.reload();
    //     }, 500);
    // }

    const handleAdd = async () => {
        if (setLoading) {
            setLoading(true);
        }
        if (!formData) {
            return;
        }
        const tasksArray = tasks ? Object.entries(tasks) : [];
        const existingTask = tasksArray.find(([_, task]) => task.id === formData.id);
    
        if (existingTask) {
            await handlePatch(existingTask[0], formData);
        } else {
            const newFormData = { ...formData, id: uuidv4() };
            await handlePost(newFormData);
        }
    
        setShowModal(false);
        await new Promise((resolve) => setTimeout(resolve, 500));
        window.location.reload();
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors: Partial<FormData> = {};
        if (!formData.name) {
            errors.name = 'Nome é obrigatório';
        }
        if (!formData.description) {
            errors.description = 'Descrição é obrigatória';
        }
        if (!formData.severity) {
            errors.severity = 'É obrigatório uma severidade';
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            console.log('Formulário válido:', formData);
        }
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Close className="close" onClick={handleCloseModal}>
                    X
                </S.Close>
                <S.Title>{formData.name === '' ? 'Adicionar tarefa' : 'Editar tarefa'}</S.Title>
                <S.Form onSubmit={handleSubmit}>
                    <S.FormGroup>
                        <S.Atribute>Nome tarefa</S.Atribute>
                        <S.Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        {formErrors.name && <span className="error" style={{color: 'red'}}>{formErrors.name}</span>}
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Atribute>Descrição da tarefa</S.Atribute>
                        <S.Input type="text" name="description" value={formData.description} onChange={handleInputChange} />
                        {formErrors.description && <span className="error" style={{color: 'red'}}>{formErrors.description}</span>}
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Atribute>Severidade da Tarefa</S.Atribute>
                        <Dropdown options={options} text={formData.severity && formData.severity.length > 0 ? formData.severity : "Selecione uma opção"} onChange={handleDropdownChange}/>
                        {formErrors.severity && <span className="error" style={{color: 'red'}}>{formErrors.severity}</span>}
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Add
                            type="submit"
                            onClick={() => {
                                if (formData.name && formData.description && formData.severity) {
                                    handleAdd();
                                }
                            }}>{formData.name === '' ? 'Adicionar' : 'Salvar'}</S.Add>
                        <S.Cancel type="button" onClick={handleCloseModal}>Cancelar</S.Cancel>
                    </S.FormGroup>
                </S.Form>
            </S.Container>
        </S.Wrapper>
    );
};

export default TaskForm;