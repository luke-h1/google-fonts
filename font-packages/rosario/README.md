# @expo-google-fonts/rosario

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/rosario)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/rosario)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/rosario)

This package lets you use the [**Rosario**](https://fonts.google.com/specimen/Rosario) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Rosario

![Rosario](./font-family.png)

This font family contains [10 styles](#-gallery).

- `Rosario_300Light`
- `Rosario_400Regular`
- `Rosario_500Medium`
- `Rosario_600SemiBold`
- `Rosario_700Bold`
- `Rosario_300Light_Italic`
- `Rosario_400Regular_Italic`
- `Rosario_500Medium_Italic`
- `Rosario_600SemiBold_Italic`
- `Rosario_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/rosario expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/rosario/useFonts';
import { Rosario_300Light } from '@expo-google-fonts/rosario/300Light';
import { Rosario_400Regular } from '@expo-google-fonts/rosario/400Regular';
import { Rosario_500Medium } from '@expo-google-fonts/rosario/500Medium';
import { Rosario_600SemiBold } from '@expo-google-fonts/rosario/600SemiBold';
import { Rosario_700Bold } from '@expo-google-fonts/rosario/700Bold';
import { Rosario_300Light_Italic } from '@expo-google-fonts/rosario/300Light_Italic';
import { Rosario_400Regular_Italic } from '@expo-google-fonts/rosario/400Regular_Italic';
import { Rosario_500Medium_Italic } from '@expo-google-fonts/rosario/500Medium_Italic';
import { Rosario_600SemiBold_Italic } from '@expo-google-fonts/rosario/600SemiBold_Italic';
import { Rosario_700Bold_Italic } from '@expo-google-fonts/rosario/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Rosario_300Light, 
    Rosario_400Regular, 
    Rosario_500Medium, 
    Rosario_600SemiBold, 
    Rosario_700Bold, 
    Rosario_300Light_Italic, 
    Rosario_400Regular_Italic, 
    Rosario_500Medium_Italic, 
    Rosario_600SemiBold_Italic, 
    Rosario_700Bold_Italic
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
          fontFamily: "Rosario_300Light"
        }}>
          Rosario Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rosario_400Regular"
        }}>
          Rosario Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rosario_500Medium"
        }}>
          Rosario Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rosario_600SemiBold"
        }}>
          Rosario Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rosario_700Bold"
        }}>
          Rosario Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rosario_300Light_Italic"
        }}>
          Rosario Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rosario_400Regular_Italic"
        }}>
          Rosario Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rosario_500Medium_Italic"
        }}>
          Rosario Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rosario_600SemiBold_Italic"
        }}>
          Rosario Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Rosario_700Bold_Italic"
        }}>
          Rosario Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Rosario_300Light](./300Light/Rosario_300Light.ttf.png)|![Rosario_400Regular](./400Regular/Rosario_400Regular.ttf.png)|![Rosario_500Medium](./500Medium/Rosario_500Medium.ttf.png)||
|![Rosario_600SemiBold](./600SemiBold/Rosario_600SemiBold.ttf.png)|![Rosario_700Bold](./700Bold/Rosario_700Bold.ttf.png)|![Rosario_300Light_Italic](./300Light_Italic/Rosario_300Light_Italic.ttf.png)||
|![Rosario_400Regular_Italic](./400Regular_Italic/Rosario_400Regular_Italic.ttf.png)|![Rosario_500Medium_Italic](./500Medium_Italic/Rosario_500Medium_Italic.ttf.png)|![Rosario_600SemiBold_Italic](./600SemiBold_Italic/Rosario_600SemiBold_Italic.ttf.png)||
|![Rosario_700Bold_Italic](./700Bold_Italic/Rosario_700Bold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/rosario` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Rosario page on Google Fonts](https://fonts.google.com/specimen/Rosario) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Rosario on Google Fonts](https://fonts.google.com/specimen/Rosario)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/rosario)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/rosario)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
