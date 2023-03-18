// Firebase
import { collection, getDocs, Query, query, where } from 'firebase/firestore'
import { db } from '../firebase'
// Interfaces
import { Category, Note } from '../types'


export const fetchNotes = async (ids: string[]): Promise<Note[]> => {
    const ref = collection(db, 'notes')
    if (ids.length === 0) return await _formatDocs(ref)

    const result: Note[] = []
    for (let i = 0; i < ids.length; i += 10) {
        const q = query(
            ref,
            where(
                'categoryId',
                'in',
                ids.slice(i, Math.min(i + 10, ids.length))
            )
        )
        const notes = await _formatDocs<Note>(q)
        result.push(...notes)
    }
    return result
}

export const fetchCategories = async (): Promise<Category[]> =>
    await _formatDocs<Category>(collection(db, 'categories'))

const _formatDocs = async <T>(query: Query): Promise<T[]> => {
    return (await getDocs(query)).docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as T
    })
}
