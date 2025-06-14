# @expo-google-fonts/golos-text

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/golos-text)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/golos-text)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/golos-text)

This package lets you use the [**Golos Text**](https://fonts.google.com/specimen/Golos+Text) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Golos Text

![Golos Text](./font-family.png)

This font family contains [6 styles](#-gallery).

- `GolosText_400Regular`
- `GolosText_500Medium`
- `GolosText_600SemiBold`
- `GolosText_700Bold`
- `GolosText_800ExtraBold`
- `GolosText_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/golos-text expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/golos-text/useFonts';
import { GolosText_400Regular } from '@expo-google-fonts/golos-text/400Regular';
import { GolosText_500Medium } from '@expo-google-fonts/golos-text/500Medium';
import { GolosText_600SemiBold } from '@expo-google-fonts/golos-text/600SemiBold';
import { GolosText_700Bold } from '@expo-google-fonts/golos-text/700Bold';
import { GolosText_800ExtraBold } from '@expo-google-fonts/golos-text/800ExtraBold';
import { GolosText_900Black } from '@expo-google-fonts/golos-text/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    GolosText_400Regular, 
    GolosText_500Medium, 
    GolosText_600SemiBold, 
    GolosText_700Bold, 
    GolosText_800ExtraBold, 
    GolosText_900Black
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
          fontFamily: "GolosText_400Regular"
        }}>
          Golos Text Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GolosText_500Medium"
        }}>
          Golos Text Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GolosText_600SemiBold"
        }}>
          Golos Text Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GolosText_700Bold"
        }}>
          Golos Text Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GolosText_800ExtraBold"
        }}>
          Golos Text Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "GolosText_900Black"
        }}>
          Golos Text Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![GolosText_400Regular](./400Regular/GolosText_400Regular.ttf.png)|![GolosText_500Medium](./500Medium/GolosText_500Medium.ttf.png)|![GolosText_600SemiBold](./600SemiBold/GolosText_600SemiBold.ttf.png)||
|![GolosText_700Bold](./700Bold/GolosText_700Bold.ttf.png)|![GolosText_800ExtraBold](./800ExtraBold/GolosText_800ExtraBold.ttf.png)|![GolosText_900Black](./900Black/GolosText_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/golos-text` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Golos Text page on Google Fonts](https://fonts.google.com/specimen/Golos+Text) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Golos Text on Google Fonts](https://fonts.google.com/specimen/Golos+Text)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/golos-text)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/golos-text)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
