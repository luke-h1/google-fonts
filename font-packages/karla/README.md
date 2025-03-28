# @expo-google-fonts/karla

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/karla)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/karla)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/karla)

This package lets you use the [**Karla**](https://fonts.google.com/specimen/Karla) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Karla

![Karla](./font-family.png)

This font family contains [14 styles](#-gallery).

- `Karla_200ExtraLight`
- `Karla_300Light`
- `Karla_400Regular`
- `Karla_500Medium`
- `Karla_600SemiBold`
- `Karla_700Bold`
- `Karla_800ExtraBold`
- `Karla_200ExtraLight_Italic`
- `Karla_300Light_Italic`
- `Karla_400Regular_Italic`
- `Karla_500Medium_Italic`
- `Karla_600SemiBold_Italic`
- `Karla_700Bold_Italic`
- `Karla_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/karla expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/karla/useFonts';
import { Karla_200ExtraLight } from '@expo-google-fonts/karla/200ExtraLight';
import { Karla_300Light } from '@expo-google-fonts/karla/300Light';
import { Karla_400Regular } from '@expo-google-fonts/karla/400Regular';
import { Karla_500Medium } from '@expo-google-fonts/karla/500Medium';
import { Karla_600SemiBold } from '@expo-google-fonts/karla/600SemiBold';
import { Karla_700Bold } from '@expo-google-fonts/karla/700Bold';
import { Karla_800ExtraBold } from '@expo-google-fonts/karla/800ExtraBold';
import { Karla_200ExtraLight_Italic } from '@expo-google-fonts/karla/200ExtraLight_Italic';
import { Karla_300Light_Italic } from '@expo-google-fonts/karla/300Light_Italic';
import { Karla_400Regular_Italic } from '@expo-google-fonts/karla/400Regular_Italic';
import { Karla_500Medium_Italic } from '@expo-google-fonts/karla/500Medium_Italic';
import { Karla_600SemiBold_Italic } from '@expo-google-fonts/karla/600SemiBold_Italic';
import { Karla_700Bold_Italic } from '@expo-google-fonts/karla/700Bold_Italic';
import { Karla_800ExtraBold_Italic } from '@expo-google-fonts/karla/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Karla_200ExtraLight, 
    Karla_300Light, 
    Karla_400Regular, 
    Karla_500Medium, 
    Karla_600SemiBold, 
    Karla_700Bold, 
    Karla_800ExtraBold, 
    Karla_200ExtraLight_Italic, 
    Karla_300Light_Italic, 
    Karla_400Regular_Italic, 
    Karla_500Medium_Italic, 
    Karla_600SemiBold_Italic, 
    Karla_700Bold_Italic, 
    Karla_800ExtraBold_Italic
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
          fontFamily: "Karla_200ExtraLight"
        }}>
          Karla Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_300Light"
        }}>
          Karla Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_400Regular"
        }}>
          Karla Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_500Medium"
        }}>
          Karla Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_600SemiBold"
        }}>
          Karla Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_700Bold"
        }}>
          Karla Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_800ExtraBold"
        }}>
          Karla Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_200ExtraLight_Italic"
        }}>
          Karla Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_300Light_Italic"
        }}>
          Karla Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_400Regular_Italic"
        }}>
          Karla Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_500Medium_Italic"
        }}>
          Karla Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_600SemiBold_Italic"
        }}>
          Karla Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_700Bold_Italic"
        }}>
          Karla Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Karla_800ExtraBold_Italic"
        }}>
          Karla Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Karla_200ExtraLight](./200ExtraLight/Karla_200ExtraLight.ttf.png)|![Karla_300Light](./300Light/Karla_300Light.ttf.png)|![Karla_400Regular](./400Regular/Karla_400Regular.ttf.png)||
|![Karla_500Medium](./500Medium/Karla_500Medium.ttf.png)|![Karla_600SemiBold](./600SemiBold/Karla_600SemiBold.ttf.png)|![Karla_700Bold](./700Bold/Karla_700Bold.ttf.png)||
|![Karla_800ExtraBold](./800ExtraBold/Karla_800ExtraBold.ttf.png)|![Karla_200ExtraLight_Italic](./200ExtraLight_Italic/Karla_200ExtraLight_Italic.ttf.png)|![Karla_300Light_Italic](./300Light_Italic/Karla_300Light_Italic.ttf.png)||
|![Karla_400Regular_Italic](./400Regular_Italic/Karla_400Regular_Italic.ttf.png)|![Karla_500Medium_Italic](./500Medium_Italic/Karla_500Medium_Italic.ttf.png)|![Karla_600SemiBold_Italic](./600SemiBold_Italic/Karla_600SemiBold_Italic.ttf.png)||
|![Karla_700Bold_Italic](./700Bold_Italic/Karla_700Bold_Italic.ttf.png)|![Karla_800ExtraBold_Italic](./800ExtraBold_Italic/Karla_800ExtraBold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/karla` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Karla page on Google Fonts](https://fonts.google.com/specimen/Karla) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Karla on Google Fonts](https://fonts.google.com/specimen/Karla)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/karla)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/karla)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
