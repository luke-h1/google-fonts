# @expo-google-fonts/mohave

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/mohave)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/mohave)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/mohave)

This package lets you use the [**Mohave**](https://fonts.google.com/specimen/Mohave) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Mohave

![Mohave](./font-family.png)

This font family contains [10 styles](#-gallery).

- `Mohave_300Light`
- `Mohave_400Regular`
- `Mohave_500Medium`
- `Mohave_600SemiBold`
- `Mohave_700Bold`
- `Mohave_300Light_Italic`
- `Mohave_400Regular_Italic`
- `Mohave_500Medium_Italic`
- `Mohave_600SemiBold_Italic`
- `Mohave_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/mohave expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/mohave/useFonts';
import { Mohave_300Light } from '@expo-google-fonts/mohave/300Light';
import { Mohave_400Regular } from '@expo-google-fonts/mohave/400Regular';
import { Mohave_500Medium } from '@expo-google-fonts/mohave/500Medium';
import { Mohave_600SemiBold } from '@expo-google-fonts/mohave/600SemiBold';
import { Mohave_700Bold } from '@expo-google-fonts/mohave/700Bold';
import { Mohave_300Light_Italic } from '@expo-google-fonts/mohave/300Light_Italic';
import { Mohave_400Regular_Italic } from '@expo-google-fonts/mohave/400Regular_Italic';
import { Mohave_500Medium_Italic } from '@expo-google-fonts/mohave/500Medium_Italic';
import { Mohave_600SemiBold_Italic } from '@expo-google-fonts/mohave/600SemiBold_Italic';
import { Mohave_700Bold_Italic } from '@expo-google-fonts/mohave/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Mohave_300Light, 
    Mohave_400Regular, 
    Mohave_500Medium, 
    Mohave_600SemiBold, 
    Mohave_700Bold, 
    Mohave_300Light_Italic, 
    Mohave_400Regular_Italic, 
    Mohave_500Medium_Italic, 
    Mohave_600SemiBold_Italic, 
    Mohave_700Bold_Italic
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
          fontFamily: "Mohave_300Light"
        }}>
          Mohave Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mohave_400Regular"
        }}>
          Mohave Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mohave_500Medium"
        }}>
          Mohave Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mohave_600SemiBold"
        }}>
          Mohave Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mohave_700Bold"
        }}>
          Mohave Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mohave_300Light_Italic"
        }}>
          Mohave Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mohave_400Regular_Italic"
        }}>
          Mohave Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mohave_500Medium_Italic"
        }}>
          Mohave Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mohave_600SemiBold_Italic"
        }}>
          Mohave Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Mohave_700Bold_Italic"
        }}>
          Mohave Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Mohave_300Light](./300Light/Mohave_300Light.ttf.png)|![Mohave_400Regular](./400Regular/Mohave_400Regular.ttf.png)|![Mohave_500Medium](./500Medium/Mohave_500Medium.ttf.png)||
|![Mohave_600SemiBold](./600SemiBold/Mohave_600SemiBold.ttf.png)|![Mohave_700Bold](./700Bold/Mohave_700Bold.ttf.png)|![Mohave_300Light_Italic](./300Light_Italic/Mohave_300Light_Italic.ttf.png)||
|![Mohave_400Regular_Italic](./400Regular_Italic/Mohave_400Regular_Italic.ttf.png)|![Mohave_500Medium_Italic](./500Medium_Italic/Mohave_500Medium_Italic.ttf.png)|![Mohave_600SemiBold_Italic](./600SemiBold_Italic/Mohave_600SemiBold_Italic.ttf.png)||
|![Mohave_700Bold_Italic](./700Bold_Italic/Mohave_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/mohave` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Mohave page on Google Fonts](https://fonts.google.com/specimen/Mohave) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Mohave on Google Fonts](https://fonts.google.com/specimen/Mohave)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/mohave)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/mohave)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
