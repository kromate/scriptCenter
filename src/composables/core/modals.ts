import { ref } from 'vue'
import { useModal } from './modal'
import CreateScript from '@/components/modals/CreateScript.vue'

type StageTypes = 'CreateScript'

const StageModals = { CreateScript } as Record<StageTypes, any>

export const modal = useModal(ref([] as any))
const stageModal = modal.register('Stage', StageModals)

export const useStageModal = () => stageModal
