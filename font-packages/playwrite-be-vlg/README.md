# @expo-google-fonts/playwrite-be-vlg

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-be-vlg)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-be-vlg)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-be-vlg)

This package lets you use the [**Playwrite BE VLG**](https://fonts.google.com/specimen/Playwrite+BE+VLG) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite BE VLG

![Playwrite BE VLG](./font-family.png)

This font family contains [4 styles](#-gallery).

- `PlaywriteBEVLG_100Thin`
- `PlaywriteBEVLG_200ExtraLight`
- `PlaywriteBEVLG_300Light`
- `PlaywriteBEVLG_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playwrite-be-vlg expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playwrite-be-vlg/useFonts';
import { PlaywriteBEVLG_100Thin } from '@expo-google-fonts/playwrite-be-vlg/100Thin';
import { PlaywriteBEVLG_200ExtraLight } from '@expo-google-fonts/playwrite-be-vlg/200ExtraLight';
import { PlaywriteBEVLG_300Light } from '@expo-google-fonts/playwrite-be-vlg/300Light';
import { PlaywriteBEVLG_400Regular } from '@expo-google-fonts/playwrite-be-vlg/400Regular';

export default () => {

  let [fontsLoaded] = useFonts({
    PlaywriteBEVLG_100Thin, 
    PlaywriteBEVLG_200ExtraLight, 
    PlaywriteBEVLG_300Light, 
    PlaywriteBEVLG_400Regular
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
          fontFamily: "PlaywriteBEVLG_100Thin"
        }}>
          Playwrite BE VLG Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteBEVLG_200ExtraLight"
        }}>
          Playwrite BE VLG Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteBEVLG_300Light"
        }}>
          Playwrite BE VLG Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteBEVLG_400Regular"
        }}>
          Playwrite BE VLG Regular
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywriteBEVLG_100Thin](./100Thin/PlaywriteBEVLG_100Thin.ttf.png)|![PlaywriteBEVLG_200ExtraLight](./200ExtraLight/PlaywriteBEVLG_200ExtraLight.ttf.png)|![PlaywriteBEVLG_300Light](./300Light/PlaywriteBEVLG_300Light.ttf.png)||
|![PlaywriteBEVLG_400Regular](./400Regular/PlaywriteBEVLG_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playwrite-be-vlg` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite BE VLG page on Google Fonts](https://fonts.google.com/specimen/Playwrite+BE+VLG) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite BE VLG on Google Fonts](https://fonts.google.com/specimen/Playwrite+BE+VLG)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-be-vlg)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-be-vlg)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
