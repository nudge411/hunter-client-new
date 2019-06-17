import React from "react";
import { Icon } from "react-native-elements";
import { View, StyleSheet, AsyncStorage } from "react-native";

export default class TopBarRightIcons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  movetoLetterScreen = async () => {
    let userToken = await AsyncStorage.getItem("userToken");
    let userTokenArray = userToken.split("-");

    //sex, count, age, comment, teamname, locationId, userId, id
    const teamId = userTokenArray[7];
    const userId = userTokenArray[6];
    const teamName = userTokenArray[4];

    this.props.navigation.navigate("Letter", { teamId, userId, teamName });
  };
  movetoChatList = async () => {
    let userToken = await AsyncStorage.getItem("userToken");
    let userTokenArray = userToken.split("-");

    //sex, count, age, comment, teamname, locationId, userId, id
    const teamId = userTokenArray[7];
    const userId = userTokenArray[6];
    const teamName = userTokenArray[4];

    this.props.navigation.navigate("ChatList", { teamId, userId, teamName });
  };

  render() {
    return (
      <View style={{ flexDirection: "row", marginRight: 5 }}>
        <Icon
          type="font-awesome"
          iconStyle={styles.headerRightIcon}
          name="envelope"
          onPress={() => this.movetoLetterScreen()}
        />
        <Icon
          type="font-awesome"
          iconStyle={styles.headerRightIcon}
          name="comment-o"
          onPress={() => this.movetoChatList()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerRightIcon: {
    marginRight: 20,
    color: "ghostwhite"
  }
});
