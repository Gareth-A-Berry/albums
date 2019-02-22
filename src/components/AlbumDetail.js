import React from 'react'
import { View, Text, Image, Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'


const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url} = album
  const { thumbnailContainer, thumbnail, textContainer, titleText, imageStyle } = styles
  return (
      <Card>
        <CardSection>
          <View style={thumbnailContainer}>
            <Image
                style={thumbnail}
                source={{uri: thumbnail_image}}
            />
          </View>
          <View style={textContainer}>
            <Text style={titleText}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
              style={imageStyle}
              source={{uri: image}}
          />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
            Buy Now
          </Button>
        </CardSection>
      </Card>
  )
}

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleText: {
    fontSize: 18
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  thumbnail: {
    height: 50,
    width: 50,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
}
export default AlbumDetail