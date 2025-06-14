# @expo-google-fonts/alegreya-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/alegreya-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/alegreya-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/alegreya-sans)

This package lets you use the [**Alegreya Sans**](https://fonts.google.com/specimen/Alegreya+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Alegreya Sans

![Alegreya Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `AlegreyaSans_100Thin`
- `AlegreyaSans_100Thin_Italic`
- `AlegreyaSans_300Light`
- `AlegreyaSans_300Light_Italic`
- `AlegreyaSans_400Regular`
- `AlegreyaSans_400Regular_Italic`
- `AlegreyaSans_500Medium`
- `AlegreyaSans_500Medium_Italic`
- `AlegreyaSans_700Bold`
- `AlegreyaSans_700Bold_Italic`
- `AlegreyaSans_800ExtraBold`
- `AlegreyaSans_800ExtraBold_Italic`
- `AlegreyaSans_900Black`
- `AlegreyaSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/alegreya-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/alegreya-sans/useFonts';
import { AlegreyaSans_100Thin } from '@expo-google-fonts/alegreya-sans/100Thin';
import { AlegreyaSans_100Thin_Italic } from '@expo-google-fonts/alegreya-sans/100Thin_Italic';
import { AlegreyaSans_300Light } from '@expo-google-fonts/alegreya-sans/300Light';
import { AlegreyaSans_300Light_Italic } from '@expo-google-fonts/alegreya-sans/300Light_Italic';
import { AlegreyaSans_400Regular } from '@expo-google-fonts/alegreya-sans/400Regular';
import { AlegreyaSans_400Regular_Italic } from '@expo-google-fonts/alegreya-sans/400Regular_Italic';
import { AlegreyaSans_500Medium } from '@expo-google-fonts/alegreya-sans/500Medium';
import { AlegreyaSans_500Medium_Italic } from '@expo-google-fonts/alegreya-sans/500Medium_Italic';
import { AlegreyaSans_700Bold } from '@expo-google-fonts/alegreya-sans/700Bold';
import { AlegreyaSans_700Bold_Italic } from '@expo-google-fonts/alegreya-sans/700Bold_Italic';
import { AlegreyaSans_800ExtraBold } from '@expo-google-fonts/alegreya-sans/800ExtraBold';
import { AlegreyaSans_800ExtraBold_Italic } from '@expo-google-fonts/alegreya-sans/800ExtraBold_Italic';
import { AlegreyaSans_900Black } from '@expo-google-fonts/alegreya-sans/900Black';
import { AlegreyaSans_900Black_Italic } from '@expo-google-fonts/alegreya-sans/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    AlegreyaSans_100Thin, 
    AlegreyaSans_100Thin_Italic, 
    AlegreyaSans_300Light, 
    AlegreyaSans_300Light_Italic, 
    AlegreyaSans_400Regular, 
    AlegreyaSans_400Regular_Italic, 
    AlegreyaSans_500Medium, 
    AlegreyaSans_500Medium_Italic, 
    AlegreyaSans_700Bold, 
    AlegreyaSans_700Bold_Italic, 
    AlegreyaSans_800ExtraBold, 
    AlegreyaSans_800ExtraBold_Italic, 
    AlegreyaSans_900Black, 
    AlegreyaSans_900Black_Italic
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
          fontFamily: "AlegreyaSans_100Thin"
        }}>
          Alegreya Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_100Thin_Italic"
        }}>
          Alegreya Sans Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_300Light"
        }}>
          Alegreya Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_300Light_Italic"
        }}>
          Alegreya Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_400Regular"
        }}>
          Alegreya Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_400Regular_Italic"
        }}>
          Alegreya Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_500Medium"
        }}>
          Alegreya Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_500Medium_Italic"
        }}>
          Alegreya Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_700Bold"
        }}>
          Alegreya Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_700Bold_Italic"
        }}>
          Alegreya Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_800ExtraBold"
        }}>
          Alegreya Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_800ExtraBold_Italic"
        }}>
          Alegreya Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_900Black"
        }}>
          Alegreya Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "AlegreyaSans_900Black_Italic"
        }}>
          Alegreya Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![AlegreyaSans_100Thin](./100Thin/AlegreyaSans_100Thin.ttf.png)|![AlegreyaSans_100Thin_Italic](./100Thin_Italic/AlegreyaSans_100Thin_Italic.ttf.png)|![AlegreyaSans_300Light](./300Light/AlegreyaSans_300Light.ttf.png)||
|![AlegreyaSans_300Light_Italic](./300Light_Italic/AlegreyaSans_300Light_Italic.ttf.png)|![AlegreyaSans_400Regular](./400Regular/AlegreyaSans_400Regular.ttf.png)|![AlegreyaSans_400Regular_Italic](./400Regular_Italic/AlegreyaSans_400Regular_Italic.ttf.png)||
|![AlegreyaSans_500Medium](./500Medium/AlegreyaSans_500Medium.ttf.png)|![AlegreyaSans_500Medium_Italic](./500Medium_Italic/AlegreyaSans_500Medium_Italic.ttf.png)|![AlegreyaSans_700Bold](./700Bold/AlegreyaSans_700Bold.ttf.png)||
|![AlegreyaSans_700Bold_Italic](./700Bold_Italic/AlegreyaSans_700Bold_Italic.ttf.png)|![AlegreyaSans_800ExtraBold](./800ExtraBold/AlegreyaSans_800ExtraBold.ttf.png)|![AlegreyaSans_800ExtraBold_Italic](./800ExtraBold_Italic/AlegreyaSans_800ExtraBold_Italic.ttf.png)||
|![AlegreyaSans_900Black](./900Black/AlegreyaSans_900Black.ttf.png)|![AlegreyaSans_900Black_Italic](./900Black_Italic/AlegreyaSans_900Black_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/alegreya-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Alegreya Sans page on Google Fonts](https://fonts.google.com/specimen/Alegreya+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Alegreya Sans on Google Fonts](https://fonts.google.com/specimen/Alegreya+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/alegreya-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/alegreya-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
