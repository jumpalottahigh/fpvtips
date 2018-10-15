import {
  treeWideleaf,
  hillsMountains,
  beach,
  urban,
  cropsHighGrass,
  micro,
  mini,
  waterDrop,
} from '../utils/svg'

const mapLegendData = [
  {
    symbol: treeWideleaf,
    label: 'trees',
  },
  {
    symbol: hillsMountains,
    label: 'hills / mountains',
  },
  {
    symbol: waterDrop,
    label: 'lake / sea / river',
  },
  {
    symbol: beach,
    label: 'beach',
  },
  {
    symbol: urban,
    label: 'road / traffic',
  },
  {
    symbol: cropsHighGrass,
    label: 'crops / high grass',
  },
  {
    symbol: micro,
    label: 'good for micro quads',
  },
  {
    symbol: mini,
    label: 'good for mini quads',
  },
]

export default mapLegendData
