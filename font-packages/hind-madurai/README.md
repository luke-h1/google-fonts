# @expo-google-fonts/hind-madurai

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/hind-madurai)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/hind-madurai)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/hind-madurai)

This package lets you use the [**Hind Madurai**](https://fonts.google.com/specimen/Hind+Madurai) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Hind Madurai

![Hind Madurai](./font-family.png)

This font family contains [5 styles](#-gallery).

- `HindMadurai_300Light`
- `HindMadurai_400Regular`
- `HindMadurai_500Medium`
- `HindMadurai_600SemiBold`
- `HindMadurai_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/hind-madurai expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/hind-madurai/useFonts';
import { HindMadurai_300Light } from '@expo-google-fonts/hind-madurai/300Light';
import { HindMadurai_400Regular } from '@expo-google-fonts/hind-madurai/400Regular';
import { HindMadurai_500Medium } from '@expo-google-fonts/hind-madurai/500Medium';
import { HindMadurai_600SemiBold } from '@expo-google-fonts/hind-madurai/600SemiBold';
import { HindMadurai_700Bold } from '@expo-google-fonts/hind-madurai/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    HindMadurai_300Light, 
    HindMadurai_400Regular, 
    HindMadurai_500Medium, 
    HindMadurai_600SemiBold, 
    HindMadurai_700Bold
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
          fontFamily: "HindMadurai_300Light"
        }}>
          Hind Madurai Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HindMadurai_400Regular"
        }}>
          Hind Madurai Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HindMadurai_500Medium"
        }}>
          Hind Madurai Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HindMadurai_600SemiBold"
        }}>
          Hind Madurai Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "HindMadurai_700Bold"
        }}>
          Hind Madurai Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![HindMadurai_300Light](./300Light/HindMadurai_300Light.ttf.png)|![HindMadurai_400Regular](./400Regular/HindMadurai_400Regular.ttf.png)|![HindMadurai_500Medium](./500Medium/HindMadurai_500Medium.ttf.png)||
|![HindMadurai_600SemiBold](./600SemiBold/HindMadurai_600SemiBold.ttf.png)|![HindMadurai_700Bold](./700Bold/HindMadurai_700Bold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/hind-madurai` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Hind Madurai page on Google Fonts](https://fonts.google.com/specimen/Hind+Madurai) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Hind Madurai on Google Fonts](https://fonts.google.com/specimen/Hind+Madurai)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/hind-madurai)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/hind-madurai)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
