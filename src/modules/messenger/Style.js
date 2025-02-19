import { Color, BasicStyles } from 'common';
import { Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);
export default {
  ScrollView: {
    padding: 10
  },
  ScrollViewGroup: {
    width: '100%'
  },
  MainContainer: {
    width: '100%'
  },
  text: {
    color: Color.normalGray
  },
  btn: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
  },
  Separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: Color.lightGray
  },
  formControl: {
    height: 50,
    width: '80%',
  },
  messageTextRight: {
    backgroundColor: Color.primary,
    color: Color.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: '30%',
    overflow: 'hidden'
  },
  messageTextRightIOS: {
    color: Color.white,
    textAlign: 'left'
  },
  messageTextLeft: {
    backgroundColor: Color.primary,
    color: Color.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: '30%',
  },
  messageTextLeftIOS: {
    color: Color.white,
    textAlign: 'right'
  },
  dateText: {
    color: Color.gray,
    fontSize: 11,
    paddingTop: 5,
    paddingBottom: 5
  },
  messageImage: {
    width: 100,
    height: 100
  },
  dateTextLeft: {
    color: Color.gray,
    fontSize: 11,
    paddingTop: 5,
    paddingBottom: 5
  },
  templateText: {
    color: Color.primary,
    fontSize: 11,
    textAlign: 'center'
  },
  templateBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
    color: Color.primary,
    backgroundColor: Color.white,
    borderColor: Color.primary,
    borderWidth: 1
  },
  settingsTitles: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: Color.gray,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  settingsButton: {
    width: 70,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'white',
    paddingTop: 2,
    paddingBottom: 2
  },
  signatureFrameContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  signatureFrame: {
    height: 100,
    width: (width / 2) - 4,
    borderWidth: 1,
    borderColor: Color.gray,
    margin: 2
  },
  signatureAction: {
    width: (width / 2) - 4,
    borderWidth: 1,
    height: 50,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  signatureActionDanger: {
    borderColor: Color.white,
    backgroundColor: Color.danger
  },
  signatureActionSuccess: {
    borderColor: Color.white,
    backgroundColor: Color.success
  },
  signatureFullSuccess: {
    width: width - 4,
    borderWidth: 1,
    height: 50,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: BasicStyles.elevation,
    width: width - 50
  }
}
