# @expo-google-fonts/koh-santepheap

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/koh-santepheap)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/koh-santepheap)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/koh-santepheap)

This package lets you use the [**Koh Santepheap**](https://fonts.google.com/specimen/Koh+Santepheap) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Koh Santepheap

![Koh Santepheap](./font-family.png)

This font family contains [5 styles](#-gallery).

- `KohSantepheap_100Thin`
- `KohSantepheap_300Light`
- `KohSantepheap_400Regular`
- `KohSantepheap_700Bold`
- `KohSantepheap_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/koh-santepheap expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/koh-santepheap/useFonts';
import { KohSantepheap_100Thin } from '@expo-google-fonts/koh-santepheap/100Thin';
import { KohSantepheap_300Light } from '@expo-google-fonts/koh-santepheap/300Light';
import { KohSantepheap_400Regular } from '@expo-google-fonts/koh-santepheap/400Regular';
import { KohSantepheap_700Bold } from '@expo-google-fonts/koh-santepheap/700Bold';
import { KohSantepheap_900Black } from '@expo-google-fonts/koh-santepheap/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    KohSantepheap_100Thin, 
    KohSantepheap_300Light, 
    KohSantepheap_400Regular, 
    KohSantepheap_700Bold, 
    KohSantepheap_900Black
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
          fontFamily: "KohSantepheap_100Thin"
        }}>
          Koh Santepheap Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KohSantepheap_300Light"
        }}>
          Koh Santepheap Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KohSantepheap_400Regular"
        }}>
          Koh Santepheap Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KohSantepheap_700Bold"
        }}>
          Koh Santepheap Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KohSantepheap_900Black"
        }}>
          Koh Santepheap Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![KohSantepheap_100Thin](./100Thin/KohSantepheap_100Thin.ttf.png)|![KohSantepheap_300Light](./300Light/KohSantepheap_300Light.ttf.png)|![KohSantepheap_400Regular](./400Regular/KohSantepheap_400Regular.ttf.png)||
|![KohSantepheap_700Bold](./700Bold/KohSantepheap_700Bold.ttf.png)|![KohSantepheap_900Black](./900Black/KohSantepheap_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/koh-santepheap` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Koh Santepheap page on Google Fonts](https://fonts.google.com/specimen/Koh+Santepheap) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Koh Santepheap on Google Fonts](https://fonts.google.com/specimen/Koh+Santepheap)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/koh-santepheap)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/koh-santepheap)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
