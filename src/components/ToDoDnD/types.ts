export type Block = 'A' | 'B' | 'C' | 'D';
export type Modules = 'Module_C' | 'Module_D' | 'Module_E' | 'Module_F' | 'Module_G' | 'Module_H' | 'Module_I' | 'Module_J'

export type Task = {
  id: string;
  block: Block;
  component: Modules
};

export type BoardSections = {
  [name: string]: Task[];
};
