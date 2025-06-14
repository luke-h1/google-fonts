# @expo-google-fonts/lora

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/lora)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/lora)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/lora)

This package lets you use the [**Lora**](https://fonts.google.com/specimen/Lora) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Lora

![Lora](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Lora_400Regular`
- `Lora_500Medium`
- `Lora_600SemiBold`
- `Lora_700Bold`
- `Lora_400Regular_Italic`
- `Lora_500Medium_Italic`
- `Lora_600SemiBold_Italic`
- `Lora_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/lora expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/lora/useFonts';
import { Lora_400Regular } from '@expo-google-fonts/lora/400Regular';
import { Lora_500Medium } from '@expo-google-fonts/lora/500Medium';
import { Lora_600SemiBold } from '@expo-google-fonts/lora/600SemiBold';
import { Lora_700Bold } from '@expo-google-fonts/lora/700Bold';
import { Lora_400Regular_Italic } from '@expo-google-fonts/lora/400Regular_Italic';
import { Lora_500Medium_Italic } from '@expo-google-fonts/lora/500Medium_Italic';
import { Lora_600SemiBold_Italic } from '@expo-google-fonts/lora/600SemiBold_Italic';
import { Lora_700Bold_Italic } from '@expo-google-fonts/lora/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Lora_400Regular, 
    Lora_500Medium, 
    Lora_600SemiBold, 
    Lora_700Bold, 
    Lora_400Regular_Italic, 
    Lora_500Medium_Italic, 
    Lora_600SemiBold_Italic, 
    Lora_700Bold_Italic
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
          fontFamily: "Lora_400Regular"
        }}>
          Lora Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lora_500Medium"
        }}>
          Lora Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lora_600SemiBold"
        }}>
          Lora Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lora_700Bold"
        }}>
          Lora Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lora_400Regular_Italic"
        }}>
          Lora Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lora_500Medium_Italic"
        }}>
          Lora Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lora_600SemiBold_Italic"
        }}>
          Lora Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Lora_700Bold_Italic"
        }}>
          Lora Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Lora_400Regular](./400Regular/Lora_400Regular.ttf.png)|![Lora_500Medium](./500Medium/Lora_500Medium.ttf.png)|![Lora_600SemiBold](./600SemiBold/Lora_600SemiBold.ttf.png)||
|![Lora_700Bold](./700Bold/Lora_700Bold.ttf.png)|![Lora_400Regular_Italic](./400Regular_Italic/Lora_400Regular_Italic.ttf.png)|![Lora_500Medium_Italic](./500Medium_Italic/Lora_500Medium_Italic.ttf.png)||
|![Lora_600SemiBold_Italic](./600SemiBold_Italic/Lora_600SemiBold_Italic.ttf.png)|![Lora_700Bold_Italic](./700Bold_Italic/Lora_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/lora` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Lora page on Google Fonts](https://fonts.google.com/specimen/Lora) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Lora on Google Fonts](https://fonts.google.com/specimen/Lora)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/lora)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/lora)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
