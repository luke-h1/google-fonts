# @expo-google-fonts/namdhinggo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/namdhinggo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/namdhinggo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/namdhinggo)

This package lets you use the [**Namdhinggo**](https://fonts.google.com/specimen/Namdhinggo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Namdhinggo

![Namdhinggo](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Namdhinggo_400Regular`
- `Namdhinggo_500Medium`
- `Namdhinggo_600SemiBold`
- `Namdhinggo_700Bold`
- `Namdhinggo_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/namdhinggo expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/namdhinggo/useFonts';
import { Namdhinggo_400Regular } from '@expo-google-fonts/namdhinggo/400Regular';
import { Namdhinggo_500Medium } from '@expo-google-fonts/namdhinggo/500Medium';
import { Namdhinggo_600SemiBold } from '@expo-google-fonts/namdhinggo/600SemiBold';
import { Namdhinggo_700Bold } from '@expo-google-fonts/namdhinggo/700Bold';
import { Namdhinggo_800ExtraBold } from '@expo-google-fonts/namdhinggo/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    Namdhinggo_400Regular, 
    Namdhinggo_500Medium, 
    Namdhinggo_600SemiBold, 
    Namdhinggo_700Bold, 
    Namdhinggo_800ExtraBold
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
          fontFamily: "Namdhinggo_400Regular"
        }}>
          Namdhinggo Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Namdhinggo_500Medium"
        }}>
          Namdhinggo Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Namdhinggo_600SemiBold"
        }}>
          Namdhinggo Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Namdhinggo_700Bold"
        }}>
          Namdhinggo Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Namdhinggo_800ExtraBold"
        }}>
          Namdhinggo Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Namdhinggo_400Regular](./400Regular/Namdhinggo_400Regular.ttf.png)|![Namdhinggo_500Medium](./500Medium/Namdhinggo_500Medium.ttf.png)|![Namdhinggo_600SemiBold](./600SemiBold/Namdhinggo_600SemiBold.ttf.png)||
|![Namdhinggo_700Bold](./700Bold/Namdhinggo_700Bold.ttf.png)|![Namdhinggo_800ExtraBold](./800ExtraBold/Namdhinggo_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/namdhinggo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Namdhinggo page on Google Fonts](https://fonts.google.com/specimen/Namdhinggo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Namdhinggo on Google Fonts](https://fonts.google.com/specimen/Namdhinggo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/namdhinggo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/namdhinggo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
