# @expo-google-fonts/reem-kufi-fun

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/reem-kufi-fun)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/reem-kufi-fun)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/reem-kufi-fun)

This package lets you use the [**Reem Kufi Fun**](https://fonts.google.com/specimen/Reem+Kufi+Fun) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Reem Kufi Fun

![Reem Kufi Fun](./font-family.png)

This font family contains [4 styles](#-gallery).

- `ReemKufiFun_400Regular`
- `ReemKufiFun_500Medium`
- `ReemKufiFun_600SemiBold`
- `ReemKufiFun_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/reem-kufi-fun expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/reem-kufi-fun/useFonts';
import { ReemKufiFun_400Regular } from '@expo-google-fonts/reem-kufi-fun/400Regular';
import { ReemKufiFun_500Medium } from '@expo-google-fonts/reem-kufi-fun/500Medium';
import { ReemKufiFun_600SemiBold } from '@expo-google-fonts/reem-kufi-fun/600SemiBold';
import { ReemKufiFun_700Bold } from '@expo-google-fonts/reem-kufi-fun/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    ReemKufiFun_400Regular, 
    ReemKufiFun_500Medium, 
    ReemKufiFun_600SemiBold, 
    ReemKufiFun_700Bold
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
          fontFamily: "ReemKufiFun_400Regular"
        }}>
          Reem Kufi Fun Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ReemKufiFun_500Medium"
        }}>
          Reem Kufi Fun Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ReemKufiFun_600SemiBold"
        }}>
          Reem Kufi Fun Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ReemKufiFun_700Bold"
        }}>
          Reem Kufi Fun Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ReemKufiFun_400Regular](./400Regular/ReemKufiFun_400Regular.ttf.png)|![ReemKufiFun_500Medium](./500Medium/ReemKufiFun_500Medium.ttf.png)|![ReemKufiFun_600SemiBold](./600SemiBold/ReemKufiFun_600SemiBold.ttf.png)||
|![ReemKufiFun_700Bold](./700Bold/ReemKufiFun_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/reem-kufi-fun` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Reem Kufi Fun page on Google Fonts](https://fonts.google.com/specimen/Reem+Kufi+Fun) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Reem Kufi Fun on Google Fonts](https://fonts.google.com/specimen/Reem+Kufi+Fun)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/reem-kufi-fun)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/reem-kufi-fun)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
