import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";

export default class ContactComponent extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };
  render() {
    return (
      <ScrollView>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text>
            {`
          1 Nucamp Way
          Seattle, WA 98001 

          U.S.A. 


          Phone: 1-206-555-1234 

          Email: campsites@nucamp.co `}
          </Text>
        </Card>
      </ScrollView>
    );
  }
}
