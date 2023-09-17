import { readdirSync } from 'fs'

export const getFiles = (conType: string): string[] => {
    const conPath = `${process.cwd()}/src/${conType}`

    return readdirSync(conPath)
        .filter(file => file.endsWith('.ts'))
        .map(file => import.meta.resolveSync(`${conPath}/${file}`))
}
