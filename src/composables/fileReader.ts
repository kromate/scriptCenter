export type scriptListType = {
	type: string;
	name: string;
	fullLink: string;
	tags: string[];
	desc: string;
};

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
	const result: scriptListType[] = []
	const requireComponent = FolderReaderList[data]
	const BlockArr = Object.keys(requireComponent)

	for (let i = 0; i < BlockArr.length; i++) {
		if (BlockArr[i].split('/')[4].includes('.md')) continue
		const obj = {
			type: BlockArr[i].split('/')[3],
			name: BlockArr[i].split('/')[4],
			fullLink: BlockArr[i],
			tags: [],
			desc: ''
		}

		result.push(obj)
	}

	return result
}

export const logFileText = async (file) => {
  console.log(file)
	const response = await fetch(file)
	const text = await response.text()
	console.log(text)
}

export const byFolderType = () => {
  const requireScript = import.meta.glob('../../scriptFiles/**/*.md')
const scriptArr = Object.keys(requireScript)
  console.log(requireScript)
}

// logFileText('../../../../scriptFiles/JavaScript/Active_pull_request_commentors/script.js')
