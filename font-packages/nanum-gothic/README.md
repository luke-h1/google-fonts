# @expo-google-fonts/nanum-gothic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/nanum-gothic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/nanum-gothic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/nanum-gothic)

This package lets you use the [**Nanum Gothic**](https://fonts.google.com/specimen/Nanum+Gothic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Nanum Gothic

![Nanum Gothic](./font-family.png)

This font family contains [3 styles](#-gallery).

- `NanumGothic_400Regular`
- `NanumGothic_700Bold`
- `NanumGothic_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/nanum-gothic expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/nanum-gothic/useFonts';
import { NanumGothic_400Regular } from '@expo-google-fonts/nanum-gothic/400Regular';
import { NanumGothic_700Bold } from '@expo-google-fonts/nanum-gothic/700Bold';
import { NanumGothic_800ExtraBold } from '@expo-google-fonts/nanum-gothic/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    NanumGothic_400Regular, 
    NanumGothic_700Bold, 
    NanumGothic_800ExtraBold
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
          fontFamily: "NanumGothic_400Regular"
        }}>
          Nanum Gothic Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NanumGothic_700Bold"
        }}>
          Nanum Gothic Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NanumGothic_800ExtraBold"
        }}>
          Nanum Gothic Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NanumGothic_400Regular](./400Regular/NanumGothic_400Regular.ttf.png)|![NanumGothic_700Bold](./700Bold/NanumGothic_700Bold.ttf.png)|![NanumGothic_800ExtraBold](./800ExtraBold/NanumGothic_800ExtraBold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/nanum-gothic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Nanum Gothic page on Google Fonts](https://fonts.google.com/specimen/Nanum+Gothic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Nanum Gothic on Google Fonts](https://fonts.google.com/specimen/Nanum+Gothic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/nanum-gothic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/nanum-gothic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
