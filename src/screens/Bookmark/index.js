import {StyleSheet, Text, View, ScrollView, } from 'react-native';
import React from 'react';
import {Add, ArrowRight2} from 'iconsax-react-native';
import { fontType, colors } from '../../assets/theme';
import ItemBookmark from '../../components/ItemBookmark';
import {BlogList} from '../../../data';

const Bookmark = () => {
  return (
    <View style={styles.headerOlahraga}>
      <View style={styles.olahragaPopulterTitleContainer}>
      <Text style={styles.textSeni}>Berita Tentang Olahraga</Text>
        {/* <ArrowRight2 color={colors.black()} variant="Linear" size={20} /> */}
      </View>
      <View style={beritaOlahraga.listCard}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal:24, gap:10, paddingVertical:10}}>
        {BlogList.map((item, index) => (
          <ItemBookmark item={item} key={index} />
        ))}
        </View>
      </ScrollView>
      <ScrollView>
      <View style={styles.listBlog}>
        <View style={{paddingHorizontal: 24}}>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontFamily: fontType['Pjs-Bold'],
            }}>
            Daftar Olahraga
          </Text>
          <View>
            {BlogList.map((item, index) => (
              <ItemBookmark item={item} key={index} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
 listCard: {
 paddingVertical: 10,
 },
 textSeni: {
  fontSize: 20,
  marginRight: 8,
  fontFamily: fontType['Pjs-ExtraBold'],
  color: colors.black(),
  },
 
 cardItem: {
 backgroundColor: 'rgba()',
 flexDirection: 'row',
 borderRadius: 10,
 },

 cardCategory: {
 color: 'rgba(34, 107, 71, 1)',
 fontSize: 10,
 fontFamily: fontType['Pjs-SemiBold'],
 },

 cardTitle: {
 fontSize: 14,
 fontFamily: fontType['Pjs-Bold'],
 color: colors.black(),
 },

 cardText: {
 fontSize: 10,
 fontFamily: fontType['Pjs-Medium'],
 color: 'rgba(5, 107, 71, 0.6)',
 },

 cardImage: {
 width: 100,
 height: 'auto',
 borderRadius: 10,
 resizeMode: 'cover',
 },

 cardInfo: {
 flexDirection: 'row',
 gap: 5,
 alignItems: 'center',
 },
 olahragaPopulerTitleContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  },
 
 cardContent: {
 gap: 10,
 justifyContent: 'space-between',
 paddingRight: 10,
 paddingLeft: 15,
 flex: 1,
 paddingVertical: 10,
 },

 headerOlahraga: {
  paddingHorizontal: 24,
  paddingTop: 16,
  },

  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
    },
});

const beritaOlahraga = StyleSheet.create({
  listCard: {
    paddingVertical: 10,
    },
    cardItem: {
    backgroundColor: 'rgba()',
    flexDirection: 'row',
    borderRadius: 10,
    },
    cardCategory: {
    color: 'rgba(34, 107, 71, 1)',
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
    },
    cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    },
    cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: 'rgba(5, 107, 71, 0.6)',
    },
    cardImage: {
    width: 100,
    height: 'auto',
    borderRadius: 10,
    resizeMode: 'cover',
    },
    cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    },
    cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
    },
   });