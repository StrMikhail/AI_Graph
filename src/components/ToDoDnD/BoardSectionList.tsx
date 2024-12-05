import { useCallback, useEffect, useState } from 'react';
import {
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  DndContext,
  closestCorners,
  DragEndEvent,
  DragStartEvent,
  DragOverEvent,
  DragOverlay,
  DropAnimation,
  defaultDropAnimation,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';
import { BoardSections as BoardSectionsType } from './types';
import { findBoardSectionContainer, initializeColumns, getModuleById, extractTasksFromBoardSections } from '../../helpers/dnd';
import { DEFAULT_MODULES, MODULES_MAP } from '../../constants/defaultModules';
import BoardSection from './BoardSection';
import styles from './s.module.css';
import { storage } from '../../helpers/localstorage';
import { uid } from '../../helpers/helpers';


const BoardSectionList = () => {
    const localData = storage.get('modules')
    const tasks =  localData !== undefined ? localData : DEFAULT_MODULES;
    console.log( uid() ,localData)
// console.log(extractTasksFromBoardSections(storage.get('modules')) , DEFAULT_MODULES)


    const initialBoardSections = initializeColumns(tasks);

    const [boardSections, setBoardSections] = useState<BoardSectionsType>(() => initialBoardSections);

    const [activeTaskId, setActiveTaskId] = useState<null | string>(null);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragStart = ({ active }: DragStartEvent) => {
        setActiveTaskId(active.id as string);
    };

    const handleDragOver = ({ active, over }: DragOverEvent) => {
        const activeContainer = findBoardSectionContainer(boardSections, active.id as string)
        const overContainer = findBoardSectionContainer(boardSections, over?.id as string)

        if (!activeContainer || !overContainer || activeContainer === overContainer) {
        return;
        }

        setBoardSections((boardSection) => {
        const activeItems = boardSection[activeContainer]
        const overItems = boardSection[overContainer]

        const activeIndex = activeItems.findIndex(
            (item) => item.id === active.id
        )
        const overIndex = overItems.findIndex((item) => item.id !== over?.id);

        return {
            ...boardSection,
            [activeContainer]: [
            ...boardSection[activeContainer].filter(
                (item) => item.id !== active.id
            ),
            ],
            [overContainer]: [
            ...boardSection[overContainer].slice(0, overIndex),
            boardSections[activeContainer][activeIndex],
            ...boardSection[overContainer].slice(
                overIndex,
                boardSection[overContainer].length
            ),
            ],
        }
        })
    }

    const handleDragEnd = ({ active, over }: DragEndEvent) => {
        const activeContainer = findBoardSectionContainer(boardSections, active.id as string)
        const overContainer = findBoardSectionContainer(boardSections, over?.id as string)

        if (!activeContainer || !overContainer || activeContainer !== overContainer) {
        return;
        }

        const activeIndex = boardSections[activeContainer].findIndex(
        (task) => task.id === active.id
        );
        const overIndex = boardSections[overContainer].findIndex(
        (task) => task.id === over?.id
        );

        if (activeIndex !== overIndex) {
        setBoardSections((boardSection) => {
            return ({
            ...boardSection,
            [overContainer]: arrayMove(
            boardSection[overContainer],
            activeIndex,
            overIndex
            ),
        })
        });
        }
        setActiveTaskId(null);
    };

    const dropAnimation: DropAnimation = {
        ...defaultDropAnimation,
    };

    useEffect(() => {
        storage.set('modules',extractTasksFromBoardSections(boardSections))
    }, [activeTaskId])

    const task = activeTaskId ? getModuleById(tasks, activeTaskId) : null;

    return (
        <div>
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
        >
            <div className={styles.content}>
            {Object.keys(boardSections).map((boardSectionKey) => (
                <BoardSection
                    key={boardSectionKey}
                    id={boardSectionKey}
                    title={boardSectionKey}
                    tasks={boardSections[boardSectionKey]}
                />
            ))}
            <DragOverlay dropAnimation={dropAnimation}>
                {task ? <div>{MODULES_MAP[task.component]}</div> : null}
            </DragOverlay>
            </div>
        </DndContext>
        </div>
    );
};

export default BoardSectionList;
