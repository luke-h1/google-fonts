# @expo-google-fonts/sofia-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/sofia-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/sofia-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/sofia-sans)

This package lets you use the [**Sofia Sans**](https://fonts.google.com/specimen/Sofia+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Sofia Sans

![Sofia Sans](./font-family.png)

This font family contains [18 styles](#-gallery).

- `SofiaSans_100Thin`
- `SofiaSans_200ExtraLight`
- `SofiaSans_300Light`
- `SofiaSans_400Regular`
- `SofiaSans_500Medium`
- `SofiaSans_600SemiBold`
- `SofiaSans_700Bold`
- `SofiaSans_800ExtraBold`
- `SofiaSans_900Black`
- `SofiaSans_100Thin_Italic`
- `SofiaSans_200ExtraLight_Italic`
- `SofiaSans_300Light_Italic`
- `SofiaSans_400Regular_Italic`
- `SofiaSans_500Medium_Italic`
- `SofiaSans_600SemiBold_Italic`
- `SofiaSans_700Bold_Italic`
- `SofiaSans_800ExtraBold_Italic`
- `SofiaSans_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/sofia-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/sofia-sans/useFonts';
import { SofiaSans_100Thin } from '@expo-google-fonts/sofia-sans/100Thin';
import { SofiaSans_200ExtraLight } from '@expo-google-fonts/sofia-sans/200ExtraLight';
import { SofiaSans_300Light } from '@expo-google-fonts/sofia-sans/300Light';
import { SofiaSans_400Regular } from '@expo-google-fonts/sofia-sans/400Regular';
import { SofiaSans_500Medium } from '@expo-google-fonts/sofia-sans/500Medium';
import { SofiaSans_600SemiBold } from '@expo-google-fonts/sofia-sans/600SemiBold';
import { SofiaSans_700Bold } from '@expo-google-fonts/sofia-sans/700Bold';
import { SofiaSans_800ExtraBold } from '@expo-google-fonts/sofia-sans/800ExtraBold';
import { SofiaSans_900Black } from '@expo-google-fonts/sofia-sans/900Black';
import { SofiaSans_100Thin_Italic } from '@expo-google-fonts/sofia-sans/100Thin_Italic';
import { SofiaSans_200ExtraLight_Italic } from '@expo-google-fonts/sofia-sans/200ExtraLight_Italic';
import { SofiaSans_300Light_Italic } from '@expo-google-fonts/sofia-sans/300Light_Italic';
import { SofiaSans_400Regular_Italic } from '@expo-google-fonts/sofia-sans/400Regular_Italic';
import { SofiaSans_500Medium_Italic } from '@expo-google-fonts/sofia-sans/500Medium_Italic';
import { SofiaSans_600SemiBold_Italic } from '@expo-google-fonts/sofia-sans/600SemiBold_Italic';
import { SofiaSans_700Bold_Italic } from '@expo-google-fonts/sofia-sans/700Bold_Italic';
import { SofiaSans_800ExtraBold_Italic } from '@expo-google-fonts/sofia-sans/800ExtraBold_Italic';
import { SofiaSans_900Black_Italic } from '@expo-google-fonts/sofia-sans/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    SofiaSans_100Thin, 
    SofiaSans_200ExtraLight, 
    SofiaSans_300Light, 
    SofiaSans_400Regular, 
    SofiaSans_500Medium, 
    SofiaSans_600SemiBold, 
    SofiaSans_700Bold, 
    SofiaSans_800ExtraBold, 
    SofiaSans_900Black, 
    SofiaSans_100Thin_Italic, 
    SofiaSans_200ExtraLight_Italic, 
    SofiaSans_300Light_Italic, 
    SofiaSans_400Regular_Italic, 
    SofiaSans_500Medium_Italic, 
    SofiaSans_600SemiBold_Italic, 
    SofiaSans_700Bold_Italic, 
    SofiaSans_800ExtraBold_Italic, 
    SofiaSans_900Black_Italic
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
          fontFamily: "SofiaSans_100Thin"
        }}>
          Sofia Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_200ExtraLight"
        }}>
          Sofia Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_300Light"
        }}>
          Sofia Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_400Regular"
        }}>
          Sofia Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_500Medium"
        }}>
          Sofia Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_600SemiBold"
        }}>
          Sofia Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_700Bold"
        }}>
          Sofia Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_800ExtraBold"
        }}>
          Sofia Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_900Black"
        }}>
          Sofia Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_100Thin_Italic"
        }}>
          Sofia Sans Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_200ExtraLight_Italic"
        }}>
          Sofia Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_300Light_Italic"
        }}>
          Sofia Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_400Regular_Italic"
        }}>
          Sofia Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_500Medium_Italic"
        }}>
          Sofia Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_600SemiBold_Italic"
        }}>
          Sofia Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_700Bold_Italic"
        }}>
          Sofia Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_800ExtraBold_Italic"
        }}>
          Sofia Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "SofiaSans_900Black_Italic"
        }}>
          Sofia Sans Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![SofiaSans_100Thin](./100Thin/SofiaSans_100Thin.ttf.png)|![SofiaSans_200ExtraLight](./200ExtraLight/SofiaSans_200ExtraLight.ttf.png)|![SofiaSans_300Light](./300Light/SofiaSans_300Light.ttf.png)||
|![SofiaSans_400Regular](./400Regular/SofiaSans_400Regular.ttf.png)|![SofiaSans_500Medium](./500Medium/SofiaSans_500Medium.ttf.png)|![SofiaSans_600SemiBold](./600SemiBold/SofiaSans_600SemiBold.ttf.png)||
|![SofiaSans_700Bold](./700Bold/SofiaSans_700Bold.ttf.png)|![SofiaSans_800ExtraBold](./800ExtraBold/SofiaSans_800ExtraBold.ttf.png)|![SofiaSans_900Black](./900Black/SofiaSans_900Black.ttf.png)||
|![SofiaSans_100Thin_Italic](./100Thin_Italic/SofiaSans_100Thin_Italic.ttf.png)|![SofiaSans_200ExtraLight_Italic](./200ExtraLight_Italic/SofiaSans_200ExtraLight_Italic.ttf.png)|![SofiaSans_300Light_Italic](./300Light_Italic/SofiaSans_300Light_Italic.ttf.png)||
|![SofiaSans_400Regular_Italic](./400Regular_Italic/SofiaSans_400Regular_Italic.ttf.png)|![SofiaSans_500Medium_Italic](./500Medium_Italic/SofiaSans_500Medium_Italic.ttf.png)|![SofiaSans_600SemiBold_Italic](./600SemiBold_Italic/SofiaSans_600SemiBold_Italic.ttf.png)||
|![SofiaSans_700Bold_Italic](./700Bold_Italic/SofiaSans_700Bold_Italic.ttf.png)|![SofiaSans_800ExtraBold_Italic](./800ExtraBold_Italic/SofiaSans_800ExtraBold_Italic.ttf.png)|![SofiaSans_900Black_Italic](./900Black_Italic/SofiaSans_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/sofia-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Sofia Sans page on Google Fonts](https://fonts.google.com/specimen/Sofia+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Sofia Sans on Google Fonts](https://fonts.google.com/specimen/Sofia+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/sofia-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/sofia-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
