# @expo-google-fonts/share

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/share)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/share)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/share)

This package lets you use the [**Share**](https://fonts.google.com/specimen/Share) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Share

![Share](./font-family.png)

This font family contains [4 styles](#-gallery).

- `Share_400Regular`
- `Share_400Regular_Italic`
- `Share_700Bold`
- `Share_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/share expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/share/useFonts';
import { Share_400Regular } from '@expo-google-fonts/share/400Regular';
import { Share_400Regular_Italic } from '@expo-google-fonts/share/400Regular_Italic';
import { Share_700Bold } from '@expo-google-fonts/share/700Bold';
import { Share_700Bold_Italic } from '@expo-google-fonts/share/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Share_400Regular, 
    Share_400Regular_Italic, 
    Share_700Bold, 
    Share_700Bold_Italic
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
          fontFamily: "Share_400Regular"
        }}>
          Share Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Share_400Regular_Italic"
        }}>
          Share Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Share_700Bold"
        }}>
          Share Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Share_700Bold_Italic"
        }}>
          Share Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Share_400Regular](./400Regular/Share_400Regular.ttf.png)|![Share_400Regular_Italic](./400Regular_Italic/Share_400Regular_Italic.ttf.png)|![Share_700Bold](./700Bold/Share_700Bold.ttf.png)||
|![Share_700Bold_Italic](./700Bold_Italic/Share_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/share` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Share page on Google Fonts](https://fonts.google.com/specimen/Share) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Share on Google Fonts](https://fonts.google.com/specimen/Share)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/share)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/share)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
