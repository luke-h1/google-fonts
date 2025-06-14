# @expo-google-fonts/annapurna-sil

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/annapurna-sil)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/annapurna-sil)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/annapurna-sil)

This package lets you use the [**Annapurna SIL**](https://fonts.google.com/specimen/Annapurna+SIL) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Annapurna SIL

![Annapurna SIL](./font-family.png)

This font family contains [2 styles](#-gallery).

- `AnnapurnaSIL_400Regular`
- `AnnapurnaSIL_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/annapurna-sil expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/annapurna-sil/useFonts';
import { AnnapurnaSIL_400Regular } from '@expo-google-fonts/annapurna-sil/400Regular';
import { AnnapurnaSIL_700Bold } from '@expo-google-fonts/annapurna-sil/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    AnnapurnaSIL_400Regular, 
    AnnapurnaSIL_700Bold
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
          fontFamily: "AnnapurnaSIL_400Regular"
        }}>
          Annapurna SIL Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AnnapurnaSIL_700Bold"
        }}>
          Annapurna SIL Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AnnapurnaSIL_400Regular](./400Regular/AnnapurnaSIL_400Regular.ttf.png)|![AnnapurnaSIL_700Bold](./700Bold/AnnapurnaSIL_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/annapurna-sil` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Annapurna SIL page on Google Fonts](https://fonts.google.com/specimen/Annapurna+SIL) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Annapurna SIL on Google Fonts](https://fonts.google.com/specimen/Annapurna+SIL)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/annapurna-sil)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/annapurna-sil)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
