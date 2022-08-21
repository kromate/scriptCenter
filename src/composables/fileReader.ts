interface readBlockObject {
//   comp: () => Promise<{ [key: string]: any }>;
  name: string;
}
export interface getBlockObject {
  comp: () => Promise<{ [key: string]: any }>;
  img?: string;
  index?: string;
  compLoaded?: boolean;
  imgLoaded?: boolean;
  name: string;
}

const FolderReaderList = {
  scriptFiles: import.meta.glob('../../scriptFiles/**/*.md')
}

export const FolderReader = (data: string) => {
  const result: readBlockObject[] = []

    const requireComponent = FolderReaderList[data]
    const BlockArr = Object.keys(requireComponent)

  for (let i = 0; i < BlockArr.length; i++) {
    const obj = {
    //   comp: requireComponent[BlockArr[i]],
      type: BlockArr[i].split('/')[3],
      name: BlockArr[i].split('/')[4]
    }

    result.push(obj)
  }

  return result
}
