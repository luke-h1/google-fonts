# @expo-google-fonts/noto-naskh-arabic

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/noto-naskh-arabic)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/noto-naskh-arabic)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/noto-naskh-arabic)

This package lets you use the [**Noto Naskh Arabic**](https://fonts.google.com/specimen/Noto+Naskh+Arabic) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Noto Naskh Arabic

![Noto Naskh Arabic](./font-family.png)

This font family contains [4 styles](#-gallery).

- `NotoNaskhArabic_400Regular`
- `NotoNaskhArabic_500Medium`
- `NotoNaskhArabic_600SemiBold`
- `NotoNaskhArabic_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/noto-naskh-arabic expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/noto-naskh-arabic/useFonts';
import { NotoNaskhArabic_400Regular } from '@expo-google-fonts/noto-naskh-arabic/400Regular';
import { NotoNaskhArabic_500Medium } from '@expo-google-fonts/noto-naskh-arabic/500Medium';
import { NotoNaskhArabic_600SemiBold } from '@expo-google-fonts/noto-naskh-arabic/600SemiBold';
import { NotoNaskhArabic_700Bold } from '@expo-google-fonts/noto-naskh-arabic/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    NotoNaskhArabic_400Regular, 
    NotoNaskhArabic_500Medium, 
    NotoNaskhArabic_600SemiBold, 
    NotoNaskhArabic_700Bold
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
          fontFamily: "NotoNaskhArabic_400Regular"
        }}>
          Noto Naskh Arabic Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoNaskhArabic_500Medium"
        }}>
          Noto Naskh Arabic Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoNaskhArabic_600SemiBold"
        }}>
          Noto Naskh Arabic Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "NotoNaskhArabic_700Bold"
        }}>
          Noto Naskh Arabic Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![NotoNaskhArabic_400Regular](./400Regular/NotoNaskhArabic_400Regular.ttf.png)|![NotoNaskhArabic_500Medium](./500Medium/NotoNaskhArabic_500Medium.ttf.png)|![NotoNaskhArabic_600SemiBold](./600SemiBold/NotoNaskhArabic_600SemiBold.ttf.png)||
|![NotoNaskhArabic_700Bold](./700Bold/NotoNaskhArabic_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/noto-naskh-arabic` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Noto Naskh Arabic page on Google Fonts](https://fonts.google.com/specimen/Noto+Naskh+Arabic) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Noto Naskh Arabic on Google Fonts](https://fonts.google.com/specimen/Noto+Naskh+Arabic)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/noto-naskh-arabic)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/noto-naskh-arabic)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
