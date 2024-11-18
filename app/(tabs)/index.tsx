import {FlatList, StyleSheet, View } from "react-native";

import Card from "@/components/Card";

const dataCard = require('@/assets/dataCard.json');

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataCard.posts}
        renderItem={({ item, index }) => (
          <Card
            id={item.id}
            sumberGambar={item.sumberGambar}
            judul={item.judul}
            keterangan={item.keterangan}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  
});
