import {
  treeWideleaf,
  hillsMountains,
  beach,
  urban,
  cropsHighGrass,
  micro,
  mini,
  waterDrop,
  plane,
  longRange,
} from '../utils/svg'

const mapLegendData = [
  {
    symbol: treeWideleaf,
    label: 'Trees',
    value: 'trees',
  },
  {
    symbol: hillsMountains,
    label: 'Hills / Mountains',
    value: 'hills',
  },
  {
    symbol: waterDrop,
    label: 'Water',
    value: 'water',
  },
  {
    symbol: beach,
    label: 'Beach',
    value: 'beach',
  },
  {
    symbol: urban,
    label: 'Urban',
    value: 'urban',
  },
  {
    symbol: cropsHighGrass,
    label: 'Crops / High grass',
    value: 'crops',
  },
  {
    symbol: micro,
    label: 'Good for micro quads',
    value: 'micro',
  },
  {
    symbol: mini,
    label: 'Good for mini quads',
    value: 'mini',
  },
  {
    symbol: plane,
    label: 'Good for planes',
    value: 'plane',
  },
  {
    symbol: longRange,
    label: 'Good for long range',
    value: 'long range',
  },
]

export default mapLegendData
