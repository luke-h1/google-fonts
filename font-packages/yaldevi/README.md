# @expo-google-fonts/yaldevi

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/yaldevi)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/yaldevi)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/yaldevi)

This package lets you use the [**Yaldevi**](https://fonts.google.com/specimen/Yaldevi) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Yaldevi

![Yaldevi](./font-family.png)

This font family contains [6 styles](#-gallery).

- `Yaldevi_200ExtraLight`
- `Yaldevi_300Light`
- `Yaldevi_400Regular`
- `Yaldevi_500Medium`
- `Yaldevi_600SemiBold`
- `Yaldevi_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/yaldevi expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/yaldevi/useFonts';
import { Yaldevi_200ExtraLight } from '@expo-google-fonts/yaldevi/200ExtraLight';
import { Yaldevi_300Light } from '@expo-google-fonts/yaldevi/300Light';
import { Yaldevi_400Regular } from '@expo-google-fonts/yaldevi/400Regular';
import { Yaldevi_500Medium } from '@expo-google-fonts/yaldevi/500Medium';
import { Yaldevi_600SemiBold } from '@expo-google-fonts/yaldevi/600SemiBold';
import { Yaldevi_700Bold } from '@expo-google-fonts/yaldevi/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Yaldevi_200ExtraLight, 
    Yaldevi_300Light, 
    Yaldevi_400Regular, 
    Yaldevi_500Medium, 
    Yaldevi_600SemiBold, 
    Yaldevi_700Bold
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
          fontFamily: "Yaldevi_200ExtraLight"
        }}>
          Yaldevi Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Yaldevi_300Light"
        }}>
          Yaldevi Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Yaldevi_400Regular"
        }}>
          Yaldevi Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Yaldevi_500Medium"
        }}>
          Yaldevi Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Yaldevi_600SemiBold"
        }}>
          Yaldevi Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Yaldevi_700Bold"
        }}>
          Yaldevi Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Yaldevi_200ExtraLight](./200ExtraLight/Yaldevi_200ExtraLight.ttf.png)|![Yaldevi_300Light](./300Light/Yaldevi_300Light.ttf.png)|![Yaldevi_400Regular](./400Regular/Yaldevi_400Regular.ttf.png)||
|![Yaldevi_500Medium](./500Medium/Yaldevi_500Medium.ttf.png)|![Yaldevi_600SemiBold](./600SemiBold/Yaldevi_600SemiBold.ttf.png)|![Yaldevi_700Bold](./700Bold/Yaldevi_700Bold.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/yaldevi` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Yaldevi page on Google Fonts](https://fonts.google.com/specimen/Yaldevi) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Yaldevi on Google Fonts](https://fonts.google.com/specimen/Yaldevi)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/yaldevi)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/yaldevi)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
