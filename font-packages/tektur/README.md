# @expo-google-fonts/tektur

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tektur)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tektur)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tektur)

This package lets you use the [**Tektur**](https://fonts.google.com/specimen/Tektur) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Tektur

![Tektur](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Tektur_400Regular`
- `Tektur_500Medium`
- `Tektur_600SemiBold`
- `Tektur_700Bold`
- `Tektur_800ExtraBold`
- `Tektur_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/tektur expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/tektur/useFonts';
import { Tektur_400Regular } from '@expo-google-fonts/tektur/400Regular';
import { Tektur_500Medium } from '@expo-google-fonts/tektur/500Medium';
import { Tektur_600SemiBold } from '@expo-google-fonts/tektur/600SemiBold';
import { Tektur_700Bold } from '@expo-google-fonts/tektur/700Bold';
import { Tektur_800ExtraBold } from '@expo-google-fonts/tektur/800ExtraBold';
import { Tektur_900Black } from '@expo-google-fonts/tektur/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Tektur_400Regular, 
    Tektur_500Medium, 
    Tektur_600SemiBold, 
    Tektur_700Bold, 
    Tektur_800ExtraBold, 
    Tektur_900Black
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
          fontFamily: "Tektur_400Regular"
        }}>
          Tektur Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tektur_500Medium"
        }}>
          Tektur Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tektur_600SemiBold"
        }}>
          Tektur Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tektur_700Bold"
        }}>
          Tektur Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tektur_800ExtraBold"
        }}>
          Tektur Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tektur_900Black"
        }}>
          Tektur Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Tektur_400Regular](./400Regular/Tektur_400Regular.ttf.png)|![Tektur_500Medium](./500Medium/Tektur_500Medium.ttf.png)|![Tektur_600SemiBold](./600SemiBold/Tektur_600SemiBold.ttf.png)||
|![Tektur_700Bold](./700Bold/Tektur_700Bold.ttf.png)|![Tektur_800ExtraBold](./800ExtraBold/Tektur_800ExtraBold.ttf.png)|![Tektur_900Black](./900Black/Tektur_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/tektur` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tektur page on Google Fonts](https://fonts.google.com/specimen/Tektur) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tektur on Google Fonts](https://fonts.google.com/specimen/Tektur)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tektur)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tektur)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
