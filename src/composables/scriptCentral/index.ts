
const global = {
    ScriptList: ref([])
}

export const useScriptList = () => {
    const loading = ref(false)

    const fetchScripts = () => {
console.log('script')
    }

    return { loading, fetchScripts }
}
