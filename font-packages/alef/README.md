# @expo-google-fonts/alef

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/alef)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/alef)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/alef)

This package lets you use the [**Alef**](https://fonts.google.com/specimen/Alef) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Alef

![Alef](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Alef_400Regular`
- `Alef_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/alef expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/alef/useFonts';
import { Alef_400Regular } from '@expo-google-fonts/alef/400Regular';
import { Alef_700Bold } from '@expo-google-fonts/alef/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Alef_400Regular, 
    Alef_700Bold
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
          fontFamily: "Alef_400Regular"
        }}>
          Alef Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Alef_700Bold"
        }}>
          Alef Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Alef_400Regular](./400Regular/Alef_400Regular.ttf.png)|![Alef_700Bold](./700Bold/Alef_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/alef` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Alef page on Google Fonts](https://fonts.google.com/specimen/Alef) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Alef on Google Fonts](https://fonts.google.com/specimen/Alef)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alef)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alef)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
