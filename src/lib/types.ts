export type ServiceType = 'repairs' | 'minor plumbing' | 'minor electrical' | 'installations' | 'other'| 'kitchen and bath' | 'handyman-not_offered' | 'remodels-not_offered'

export interface Service {
    service: string,
    type: ServiceType
    isOffered: boolean
}