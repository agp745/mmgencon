export interface Service {
    service: string,
    type: 'repairs' | 'minor plumbing' | 'minor electrical' | 'installations' | 'other'| 'kitchen and bath' | null
    isOffered: boolean
}