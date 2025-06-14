# @expo-google-fonts/koho

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/koho)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/koho)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/koho)

This package lets you use the [**KoHo**](https://fonts.google.com/specimen/KoHo) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## KoHo

![KoHo](./font-family.png)

This font family contains [12 styles](#-gallery).

- `KoHo_200ExtraLight`
- `KoHo_200ExtraLight_Italic`
- `KoHo_300Light`
- `KoHo_300Light_Italic`
- `KoHo_400Regular`
- `KoHo_400Regular_Italic`
- `KoHo_500Medium`
- `KoHo_500Medium_Italic`
- `KoHo_600SemiBold`
- `KoHo_600SemiBold_Italic`
- `KoHo_700Bold`
- `KoHo_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/koho expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/koho/useFonts';
import { KoHo_200ExtraLight } from '@expo-google-fonts/koho/200ExtraLight';
import { KoHo_200ExtraLight_Italic } from '@expo-google-fonts/koho/200ExtraLight_Italic';
import { KoHo_300Light } from '@expo-google-fonts/koho/300Light';
import { KoHo_300Light_Italic } from '@expo-google-fonts/koho/300Light_Italic';
import { KoHo_400Regular } from '@expo-google-fonts/koho/400Regular';
import { KoHo_400Regular_Italic } from '@expo-google-fonts/koho/400Regular_Italic';
import { KoHo_500Medium } from '@expo-google-fonts/koho/500Medium';
import { KoHo_500Medium_Italic } from '@expo-google-fonts/koho/500Medium_Italic';
import { KoHo_600SemiBold } from '@expo-google-fonts/koho/600SemiBold';
import { KoHo_600SemiBold_Italic } from '@expo-google-fonts/koho/600SemiBold_Italic';
import { KoHo_700Bold } from '@expo-google-fonts/koho/700Bold';
import { KoHo_700Bold_Italic } from '@expo-google-fonts/koho/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    KoHo_200ExtraLight, 
    KoHo_200ExtraLight_Italic, 
    KoHo_300Light, 
    KoHo_300Light_Italic, 
    KoHo_400Regular, 
    KoHo_400Regular_Italic, 
    KoHo_500Medium, 
    KoHo_500Medium_Italic, 
    KoHo_600SemiBold, 
    KoHo_600SemiBold_Italic, 
    KoHo_700Bold, 
    KoHo_700Bold_Italic
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
          fontFamily: "KoHo_200ExtraLight"
        }}>
          KoHo Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KoHo_200ExtraLight_Italic"
        }}>
          KoHo Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KoHo_300Light"
        }}>
          KoHo Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KoHo_300Light_Italic"
        }}>
          KoHo Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KoHo_400Regular"
        }}>
          KoHo Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KoHo_400Regular_Italic"
        }}>
          KoHo Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KoHo_500Medium"
        }}>
          KoHo Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KoHo_500Medium_Italic"
        }}>
          KoHo Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KoHo_600SemiBold"
        }}>
          KoHo Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KoHo_600SemiBold_Italic"
        }}>
          KoHo Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KoHo_700Bold"
        }}>
          KoHo Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "KoHo_700Bold_Italic"
        }}>
          KoHo Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![KoHo_200ExtraLight](./200ExtraLight/KoHo_200ExtraLight.ttf.png)|![KoHo_200ExtraLight_Italic](./200ExtraLight_Italic/KoHo_200ExtraLight_Italic.ttf.png)|![KoHo_300Light](./300Light/KoHo_300Light.ttf.png)||
|![KoHo_300Light_Italic](./300Light_Italic/KoHo_300Light_Italic.ttf.png)|![KoHo_400Regular](./400Regular/KoHo_400Regular.ttf.png)|![KoHo_400Regular_Italic](./400Regular_Italic/KoHo_400Regular_Italic.ttf.png)||
|![KoHo_500Medium](./500Medium/KoHo_500Medium.ttf.png)|![KoHo_500Medium_Italic](./500Medium_Italic/KoHo_500Medium_Italic.ttf.png)|![KoHo_600SemiBold](./600SemiBold/KoHo_600SemiBold.ttf.png)||
|![KoHo_600SemiBold_Italic](./600SemiBold_Italic/KoHo_600SemiBold_Italic.ttf.png)|![KoHo_700Bold](./700Bold/KoHo_700Bold.ttf.png)|![KoHo_700Bold_Italic](./700Bold_Italic/KoHo_700Bold_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/koho` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [KoHo page on Google Fonts](https://fonts.google.com/specimen/KoHo) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [KoHo on Google Fonts](https://fonts.google.com/specimen/KoHo)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/koho)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/koho)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
