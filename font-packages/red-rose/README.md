# @expo-google-fonts/red-rose

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/red-rose)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/red-rose)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/red-rose)

This package lets you use the [**Red Rose**](https://fonts.google.com/specimen/Red+Rose) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Red Rose

![Red Rose](./font-family.png)

This font family contains [5 styles](#-gallery).

- `RedRose_300Light`
- `RedRose_400Regular`
- `RedRose_500Medium`
- `RedRose_600SemiBold`
- `RedRose_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/red-rose expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/red-rose/useFonts';
import { RedRose_300Light } from '@expo-google-fonts/red-rose/300Light';
import { RedRose_400Regular } from '@expo-google-fonts/red-rose/400Regular';
import { RedRose_500Medium } from '@expo-google-fonts/red-rose/500Medium';
import { RedRose_600SemiBold } from '@expo-google-fonts/red-rose/600SemiBold';
import { RedRose_700Bold } from '@expo-google-fonts/red-rose/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    RedRose_300Light, 
    RedRose_400Regular, 
    RedRose_500Medium, 
    RedRose_600SemiBold, 
    RedRose_700Bold
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
          fontFamily: "RedRose_300Light"
        }}>
          Red Rose Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedRose_400Regular"
        }}>
          Red Rose Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedRose_500Medium"
        }}>
          Red Rose Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedRose_600SemiBold"
        }}>
          Red Rose Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedRose_700Bold"
        }}>
          Red Rose Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![RedRose_300Light](./300Light/RedRose_300Light.ttf.png)|![RedRose_400Regular](./400Regular/RedRose_400Regular.ttf.png)|![RedRose_500Medium](./500Medium/RedRose_500Medium.ttf.png)||
|![RedRose_600SemiBold](./600SemiBold/RedRose_600SemiBold.ttf.png)|![RedRose_700Bold](./700Bold/RedRose_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/red-rose` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Red Rose page on Google Fonts](https://fonts.google.com/specimen/Red+Rose) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Red Rose on Google Fonts](https://fonts.google.com/specimen/Red+Rose)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/red-rose)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/red-rose)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
