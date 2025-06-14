# @expo-google-fonts/anek-malayalam

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/anek-malayalam)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/anek-malayalam)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/anek-malayalam)

This package lets you use the [**Anek Malayalam**](https://fonts.google.com/specimen/Anek+Malayalam) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Anek Malayalam

![Anek Malayalam](./font-family.png)

This font family contains [8 styles](#-gallery).

- `AnekMalayalam_100Thin`
- `AnekMalayalam_200ExtraLight`
- `AnekMalayalam_300Light`
- `AnekMalayalam_400Regular`
- `AnekMalayalam_500Medium`
- `AnekMalayalam_600SemiBold`
- `AnekMalayalam_700Bold`
- `AnekMalayalam_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/anek-malayalam expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/anek-malayalam/useFonts';
import { AnekMalayalam_100Thin } from '@expo-google-fonts/anek-malayalam/100Thin';
import { AnekMalayalam_200ExtraLight } from '@expo-google-fonts/anek-malayalam/200ExtraLight';
import { AnekMalayalam_300Light } from '@expo-google-fonts/anek-malayalam/300Light';
import { AnekMalayalam_400Regular } from '@expo-google-fonts/anek-malayalam/400Regular';
import { AnekMalayalam_500Medium } from '@expo-google-fonts/anek-malayalam/500Medium';
import { AnekMalayalam_600SemiBold } from '@expo-google-fonts/anek-malayalam/600SemiBold';
import { AnekMalayalam_700Bold } from '@expo-google-fonts/anek-malayalam/700Bold';
import { AnekMalayalam_800ExtraBold } from '@expo-google-fonts/anek-malayalam/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    AnekMalayalam_100Thin, 
    AnekMalayalam_200ExtraLight, 
    AnekMalayalam_300Light, 
    AnekMalayalam_400Regular, 
    AnekMalayalam_500Medium, 
    AnekMalayalam_600SemiBold, 
    AnekMalayalam_700Bold, 
    AnekMalayalam_800ExtraBold
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
          fontFamily: "AnekMalayalam_100Thin"
        }}>
          Anek Malayalam Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekMalayalam_200ExtraLight"
        }}>
          Anek Malayalam Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekMalayalam_300Light"
        }}>
          Anek Malayalam Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekMalayalam_400Regular"
        }}>
          Anek Malayalam Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekMalayalam_500Medium"
        }}>
          Anek Malayalam Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekMalayalam_600SemiBold"
        }}>
          Anek Malayalam Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekMalayalam_700Bold"
        }}>
          Anek Malayalam Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnekMalayalam_800ExtraBold"
        }}>
          Anek Malayalam Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AnekMalayalam_100Thin](./100Thin/AnekMalayalam_100Thin.ttf.png)|![AnekMalayalam_200ExtraLight](./200ExtraLight/AnekMalayalam_200ExtraLight.ttf.png)|![AnekMalayalam_300Light](./300Light/AnekMalayalam_300Light.ttf.png)||
|![AnekMalayalam_400Regular](./400Regular/AnekMalayalam_400Regular.ttf.png)|![AnekMalayalam_500Medium](./500Medium/AnekMalayalam_500Medium.ttf.png)|![AnekMalayalam_600SemiBold](./600SemiBold/AnekMalayalam_600SemiBold.ttf.png)||
|![AnekMalayalam_700Bold](./700Bold/AnekMalayalam_700Bold.ttf.png)|![AnekMalayalam_800ExtraBold](./800ExtraBold/AnekMalayalam_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/anek-malayalam` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Anek Malayalam page on Google Fonts](https://fonts.google.com/specimen/Anek+Malayalam) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Anek Malayalam on Google Fonts](https://fonts.google.com/specimen/Anek+Malayalam)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/anek-malayalam)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/anek-malayalam)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
