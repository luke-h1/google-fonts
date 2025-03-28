# @expo-google-fonts/anek-odia

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anek-odia)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anek-odia)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anek-odia)

This package lets you use the [**Anek Odia**](https://fonts.google.com/specimen/Anek+Odia) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anek Odia

![Anek Odia](./font-family.png)

This font family contains [8 styles](#-gallery).

- `AnekOdia_100Thin`
- `AnekOdia_200ExtraLight`
- `AnekOdia_300Light`
- `AnekOdia_400Regular`
- `AnekOdia_500Medium`
- `AnekOdia_600SemiBold`
- `AnekOdia_700Bold`
- `AnekOdia_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/anek-odia expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/anek-odia/useFonts';
import { AnekOdia_100Thin } from '@expo-google-fonts/anek-odia/100Thin';
import { AnekOdia_200ExtraLight } from '@expo-google-fonts/anek-odia/200ExtraLight';
import { AnekOdia_300Light } from '@expo-google-fonts/anek-odia/300Light';
import { AnekOdia_400Regular } from '@expo-google-fonts/anek-odia/400Regular';
import { AnekOdia_500Medium } from '@expo-google-fonts/anek-odia/500Medium';
import { AnekOdia_600SemiBold } from '@expo-google-fonts/anek-odia/600SemiBold';
import { AnekOdia_700Bold } from '@expo-google-fonts/anek-odia/700Bold';
import { AnekOdia_800ExtraBold } from '@expo-google-fonts/anek-odia/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    AnekOdia_100Thin, 
    AnekOdia_200ExtraLight, 
    AnekOdia_300Light, 
    AnekOdia_400Regular, 
    AnekOdia_500Medium, 
    AnekOdia_600SemiBold, 
    AnekOdia_700Bold, 
    AnekOdia_800ExtraBold
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
          fontFamily: "AnekOdia_100Thin"
        }}>
          Anek Odia Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekOdia_200ExtraLight"
        }}>
          Anek Odia Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekOdia_300Light"
        }}>
          Anek Odia Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekOdia_400Regular"
        }}>
          Anek Odia Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekOdia_500Medium"
        }}>
          Anek Odia Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekOdia_600SemiBold"
        }}>
          Anek Odia Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekOdia_700Bold"
        }}>
          Anek Odia Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekOdia_800ExtraBold"
        }}>
          Anek Odia Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AnekOdia_100Thin](./100Thin/AnekOdia_100Thin.ttf.png)|![AnekOdia_200ExtraLight](./200ExtraLight/AnekOdia_200ExtraLight.ttf.png)|![AnekOdia_300Light](./300Light/AnekOdia_300Light.ttf.png)||
|![AnekOdia_400Regular](./400Regular/AnekOdia_400Regular.ttf.png)|![AnekOdia_500Medium](./500Medium/AnekOdia_500Medium.ttf.png)|![AnekOdia_600SemiBold](./600SemiBold/AnekOdia_600SemiBold.ttf.png)||
|![AnekOdia_700Bold](./700Bold/AnekOdia_700Bold.ttf.png)|![AnekOdia_800ExtraBold](./800ExtraBold/AnekOdia_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/anek-odia` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anek Odia page on Google Fonts](https://fonts.google.com/specimen/Anek+Odia) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anek Odia on Google Fonts](https://fonts.google.com/specimen/Anek+Odia)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anek-odia)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anek-odia)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
