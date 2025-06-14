# @expo-google-fonts/tourney

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/tourney)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/tourney)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/tourney)

This package lets you use the [**Tourney**](https://fonts.google.com/specimen/Tourney) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Tourney

![Tourney](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Tourney_100Thin`
- `Tourney_200ExtraLight`
- `Tourney_300Light`
- `Tourney_400Regular`
- `Tourney_500Medium`
- `Tourney_600SemiBold`
- `Tourney_700Bold`
- `Tourney_800ExtraBold`
- `Tourney_900Black`
- `Tourney_100Thin_Italic`
- `Tourney_200ExtraLight_Italic`
- `Tourney_300Light_Italic`
- `Tourney_400Regular_Italic`
- `Tourney_500Medium_Italic`
- `Tourney_600SemiBold_Italic`
- `Tourney_700Bold_Italic`
- `Tourney_800ExtraBold_Italic`
- `Tourney_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/tourney expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/tourney/useFonts';
import { Tourney_100Thin } from '@expo-google-fonts/tourney/100Thin';
import { Tourney_200ExtraLight } from '@expo-google-fonts/tourney/200ExtraLight';
import { Tourney_300Light } from '@expo-google-fonts/tourney/300Light';
import { Tourney_400Regular } from '@expo-google-fonts/tourney/400Regular';
import { Tourney_500Medium } from '@expo-google-fonts/tourney/500Medium';
import { Tourney_600SemiBold } from '@expo-google-fonts/tourney/600SemiBold';
import { Tourney_700Bold } from '@expo-google-fonts/tourney/700Bold';
import { Tourney_800ExtraBold } from '@expo-google-fonts/tourney/800ExtraBold';
import { Tourney_900Black } from '@expo-google-fonts/tourney/900Black';
import { Tourney_100Thin_Italic } from '@expo-google-fonts/tourney/100Thin_Italic';
import { Tourney_200ExtraLight_Italic } from '@expo-google-fonts/tourney/200ExtraLight_Italic';
import { Tourney_300Light_Italic } from '@expo-google-fonts/tourney/300Light_Italic';
import { Tourney_400Regular_Italic } from '@expo-google-fonts/tourney/400Regular_Italic';
import { Tourney_500Medium_Italic } from '@expo-google-fonts/tourney/500Medium_Italic';
import { Tourney_600SemiBold_Italic } from '@expo-google-fonts/tourney/600SemiBold_Italic';
import { Tourney_700Bold_Italic } from '@expo-google-fonts/tourney/700Bold_Italic';
import { Tourney_800ExtraBold_Italic } from '@expo-google-fonts/tourney/800ExtraBold_Italic';
import { Tourney_900Black_Italic } from '@expo-google-fonts/tourney/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Tourney_100Thin, 
    Tourney_200ExtraLight, 
    Tourney_300Light, 
    Tourney_400Regular, 
    Tourney_500Medium, 
    Tourney_600SemiBold, 
    Tourney_700Bold, 
    Tourney_800ExtraBold, 
    Tourney_900Black, 
    Tourney_100Thin_Italic, 
    Tourney_200ExtraLight_Italic, 
    Tourney_300Light_Italic, 
    Tourney_400Regular_Italic, 
    Tourney_500Medium_Italic, 
    Tourney_600SemiBold_Italic, 
    Tourney_700Bold_Italic, 
    Tourney_800ExtraBold_Italic, 
    Tourney_900Black_Italic
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
          fontFamily: "Tourney_100Thin"
        }}>
          Tourney Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_200ExtraLight"
        }}>
          Tourney Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_300Light"
        }}>
          Tourney Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_400Regular"
        }}>
          Tourney Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_500Medium"
        }}>
          Tourney Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_600SemiBold"
        }}>
          Tourney Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_700Bold"
        }}>
          Tourney Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_800ExtraBold"
        }}>
          Tourney Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_900Black"
        }}>
          Tourney Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_100Thin_Italic"
        }}>
          Tourney Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_200ExtraLight_Italic"
        }}>
          Tourney Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_300Light_Italic"
        }}>
          Tourney Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_400Regular_Italic"
        }}>
          Tourney Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_500Medium_Italic"
        }}>
          Tourney Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_600SemiBold_Italic"
        }}>
          Tourney Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_700Bold_Italic"
        }}>
          Tourney Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_800ExtraBold_Italic"
        }}>
          Tourney Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Tourney_900Black_Italic"
        }}>
          Tourney Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Tourney_100Thin](./100Thin/Tourney_100Thin.ttf.png)|![Tourney_200ExtraLight](./200ExtraLight/Tourney_200ExtraLight.ttf.png)|![Tourney_300Light](./300Light/Tourney_300Light.ttf.png)||
|![Tourney_400Regular](./400Regular/Tourney_400Regular.ttf.png)|![Tourney_500Medium](./500Medium/Tourney_500Medium.ttf.png)|![Tourney_600SemiBold](./600SemiBold/Tourney_600SemiBold.ttf.png)||
|![Tourney_700Bold](./700Bold/Tourney_700Bold.ttf.png)|![Tourney_800ExtraBold](./800ExtraBold/Tourney_800ExtraBold.ttf.png)|![Tourney_900Black](./900Black/Tourney_900Black.ttf.png)||
|![Tourney_100Thin_Italic](./100Thin_Italic/Tourney_100Thin_Italic.ttf.png)|![Tourney_200ExtraLight_Italic](./200ExtraLight_Italic/Tourney_200ExtraLight_Italic.ttf.png)|![Tourney_300Light_Italic](./300Light_Italic/Tourney_300Light_Italic.ttf.png)||
|![Tourney_400Regular_Italic](./400Regular_Italic/Tourney_400Regular_Italic.ttf.png)|![Tourney_500Medium_Italic](./500Medium_Italic/Tourney_500Medium_Italic.ttf.png)|![Tourney_600SemiBold_Italic](./600SemiBold_Italic/Tourney_600SemiBold_Italic.ttf.png)||
|![Tourney_700Bold_Italic](./700Bold_Italic/Tourney_700Bold_Italic.ttf.png)|![Tourney_800ExtraBold_Italic](./800ExtraBold_Italic/Tourney_800ExtraBold_Italic.ttf.png)|![Tourney_900Black_Italic](./900Black_Italic/Tourney_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/tourney` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Tourney page on Google Fonts](https://fonts.google.com/specimen/Tourney) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Tourney on Google Fonts](https://fonts.google.com/specimen/Tourney)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/tourney)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/tourney)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
