import type { Service } from "./types"

const handymanServices: Service[] = [
    {
        service: 'cracks on walls and ceilings',
        type: 'repairs',
        isOffered: true
    },
    {
        service: 'repair ugly textures',
        type: 'repairs',
        isOffered: true
    },
    {
        service: 'repair holes in wall or ceiling',
        type: "repairs",
        isOffered: true
    },
    {
        service: 'repair fencing',
        type: "repairs",
        isOffered: true
    },
    {
        service: 'install under sink water filter systems',
        type: 'minor plumbing',
        isOffered: true
    },
    {
        service: 'install faucets kitchen or bath',
        type: 'minor plumbing',
        isOffered: true
    },
    {
        service: 'install garbage disposals',
        type: 'minor plumbing',
        isOffered: true
    },
    {
        service: 'replace leaky valves kitchen or bath ',
        type: 'minor plumbing',
        isOffered: true
    },
    {
        service: 'install outlets and switches',
        type: 'minor electrical',
        isOffered: true
    },
    {
        service: 'install ceiling fans',
        type: 'minor electrical',
        isOffered: true
    },
    {
        service: 'install light fixtures',
        type: 'minor electrical',
        isOffered: true
    },
    {
        service: 'install bathroom exhaust fans',
        type: 'minor electrical',
        isOffered: true
    },
    {
        service: 'install bathroom fixtures and mirrors',
        type: 'installations',
        isOffered: true
    },
    {
        service: 'install TV mounts',
        type: 'installations',
        isOffered: true
    },
    {
        service: 'install over range microwaves',
        type: 'installations',
        isOffered: true
    },
    {
        service: 'install dishwashers',
        type: 'installations',
        isOffered: true
    },
    {
        service: 'install ranges',
        type: 'installations',
        isOffered: true
    },
    {
        service: 'cabinets and vanities',
        type: 'installations',
        isOffered: true
    },
    {
        service: 'interior doors',
        type: 'installations',
        isOffered: true
    },
    {
        service: 'door knobs',
        type: 'installations',
        isOffered: true
    },
    {
        service: 'cabinet hardware',
        type: 'installations',
        isOffered: true
    },
    {
        service: 'attic ladders',
        type: 'installations',
        isOffered: true
    },
    {
        service: 'power washing flat concrete only ',
        type: 'other',
        isOffered: true
    },
    {
        service: 'install  a/c  thermostats',
        type: null,
        isOffered: false
    },
    {
        service: 'install water heaters',
        type: null,
        isOffered: false
    },
    {
        service: 'run new plumbing',
        type: null,
        isOffered: false
    },
    {
        service: 'replace windows or screens',
        type: null,
        isOffered: false
    },
    {
        service: 'gardening or landscaping',
        type: null,
        isOffered: false
    },
    {
        service: 'we do not do haul aways',
        type: null,
        isOffered: false
    },
    {
        service: 'any work requiring permits',
        type: null,
        isOffered: false
    },
]

const remodelsRenovations: Service[] = [
    {
        service: 'install quartz or granites counter tops',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'install backsplash',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'tile bathroom tub to ceiling',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'install drywall',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'tape and float',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'apply textures',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'painting',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'baseboard',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'trims',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'window sills',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'demo walls',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'remodel living spaces',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'accent walls with woodworks',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'install wains board',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'install toe trims aka 1/4 round',
        type: 'kitchen and bath',
        isOffered: true
    },
    {
        service: 'install frameless shower doors',
        type: 'kitchen and bath',
        isOffered: false
    },
    {
        service: 'stucco',
        type: 'kitchen and bath',
        isOffered: false
    },
    {
        service: 'stain concrete',
        type: 'kitchen and bath',
        isOffered: false
    },
    {
        service: 'make adjustments to custom cabinets',
        type: 'kitchen and bath',
        isOffered: false
    },
]

export { handymanServices, remodelsRenovations }
