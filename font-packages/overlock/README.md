# @expo-google-fonts/overlock

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/overlock)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/overlock)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/overlock)

This package lets you use the [**Overlock**](https://fonts.google.com/specimen/Overlock) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Overlock

![Overlock](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Overlock_400Regular`
- `Overlock_400Regular_Italic`
- `Overlock_700Bold`
- `Overlock_700Bold_Italic`
- `Overlock_900Black`
- `Overlock_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/overlock expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/overlock/useFonts';
import { Overlock_400Regular } from '@expo-google-fonts/overlock/400Regular';
import { Overlock_400Regular_Italic } from '@expo-google-fonts/overlock/400Regular_Italic';
import { Overlock_700Bold } from '@expo-google-fonts/overlock/700Bold';
import { Overlock_700Bold_Italic } from '@expo-google-fonts/overlock/700Bold_Italic';
import { Overlock_900Black } from '@expo-google-fonts/overlock/900Black';
import { Overlock_900Black_Italic } from '@expo-google-fonts/overlock/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Overlock_400Regular, 
    Overlock_400Regular_Italic, 
    Overlock_700Bold, 
    Overlock_700Bold_Italic, 
    Overlock_900Black, 
    Overlock_900Black_Italic
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
          fontFamily: "Overlock_400Regular"
        }}>
          Overlock Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overlock_400Regular_Italic"
        }}>
          Overlock Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overlock_700Bold"
        }}>
          Overlock Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overlock_700Bold_Italic"
        }}>
          Overlock Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overlock_900Black"
        }}>
          Overlock Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Overlock_900Black_Italic"
        }}>
          Overlock Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Overlock_400Regular](./400Regular/Overlock_400Regular.ttf.png)|![Overlock_400Regular_Italic](./400Regular_Italic/Overlock_400Regular_Italic.ttf.png)|![Overlock_700Bold](./700Bold/Overlock_700Bold.ttf.png)||
|![Overlock_700Bold_Italic](./700Bold_Italic/Overlock_700Bold_Italic.ttf.png)|![Overlock_900Black](./900Black/Overlock_900Black.ttf.png)|![Overlock_900Black_Italic](./900Black_Italic/Overlock_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/overlock` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Overlock page on Google Fonts](https://fonts.google.com/specimen/Overlock) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Overlock on Google Fonts](https://fonts.google.com/specimen/Overlock)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/overlock)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/overlock)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
