# @expo-google-fonts/trirong

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/trirong)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/trirong)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/trirong)

This package lets you use the [**Trirong**](https://fonts.google.com/specimen/Trirong) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Trirong

![Trirong](./font-family.png)

This font family contains [18 styles](#-gallery).

- `Trirong_100Thin`
- `Trirong_100Thin_Italic`
- `Trirong_200ExtraLight`
- `Trirong_200ExtraLight_Italic`
- `Trirong_300Light`
- `Trirong_300Light_Italic`
- `Trirong_400Regular`
- `Trirong_400Regular_Italic`
- `Trirong_500Medium`
- `Trirong_500Medium_Italic`
- `Trirong_600SemiBold`
- `Trirong_600SemiBold_Italic`
- `Trirong_700Bold`
- `Trirong_700Bold_Italic`
- `Trirong_800ExtraBold`
- `Trirong_800ExtraBold_Italic`
- `Trirong_900Black`
- `Trirong_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/trirong expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/trirong/useFonts';
import { Trirong_100Thin } from '@expo-google-fonts/trirong/100Thin';
import { Trirong_100Thin_Italic } from '@expo-google-fonts/trirong/100Thin_Italic';
import { Trirong_200ExtraLight } from '@expo-google-fonts/trirong/200ExtraLight';
import { Trirong_200ExtraLight_Italic } from '@expo-google-fonts/trirong/200ExtraLight_Italic';
import { Trirong_300Light } from '@expo-google-fonts/trirong/300Light';
import { Trirong_300Light_Italic } from '@expo-google-fonts/trirong/300Light_Italic';
import { Trirong_400Regular } from '@expo-google-fonts/trirong/400Regular';
import { Trirong_400Regular_Italic } from '@expo-google-fonts/trirong/400Regular_Italic';
import { Trirong_500Medium } from '@expo-google-fonts/trirong/500Medium';
import { Trirong_500Medium_Italic } from '@expo-google-fonts/trirong/500Medium_Italic';
import { Trirong_600SemiBold } from '@expo-google-fonts/trirong/600SemiBold';
import { Trirong_600SemiBold_Italic } from '@expo-google-fonts/trirong/600SemiBold_Italic';
import { Trirong_700Bold } from '@expo-google-fonts/trirong/700Bold';
import { Trirong_700Bold_Italic } from '@expo-google-fonts/trirong/700Bold_Italic';
import { Trirong_800ExtraBold } from '@expo-google-fonts/trirong/800ExtraBold';
import { Trirong_800ExtraBold_Italic } from '@expo-google-fonts/trirong/800ExtraBold_Italic';
import { Trirong_900Black } from '@expo-google-fonts/trirong/900Black';
import { Trirong_900Black_Italic } from '@expo-google-fonts/trirong/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Trirong_100Thin, 
    Trirong_100Thin_Italic, 
    Trirong_200ExtraLight, 
    Trirong_200ExtraLight_Italic, 
    Trirong_300Light, 
    Trirong_300Light_Italic, 
    Trirong_400Regular, 
    Trirong_400Regular_Italic, 
    Trirong_500Medium, 
    Trirong_500Medium_Italic, 
    Trirong_600SemiBold, 
    Trirong_600SemiBold_Italic, 
    Trirong_700Bold, 
    Trirong_700Bold_Italic, 
    Trirong_800ExtraBold, 
    Trirong_800ExtraBold_Italic, 
    Trirong_900Black, 
    Trirong_900Black_Italic
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
          fontFamily: "Trirong_100Thin"
        }}>
          Trirong Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_100Thin_Italic"
        }}>
          Trirong Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_200ExtraLight"
        }}>
          Trirong Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_200ExtraLight_Italic"
        }}>
          Trirong Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_300Light"
        }}>
          Trirong Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_300Light_Italic"
        }}>
          Trirong Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_400Regular"
        }}>
          Trirong Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_400Regular_Italic"
        }}>
          Trirong Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_500Medium"
        }}>
          Trirong Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_500Medium_Italic"
        }}>
          Trirong Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_600SemiBold"
        }}>
          Trirong Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_600SemiBold_Italic"
        }}>
          Trirong Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_700Bold"
        }}>
          Trirong Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_700Bold_Italic"
        }}>
          Trirong Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_800ExtraBold"
        }}>
          Trirong Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_800ExtraBold_Italic"
        }}>
          Trirong Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_900Black"
        }}>
          Trirong Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Trirong_900Black_Italic"
        }}>
          Trirong Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Trirong_100Thin](./100Thin/Trirong_100Thin.ttf.png)|![Trirong_100Thin_Italic](./100Thin_Italic/Trirong_100Thin_Italic.ttf.png)|![Trirong_200ExtraLight](./200ExtraLight/Trirong_200ExtraLight.ttf.png)||
|![Trirong_200ExtraLight_Italic](./200ExtraLight_Italic/Trirong_200ExtraLight_Italic.ttf.png)|![Trirong_300Light](./300Light/Trirong_300Light.ttf.png)|![Trirong_300Light_Italic](./300Light_Italic/Trirong_300Light_Italic.ttf.png)||
|![Trirong_400Regular](./400Regular/Trirong_400Regular.ttf.png)|![Trirong_400Regular_Italic](./400Regular_Italic/Trirong_400Regular_Italic.ttf.png)|![Trirong_500Medium](./500Medium/Trirong_500Medium.ttf.png)||
|![Trirong_500Medium_Italic](./500Medium_Italic/Trirong_500Medium_Italic.ttf.png)|![Trirong_600SemiBold](./600SemiBold/Trirong_600SemiBold.ttf.png)|![Trirong_600SemiBold_Italic](./600SemiBold_Italic/Trirong_600SemiBold_Italic.ttf.png)||
|![Trirong_700Bold](./700Bold/Trirong_700Bold.ttf.png)|![Trirong_700Bold_Italic](./700Bold_Italic/Trirong_700Bold_Italic.ttf.png)|![Trirong_800ExtraBold](./800ExtraBold/Trirong_800ExtraBold.ttf.png)||
|![Trirong_800ExtraBold_Italic](./800ExtraBold_Italic/Trirong_800ExtraBold_Italic.ttf.png)|![Trirong_900Black](./900Black/Trirong_900Black.ttf.png)|![Trirong_900Black_Italic](./900Black_Italic/Trirong_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/trirong` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Trirong page on Google Fonts](https://fonts.google.com/specimen/Trirong) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Trirong on Google Fonts](https://fonts.google.com/specimen/Trirong)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/trirong)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/trirong)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
