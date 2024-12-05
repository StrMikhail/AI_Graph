import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Task } from './types';
import SortableItem from './SortableItem';
import { FC } from 'react';
import styles from './s.module.css';
import { MODULES_MAP } from '../../constants/defaultModules';

type BoardSectionProps = {
  id: string;
  title: string;
  tasks: Task[];
};

const BoardSection: FC<BoardSectionProps>= (props) => {
    const {id, tasks} = props
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div className={styles.section}>
      <SortableContext
        id={id}
        items={tasks}
        strategy={verticalListSortingStrategy}
      >
        <div className={styles.drop} ref={setNodeRef}>
           {tasks.map((task) => (
                <div className={styles.drag} key={task.id}>
                <SortableItem id={task.id}>
                        {MODULES_MAP[task.component]}
                </SortableItem>
                </div>
            ))}
        </div>
      </SortableContext>
    </div>

 


  );
};

export default BoardSection;
