# @expo-google-fonts/ingrid-darling

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ingrid-darling)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ingrid-darling)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ingrid-darling)

This package lets you use the [**Ingrid Darling**](https://fonts.google.com/specimen/Ingrid+Darling) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Ingrid Darling

![Ingrid Darling](./font-family.png)

This font family contains [1 styles](#-gallery).

- `IngridDarling_400Regular`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ingrid-darling expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/ingrid-darling/useFonts';
import { IngridDarling_400Regular } from '@expo-google-fonts/ingrid-darling/400Regular';

export default () => {

  let [fontsLoaded] = useFonts({
    IngridDarling_400Regular
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
          fontFamily: "IngridDarling_400Regular"
        }}>
          Ingrid Darling Regular
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![IngridDarling_400Regular](./400Regular/IngridDarling_400Regular.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ingrid-darling` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Ingrid Darling page on Google Fonts](https://fonts.google.com/specimen/Ingrid+Darling) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Ingrid Darling on Google Fonts](https://fonts.google.com/specimen/Ingrid+Darling)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ingrid-darling)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ingrid-darling)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
