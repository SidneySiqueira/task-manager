import React, { useCallback, useState } from 'react';
import * as S from './styled';
import sortByTime from '../../utils/sortByTime';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function CategoryFilter({ newTasks, setNewTasks, tasksArray }: any) {
    const [isMostRecent, setIsMostRecent] = useState(true)
    const [isFilter, setIsFilter] = useState(false)
    const [itsDone, setItsDone] = useState(false)

    const OrderTasks = useCallback(() => {
        setIsFilter(false)
        setItsDone(false)
        if (newTasks && newTasks.length <= 0) {
            setIsMostRecent(false);
            const newArray = sortByTime(tasksArray, isMostRecent);
            setNewTasks(newArray);
        }
        setIsMostRecent(!isMostRecent);
        const newArray = sortByTime(tasksArray, isMostRecent);
        setNewTasks(newArray);
    }, [isMostRecent, tasksArray]);

    const filterTasksByConcluded = (concluded: boolean) => {
        setIsFilter(true)
        setItsDone(concluded)
        const filteredTasks = tasksArray.filter((task: any) => task.concluded === concluded);
        return setNewTasks(filteredTasks);
    };
    return (
        <>
            <S.FilteredOrder onClick={() => filterTasksByConcluded(true)}>{isFilter && itsDone ? <CheckBoxIcon color="success" /> : <CheckBoxOutlineBlankIcon />}Concluidos</S.FilteredOrder>
            <S.FilteredOrder onClick={() => filterTasksByConcluded(false)}>{isFilter && !itsDone ? <CheckBoxIcon color="success" /> : <CheckBoxOutlineBlankIcon />}Pendentes</S.FilteredOrder>
            {isMostRecent ? <S.FilteredOrder onClick={OrderTasks}><ArrowUpwardIcon />Menos recente</S.FilteredOrder> :
                <S.FilteredOrder onClick={OrderTasks}><ArrowDownwardIcon />Mais recente</S.FilteredOrder>}
        </>
    )
} 