import { Color } from 'common';
import { Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width)
const height = Math.round(Dimensions.get('window').height)
export default {
  Tab: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    height: 49,
    fontSize: 20,
    borderBottomWidth: 1.12,
    borderRadius: 10
  },
  MenuClicked: {
    width: '50%'
  },
  Menu: {
    width: '50%'
  },
  Information: {
    width: '50%'
  },
  InformationClicked: {
    width: '50%',
    borderLeftWidth: 1
  },
}