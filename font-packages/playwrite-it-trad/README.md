# @expo-google-fonts/playwrite-it-trad

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-it-trad)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-it-trad)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-it-trad)

This package lets you use the [**Playwrite IT Trad**](https://fonts.google.com/specimen/Playwrite+IT+Trad) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite IT Trad

![Playwrite IT Trad](./font-family.png)

This font family contains [4 styles](#-gallery).

- `PlaywriteITTrad_100Thin`
- `PlaywriteITTrad_200ExtraLight`
- `PlaywriteITTrad_300Light`
- `PlaywriteITTrad_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playwrite-it-trad expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playwrite-it-trad/useFonts';
import { PlaywriteITTrad_100Thin } from '@expo-google-fonts/playwrite-it-trad/100Thin';
import { PlaywriteITTrad_200ExtraLight } from '@expo-google-fonts/playwrite-it-trad/200ExtraLight';
import { PlaywriteITTrad_300Light } from '@expo-google-fonts/playwrite-it-trad/300Light';
import { PlaywriteITTrad_400Regular } from '@expo-google-fonts/playwrite-it-trad/400Regular';

export default () => {

  let [fontsLoaded] = useFonts({
    PlaywriteITTrad_100Thin, 
    PlaywriteITTrad_200ExtraLight, 
    PlaywriteITTrad_300Light, 
    PlaywriteITTrad_400Regular
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteITTrad_100Thin"
        }}>
          Playwrite IT Trad Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteITTrad_200ExtraLight"
        }}>
          Playwrite IT Trad Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteITTrad_300Light"
        }}>
          Playwrite IT Trad Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteITTrad_400Regular"
        }}>
          Playwrite IT Trad Regular
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywriteITTrad_100Thin](./100Thin/PlaywriteITTrad_100Thin.ttf.png)|![PlaywriteITTrad_200ExtraLight](./200ExtraLight/PlaywriteITTrad_200ExtraLight.ttf.png)|![PlaywriteITTrad_300Light](./300Light/PlaywriteITTrad_300Light.ttf.png)||
|![PlaywriteITTrad_400Regular](./400Regular/PlaywriteITTrad_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playwrite-it-trad` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite IT Trad page on Google Fonts](https://fonts.google.com/specimen/Playwrite+IT+Trad) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite IT Trad on Google Fonts](https://fonts.google.com/specimen/Playwrite+IT+Trad)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-it-trad)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-it-trad)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
