import { BoardSections, Block, Task } from '../components/ToDoDnD/types'

export const COLUMNS = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D'
}
  

export const getModuleById = (modules: Task[], id: string) => {
  return modules.find((module) => module.id === id)
}

export const getModuleByCol = (modules: Task[], block: Block) => {
  return modules.filter((module) => module.block === block)
}

export const initializeColumns = (modules: Task[]) => {
  const boardSections: BoardSections = {}

  Object.keys(COLUMNS).forEach((boardSectionKey) => {
    boardSections[boardSectionKey] = getModuleByCol(modules, boardSectionKey as Block)
  })

  return boardSections
}

export const findBoardSectionContainer = ( boardSections: BoardSections, id: string ) => {
  if (id in boardSections) {
    return id
  }

  const container = Object.keys(boardSections).find((key) =>
    boardSections[key].find((item) => item.id === id)
  )

  return container
}

export const extractTasksFromBoardSections = (boardSections: BoardSections): Task[] | undefined => {
  if (boardSections == undefined) return undefined

  for (let key in boardSections) {
    boardSections[key].forEach(item => {
      item.block = key as Block
    })
  }

  return Object.values(boardSections).flat();
};
