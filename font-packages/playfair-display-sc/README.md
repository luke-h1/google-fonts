# @expo-google-fonts/playfair-display-sc

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/playfair-display-sc)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/playfair-display-sc)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/playfair-display-sc)

This package lets you use the [**Playfair Display SC**](https://fonts.google.com/specimen/Playfair+Display+SC) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Playfair Display SC

![Playfair Display SC](./font-family.png)

This font family contains [6 styles](#-gallery).

- `PlayfairDisplaySC_400Regular`
- `PlayfairDisplaySC_400Regular_Italic`
- `PlayfairDisplaySC_700Bold`
- `PlayfairDisplaySC_700Bold_Italic`
- `PlayfairDisplaySC_900Black`
- `PlayfairDisplaySC_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/playfair-display-sc expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/playfair-display-sc/useFonts';
import { PlayfairDisplaySC_400Regular } from '@expo-google-fonts/playfair-display-sc/400Regular';
import { PlayfairDisplaySC_400Regular_Italic } from '@expo-google-fonts/playfair-display-sc/400Regular_Italic';
import { PlayfairDisplaySC_700Bold } from '@expo-google-fonts/playfair-display-sc/700Bold';
import { PlayfairDisplaySC_700Bold_Italic } from '@expo-google-fonts/playfair-display-sc/700Bold_Italic';
import { PlayfairDisplaySC_900Black } from '@expo-google-fonts/playfair-display-sc/900Black';
import { PlayfairDisplaySC_900Black_Italic } from '@expo-google-fonts/playfair-display-sc/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    PlayfairDisplaySC_400Regular, 
    PlayfairDisplaySC_400Regular_Italic, 
    PlayfairDisplaySC_700Bold, 
    PlayfairDisplaySC_700Bold_Italic, 
    PlayfairDisplaySC_900Black, 
    PlayfairDisplaySC_900Black_Italic
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
          fontFamily: "PlayfairDisplaySC_400Regular"
        }}>
          Playfair Display SC Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplaySC_400Regular_Italic"
        }}>
          Playfair Display SC Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplaySC_700Bold"
        }}>
          Playfair Display SC Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplaySC_700Bold_Italic"
        }}>
          Playfair Display SC Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplaySC_900Black"
        }}>
          Playfair Display SC Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "PlayfairDisplaySC_900Black_Italic"
        }}>
          Playfair Display SC Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![PlayfairDisplaySC_400Regular](./400Regular/PlayfairDisplaySC_400Regular.ttf.png)|![PlayfairDisplaySC_400Regular_Italic](./400Regular_Italic/PlayfairDisplaySC_400Regular_Italic.ttf.png)|![PlayfairDisplaySC_700Bold](./700Bold/PlayfairDisplaySC_700Bold.ttf.png)||
|![PlayfairDisplaySC_700Bold_Italic](./700Bold_Italic/PlayfairDisplaySC_700Bold_Italic.ttf.png)|![PlayfairDisplaySC_900Black](./900Black/PlayfairDisplaySC_900Black.ttf.png)|![PlayfairDisplaySC_900Black_Italic](./900Black_Italic/PlayfairDisplaySC_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/playfair-display-sc` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Playfair Display SC page on Google Fonts](https://fonts.google.com/specimen/Playfair+Display+SC) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Playfair Display SC on Google Fonts](https://fonts.google.com/specimen/Playfair+Display+SC)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/playfair-display-sc)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/playfair-display-sc)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
