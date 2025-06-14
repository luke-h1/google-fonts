# @expo-google-fonts/aleo

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/aleo)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/aleo)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/aleo)

This package lets you use the [**Aleo**](https://fonts.google.com/specimen/Aleo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Aleo

![Aleo](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Aleo_100Thin`
- `Aleo_200ExtraLight`
- `Aleo_300Light`
- `Aleo_400Regular`
- `Aleo_500Medium`
- `Aleo_600SemiBold`
- `Aleo_700Bold`
- `Aleo_800ExtraBold`
- `Aleo_900Black`
- `Aleo_100Thin_Italic`
- `Aleo_200ExtraLight_Italic`
- `Aleo_300Light_Italic`
- `Aleo_400Regular_Italic`
- `Aleo_500Medium_Italic`
- `Aleo_600SemiBold_Italic`
- `Aleo_700Bold_Italic`
- `Aleo_800ExtraBold_Italic`
- `Aleo_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/aleo expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/aleo/useFonts';
import { Aleo_100Thin } from '@expo-google-fonts/aleo/100Thin';
import { Aleo_200ExtraLight } from '@expo-google-fonts/aleo/200ExtraLight';
import { Aleo_300Light } from '@expo-google-fonts/aleo/300Light';
import { Aleo_400Regular } from '@expo-google-fonts/aleo/400Regular';
import { Aleo_500Medium } from '@expo-google-fonts/aleo/500Medium';
import { Aleo_600SemiBold } from '@expo-google-fonts/aleo/600SemiBold';
import { Aleo_700Bold } from '@expo-google-fonts/aleo/700Bold';
import { Aleo_800ExtraBold } from '@expo-google-fonts/aleo/800ExtraBold';
import { Aleo_900Black } from '@expo-google-fonts/aleo/900Black';
import { Aleo_100Thin_Italic } from '@expo-google-fonts/aleo/100Thin_Italic';
import { Aleo_200ExtraLight_Italic } from '@expo-google-fonts/aleo/200ExtraLight_Italic';
import { Aleo_300Light_Italic } from '@expo-google-fonts/aleo/300Light_Italic';
import { Aleo_400Regular_Italic } from '@expo-google-fonts/aleo/400Regular_Italic';
import { Aleo_500Medium_Italic } from '@expo-google-fonts/aleo/500Medium_Italic';
import { Aleo_600SemiBold_Italic } from '@expo-google-fonts/aleo/600SemiBold_Italic';
import { Aleo_700Bold_Italic } from '@expo-google-fonts/aleo/700Bold_Italic';
import { Aleo_800ExtraBold_Italic } from '@expo-google-fonts/aleo/800ExtraBold_Italic';
import { Aleo_900Black_Italic } from '@expo-google-fonts/aleo/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Aleo_100Thin, 
    Aleo_200ExtraLight, 
    Aleo_300Light, 
    Aleo_400Regular, 
    Aleo_500Medium, 
    Aleo_600SemiBold, 
    Aleo_700Bold, 
    Aleo_800ExtraBold, 
    Aleo_900Black, 
    Aleo_100Thin_Italic, 
    Aleo_200ExtraLight_Italic, 
    Aleo_300Light_Italic, 
    Aleo_400Regular_Italic, 
    Aleo_500Medium_Italic, 
    Aleo_600SemiBold_Italic, 
    Aleo_700Bold_Italic, 
    Aleo_800ExtraBold_Italic, 
    Aleo_900Black_Italic
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
          fontFamily: "Aleo_100Thin"
        }}>
          Aleo Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_200ExtraLight"
        }}>
          Aleo Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_300Light"
        }}>
          Aleo Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_400Regular"
        }}>
          Aleo Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_500Medium"
        }}>
          Aleo Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_600SemiBold"
        }}>
          Aleo Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_700Bold"
        }}>
          Aleo Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_800ExtraBold"
        }}>
          Aleo Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_900Black"
        }}>
          Aleo Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_100Thin_Italic"
        }}>
          Aleo Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_200ExtraLight_Italic"
        }}>
          Aleo Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_300Light_Italic"
        }}>
          Aleo Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_400Regular_Italic"
        }}>
          Aleo Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_500Medium_Italic"
        }}>
          Aleo Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_600SemiBold_Italic"
        }}>
          Aleo Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_700Bold_Italic"
        }}>
          Aleo Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_800ExtraBold_Italic"
        }}>
          Aleo Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Aleo_900Black_Italic"
        }}>
          Aleo Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Aleo_100Thin](./100Thin/Aleo_100Thin.ttf.png)|![Aleo_200ExtraLight](./200ExtraLight/Aleo_200ExtraLight.ttf.png)|![Aleo_300Light](./300Light/Aleo_300Light.ttf.png)||
|![Aleo_400Regular](./400Regular/Aleo_400Regular.ttf.png)|![Aleo_500Medium](./500Medium/Aleo_500Medium.ttf.png)|![Aleo_600SemiBold](./600SemiBold/Aleo_600SemiBold.ttf.png)||
|![Aleo_700Bold](./700Bold/Aleo_700Bold.ttf.png)|![Aleo_800ExtraBold](./800ExtraBold/Aleo_800ExtraBold.ttf.png)|![Aleo_900Black](./900Black/Aleo_900Black.ttf.png)||
|![Aleo_100Thin_Italic](./100Thin_Italic/Aleo_100Thin_Italic.ttf.png)|![Aleo_200ExtraLight_Italic](./200ExtraLight_Italic/Aleo_200ExtraLight_Italic.ttf.png)|![Aleo_300Light_Italic](./300Light_Italic/Aleo_300Light_Italic.ttf.png)||
|![Aleo_400Regular_Italic](./400Regular_Italic/Aleo_400Regular_Italic.ttf.png)|![Aleo_500Medium_Italic](./500Medium_Italic/Aleo_500Medium_Italic.ttf.png)|![Aleo_600SemiBold_Italic](./600SemiBold_Italic/Aleo_600SemiBold_Italic.ttf.png)||
|![Aleo_700Bold_Italic](./700Bold_Italic/Aleo_700Bold_Italic.ttf.png)|![Aleo_800ExtraBold_Italic](./800ExtraBold_Italic/Aleo_800ExtraBold_Italic.ttf.png)|![Aleo_900Black_Italic](./900Black_Italic/Aleo_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/aleo` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Aleo page on Google Fonts](https://fonts.google.com/specimen/Aleo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Aleo on Google Fonts](https://fonts.google.com/specimen/Aleo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/aleo)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/aleo)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
