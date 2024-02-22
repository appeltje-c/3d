// @ts-nocheck

import {create} from "zustand";

const useStore = create((set, get) => ({
    fileName: '',
    buffer: null,
    textOriginalFile: '',
    animations: false,
    code: '',
    scene: null,
    generateScene: async (config: any) => {

        const {fileName, buffer} = get()

        const result = await new Promise((resolve, reject) => gltfLoader.parse(buffer, '', resolve, reject))

        const code = parse(result, {...config, fileName, printwidth: 100})

        try {

            const prettierConfig = config.types
                ? {parser: 'typescript', plugins: [parserTS]}
                : {parser: 'babel', plugins: [parserBabel]}

            set({
                code: prettier.format(code, prettierConfig),
            })

        } catch {
            set({
                code: code,
            })
        }
        set({
            animations: !!result.animations.length,
        })
        if (!get().scene) set({scene: result.scene})
    },
}))

export default useStore
