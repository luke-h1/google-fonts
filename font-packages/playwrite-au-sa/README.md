# @expo-google-fonts/playwrite-au-sa

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-au-sa)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-au-sa)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-au-sa)

This package lets you use the [**Playwrite AU SA**](https://fonts.google.com/specimen/Playwrite+AU+SA) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite AU SA

![Playwrite AU SA](./font-family.png)

This font family contains [4 styles](#-gallery).

- `PlaywriteAUSA_100Thin`
- `PlaywriteAUSA_200ExtraLight`
- `PlaywriteAUSA_300Light`
- `PlaywriteAUSA_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playwrite-au-sa expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playwrite-au-sa/useFonts';
import { PlaywriteAUSA_100Thin } from '@expo-google-fonts/playwrite-au-sa/100Thin';
import { PlaywriteAUSA_200ExtraLight } from '@expo-google-fonts/playwrite-au-sa/200ExtraLight';
import { PlaywriteAUSA_300Light } from '@expo-google-fonts/playwrite-au-sa/300Light';
import { PlaywriteAUSA_400Regular } from '@expo-google-fonts/playwrite-au-sa/400Regular';

export default () => {

  let [fontsLoaded] = useFonts({
    PlaywriteAUSA_100Thin, 
    PlaywriteAUSA_200ExtraLight, 
    PlaywriteAUSA_300Light, 
    PlaywriteAUSA_400Regular
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
          fontFamily: "PlaywriteAUSA_100Thin"
        }}>
          Playwrite AU SA Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteAUSA_200ExtraLight"
        }}>
          Playwrite AU SA Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteAUSA_300Light"
        }}>
          Playwrite AU SA Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteAUSA_400Regular"
        }}>
          Playwrite AU SA Regular
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywriteAUSA_100Thin](./100Thin/PlaywriteAUSA_100Thin.ttf.png)|![PlaywriteAUSA_200ExtraLight](./200ExtraLight/PlaywriteAUSA_200ExtraLight.ttf.png)|![PlaywriteAUSA_300Light](./300Light/PlaywriteAUSA_300Light.ttf.png)||
|![PlaywriteAUSA_400Regular](./400Regular/PlaywriteAUSA_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playwrite-au-sa` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite AU SA page on Google Fonts](https://fonts.google.com/specimen/Playwrite+AU+SA) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite AU SA on Google Fonts](https://fonts.google.com/specimen/Playwrite+AU+SA)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-au-sa)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-au-sa)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
