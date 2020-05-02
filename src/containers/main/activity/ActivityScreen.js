/* eslint-disable no-undef */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import colors from 'res/colors';
import ProfilePicture from 'components/ProfilePicture';
import Activity from './Activity';

const ActivityScreen = () => {
  const allMessages = [
    {
      key: 'Bugün',
      messages: [
        {
          key: 'ngordon',
          hasStory: true,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=8',
          sendTime: 'şimdi',
          lastMsg:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
          mentionedImage: 'https://picsum.photos/512',
        },
        {
          key: 'r_von_rails',
          hasStory: false,
          activityType: 'like',
          src: 'https://i.pravatar.cc/150?img=9',
          sendTime: '1s',
          lastMsg:
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam',
          mentionedImage: 'https://picsum.photos/512',
        },
        {
          key: 'figNelson',
          hasStory: false,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=10',
          sendTime: '3s',
          lastMsg: '😂',
          mentionedImage: 'https://picsum.photos/512',
        },
      ],
    },
    {
      key: 'Dün',
      messages: [
        {
          key: 'benjaminEv',
          hasStory: false,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=11',
          sendTime: '1g',
          lastMsg:
            'scelerisque viverra mauris in aliquam. Pellentesque elit eget gravida',
          mentionedImage: 'https://picsum.photos/512',
        },
        {
          key: 'gilesPos',
          hasStory: true,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=12',
          sendTime: '1g',
          lastMsg:
            'cum sociis. Id porta nibh venenatis cras sed felis eget velit aliquet.',
          mentionedImage: 'https://picsum.photos/512',
        },
      ],
    },
    {
      key: 'Bu hafta',
      messages: [
        {
          key: 'hugh27',
          hasStory: false,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=13',
          sendTime: '2g',
          lastMsg:
            'Imperdiet dui accumsan sit amet. Sed cras ornare arcu dui vivamus',
          mentionedImage: 'https://picsum.photos/512',
        },
        {
          key: 'b_guidelines',
          hasStory: false,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=14',
          sendTime: '3g',
          lastMsg:
            'arcu felis bibendum ut. Scelerisque purus semper eget duis at tellus at',
          mentionedImage: 'https://picsum.photos/512',
        },
        {
          key: 'ngordon2',
          hasStory: false,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=8',
          sendTime: '5g',
          lastMsg:
            'urna condimentum. Aliquam sem et tortor consequat id. Lorem sed',
          mentionedImage: 'https://picsum.photos/512',
        },
      ],
    },
    {
      key: 'Bu ay',
      messages: [
        {
          key: 'r_von_rails2',
          hasStory: false,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=9',
          sendTime: '1h',
          lastMsg:
            'risus ultricies tristique nulla. At quis risus sed vulputate. Consectetur',
          mentionedImage: 'https://picsum.photos/512',
        },
        {
          key: 'figNelson2',
          hasStory: false,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=10',
          sendTime: '2h',
          lastMsg:
            'libero id faucibus nisl tincidunt. Id semper risus in hendrerit gravida',
          mentionedImage: 'https://picsum.photos/512',
        },
        {
          key: 'benjaminEv2',
          hasStory: false,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=11',
          sendTime: '3h',
          lastMsg:
            'rutrum quisque non tellus. Nibh ipsum consequat nisl vel pretium',
          mentionedImage: 'https://picsum.photos/512',
        },
      ],
    },
    {
      key: 'Daha öncekiler',
      messages: [
        {
          key: 'gilesPos2',
          hasStory: false,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=12',
          sendTime: '5h',
          lastMsg:
            'lectus quam id leo. Massa sapien faucibus et molestie. Semper eget',
          mentionedImage: 'https://picsum.photos/512',
        },
        {
          key: 'hugh272',
          hasStory: false,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=13',
          sendTime: '6h',
          lastMsg:
            'duis at tellus at urna condimentum. Duis convallis convallis tellus id',
          mentionedImage: 'https://picsum.photos/512',
        },
        {
          key: 'b_guidelines2',
          hasStory: false,
          activityType: 'mention',
          src: 'https://i.pravatar.cc/150?img=14',
          sendTime: '8h',
          lastMsg:
            'interdum velit laoreet. Velit aliquet sagittis id consectetur purus.',
          mentionedImage: 'https://picsum.photos/512',
        },
      ],
    },
  ];

  const friendRequest = {
    src: 'https://picsum.photos/512',
    notificationCount: 6,
  };

  renderHeaderDate = item => {
    return <Text style={styles.headerDate}>{item.key}</Text>;
  };

  renderPageContent = ({item}) => {
    return (
      <FlatList
        ListHeaderComponent={this.renderHeaderDate(item)}
        data={item.messages}
        renderItem={({item}) => <Activity item={item} />}
      />
    );
  };

  renderFriendRequests = () => {
    if (!friendRequest.notificationCount) {
      return null;
    }
    return (
      <View style={styles.friendRequestContainer}>
        <ProfilePicture item={friendRequest} size={48} />
        <View style={styles.friendRequestTextColumn}>
          <Text style={styles.friendRequestTitle}>Takip İstekleri</Text>
          <Text style={styles.friendRequestSubtitle}>
            İstekleri onayla veya yok say
          </Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={this.renderFriendRequests}
      data={allMessages}
      renderItem={this.renderPageContent}
    />
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.background, padding: 20},
  headerDate: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  friendRequestContainer: {
    flex: 1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  friendRequestTextColumn: {marginLeft: 15},
  friendRequestTitle: {color: colors.text},
  friendRequestSubtitle: {color: colors.textFaded2},
});

export default ActivityScreen;
