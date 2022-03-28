import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d57/db25/dcb8faa9a2bcd1ada07d1da920665295"
        }}
        style={styles.ImageBackground_45_105}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/681f/f58c/244002c49634b66888029eca9d205476"
        }}
        style={styles.ImageBackground_45_108}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31cf/e37d/1a4661b540805e88ae0901c9062b9ef0"
        }}
        style={styles.ImageBackground_45_109}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_45_110}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_679"))
        }
      >
        <Text style={styles.Text_45_110}>Upload File</Text>
      </TouchableOpacity>
      <View style={styles.View_45_111}>
        <Text style={styles.Text_45_111}>Scan File</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_45_112}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("40_129"))
        }
      >
        <View style={styles.View_45_113}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc5/ece8/84b7e739dccd1112e1db9b2a8a338c9d"
            }}
            style={styles.ImageBackground_45_114}
          />
          <View style={styles.View_45_115}>
            <Text style={styles.Text_45_115}>Save Scan</Text>
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b90e/908f/9f485556b3ccc4868ef1b5581ed5a3b7"
        }}
        style={styles.ImageBackground_45_116}
      />
      <View style={styles.View_45_117}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3772/b591/c2a87ae1ab848e8756471915a6ab50a3"
          }}
          style={styles.ImageBackground_45_118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae7e/ac40/93658027b0cba818ecc517d02be6d83a"
          }}
          style={styles.ImageBackground_45_149}
        />
        <View style={styles.View_45_124} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(251, 251, 251, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_45_105: {
    width: wp("126%"),
    minWidth: wp("126%"),
    height: hp("139%"),
    minHeight: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-12%"),
    top: hp("-14%")
  },
  ImageBackground_45_108: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("16%")
  },
  ImageBackground_45_109: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("16%")
  },
  TouchableOpacity_45_110: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_45_110: {
    color: "rgba(207, 207, 207, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_111: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_45_111: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_45_112: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("97%")
  },
  View_45_113: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_45_114: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_115: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_45_115: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_45_116: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("22%")
  },
  View_45_117: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%")
  },
  ImageBackground_45_118: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_45_149: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_45_124: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.11999999731779099,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 36
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
