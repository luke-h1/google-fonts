# @expo-google-fonts/akshar

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/akshar)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/akshar)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/akshar)

This package lets you use the [**Akshar**](https://fonts.google.com/specimen/Akshar) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Akshar

![Akshar](./font-family.png)

This font family contains [5 styles](#-gallery).

- `Akshar_300Light`
- `Akshar_400Regular`
- `Akshar_500Medium`
- `Akshar_600SemiBold`
- `Akshar_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/akshar expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/akshar/useFonts';
import { Akshar_300Light } from '@expo-google-fonts/akshar/300Light';
import { Akshar_400Regular } from '@expo-google-fonts/akshar/400Regular';
import { Akshar_500Medium } from '@expo-google-fonts/akshar/500Medium';
import { Akshar_600SemiBold } from '@expo-google-fonts/akshar/600SemiBold';
import { Akshar_700Bold } from '@expo-google-fonts/akshar/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    Akshar_300Light, 
    Akshar_400Regular, 
    Akshar_500Medium, 
    Akshar_600SemiBold, 
    Akshar_700Bold
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
          fontFamily: "Akshar_300Light"
        }}>
          Akshar Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akshar_400Regular"
        }}>
          Akshar Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akshar_500Medium"
        }}>
          Akshar Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akshar_600SemiBold"
        }}>
          Akshar Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Akshar_700Bold"
        }}>
          Akshar Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Akshar_300Light](./300Light/Akshar_300Light.ttf.png)|![Akshar_400Regular](./400Regular/Akshar_400Regular.ttf.png)|![Akshar_500Medium](./500Medium/Akshar_500Medium.ttf.png)||
|![Akshar_600SemiBold](./600SemiBold/Akshar_600SemiBold.ttf.png)|![Akshar_700Bold](./700Bold/Akshar_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/akshar` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Akshar page on Google Fonts](https://fonts.google.com/specimen/Akshar) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Akshar on Google Fonts](https://fonts.google.com/specimen/Akshar)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/akshar)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/akshar)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
