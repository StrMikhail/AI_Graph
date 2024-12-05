import { ReactNode } from 'react';
import { Modules, Task } from '../components/ToDoDnD/types';
import { uid } from '../helpers/helpers';
import { Module_C, Module_D, Module_E, Module_F, Module_G, Module_H, Module_I, Module_J } from '../pages/MainPage/components/MainContent/Modules';


export const MODULES_MAP: Record<Modules, ReactNode> = {
    'Module_C': <Module_C />,
    'Module_D': <Module_D />,
    'Module_E': <Module_E />,
    'Module_F': <Module_F />,
    'Module_G': <Module_G />,
    'Module_H': <Module_H />,
    'Module_I': <Module_I />,
    'Module_J': <Module_J />,
}

export const DEFAULT_MODULES: Task[] = [
  {
    id: uid(),
    block: 'A',
    component: 'Module_C'
  },
  {
    id: uid(),
    block: 'B',
    component: 'Module_D'
  },
  {
    id: uid(),
    block: 'B',
    component: 'Module_E'
  },
  {
    id: uid(),
    block: 'C',
    component: 'Module_F'
  },
  {
    id: uid(),
    block: 'C',
    component: 'Module_G'
  },
  {
    id: uid(),
    block: 'D',
    component: 'Module_H'
  },
  {
    id: uid(),
    block: 'D',
    component: 'Module_I'
  },
  {
    id: uid(),
    block: 'D',
    component: 'Module_J'
  },
];
