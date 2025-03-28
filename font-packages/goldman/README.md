# @expo-google-fonts/goldman

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/goldman)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/goldman)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/goldman)

This package lets you use the [**Goldman**](https://fonts.google.com/specimen/Goldman) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Goldman

![Goldman](./font-family.png)

This font family contains [2 styles](#-gallery).

- `Goldman_400Regular`
- `Goldman_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/goldman expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/goldman/useFonts';
import { Goldman_400Regular } from '@expo-google-fonts/goldman/400Regular';
import { Goldman_700Bold } from '@expo-google-fonts/goldman/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Goldman_400Regular, 
    Goldman_700Bold
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
          fontFamily: "Goldman_400Regular"
        }}>
          Goldman Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Goldman_700Bold"
        }}>
          Goldman Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Goldman_400Regular](./400Regular/Goldman_400Regular.ttf.png)|![Goldman_700Bold](./700Bold/Goldman_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/goldman` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Goldman page on Google Fonts](https://fonts.google.com/specimen/Goldman) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Goldman on Google Fonts](https://fonts.google.com/specimen/Goldman)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/goldman)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/goldman)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
