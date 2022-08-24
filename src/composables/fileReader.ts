import { v4 as uuidv4 } from 'uuid'

export type scriptListType = {
	type: string;
	name: string;
	id: string;
	tags: string[];
	desc: string;
};

const FolderReaderList = {
	scriptFiles: import.meta.glob('../../scriptFiles/**/*.md')
}

export const FolderReader = (data: string) => {
	const result: scriptListType[] = []
	const requireComponent = FolderReaderList[data]
	const BlockArr = Object.keys(requireComponent)

	for (let i = 0; i < BlockArr.length; i++) {
		const id = uuidv4()
		if (BlockArr[i].split('/')[4].includes('.md')) continue
		const obj = {
			type: BlockArr[i].split('/')[3],
			name: BlockArr[i].split('/')[4],
			id,
			tags: [],
			desc: ''
		}
		result.push(obj)
	}

	return result
}

export const logFileText = async (file) => {
	const response = await fetch(file)
	const text = await response.text()
	return text
}

export const byFolderType = async () => {
	const FolderTypeObject = {}
	const requireScript = import.meta.glob('../../scriptFiles/**')
	const scriptArr = Object.keys(requireScript)
	for (let i = 0; i < scriptArr.length; i++) {
		if (scriptArr[i].split('/')[4].includes('.md')) continue
		const type = scriptArr[i].split('/')[3]
		const folder = scriptArr[i].split('/')[4]
		const file = scriptArr[i].split('/')[5]
		if (!FolderTypeObject[type]) FolderTypeObject[type] = {}
		if (!FolderTypeObject[type][folder]) FolderTypeObject[type][folder] = []

		FolderTypeObject[type][folder].push({
			fileName: file,
			content: await logFileText(scriptArr[i])
		})
	}
	return FolderTypeObject
}
