import { createGlobalState, useDark } from '@vueuse/core'

export const useDarkGlobal = createGlobalState(() => useDark())
