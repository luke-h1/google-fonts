# @expo-google-fonts/playwrite-hr

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playwrite-hr)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playwrite-hr)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playwrite-hr)

This package lets you use the [**Playwrite HR**](https://fonts.google.com/specimen/Playwrite+HR) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playwrite HR

![Playwrite HR](./font-family.png)

This font family contains [4 styles](#-gallery).

- `PlaywriteHR_100Thin`
- `PlaywriteHR_200ExtraLight`
- `PlaywriteHR_300Light`
- `PlaywriteHR_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playwrite-hr expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playwrite-hr/useFonts';
import { PlaywriteHR_100Thin } from '@expo-google-fonts/playwrite-hr/100Thin';
import { PlaywriteHR_200ExtraLight } from '@expo-google-fonts/playwrite-hr/200ExtraLight';
import { PlaywriteHR_300Light } from '@expo-google-fonts/playwrite-hr/300Light';
import { PlaywriteHR_400Regular } from '@expo-google-fonts/playwrite-hr/400Regular';

export default () => {

  let [fontsLoaded] = useFonts({
    PlaywriteHR_100Thin, 
    PlaywriteHR_200ExtraLight, 
    PlaywriteHR_300Light, 
    PlaywriteHR_400Regular
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
          fontFamily: "PlaywriteHR_100Thin"
        }}>
          Playwrite HR Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteHR_200ExtraLight"
        }}>
          Playwrite HR Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteHR_300Light"
        }}>
          Playwrite HR Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlaywriteHR_400Regular"
        }}>
          Playwrite HR Regular
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlaywriteHR_100Thin](./100Thin/PlaywriteHR_100Thin.ttf.png)|![PlaywriteHR_200ExtraLight](./200ExtraLight/PlaywriteHR_200ExtraLight.ttf.png)|![PlaywriteHR_300Light](./300Light/PlaywriteHR_300Light.ttf.png)||
|![PlaywriteHR_400Regular](./400Regular/PlaywriteHR_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playwrite-hr` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playwrite HR page on Google Fonts](https://fonts.google.com/specimen/Playwrite+HR) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playwrite HR on Google Fonts](https://fonts.google.com/specimen/Playwrite+HR)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playwrite-hr)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playwrite-hr)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
