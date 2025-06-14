# @expo-google-fonts/ibm-plex-sans

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans)

This package lets you use the [**IBM Plex Sans**](https://fonts.google.com/specimen/IBM+Plex+Sans) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Sans

![IBM Plex Sans](./font-family.png)

This font family contains [14 styles](#-gallery).

- `IBMPlexSans_100Thin`
- `IBMPlexSans_200ExtraLight`
- `IBMPlexSans_300Light`
- `IBMPlexSans_400Regular`
- `IBMPlexSans_500Medium`
- `IBMPlexSans_600SemiBold`
- `IBMPlexSans_700Bold`
- `IBMPlexSans_100Thin_Italic`
- `IBMPlexSans_200ExtraLight_Italic`
- `IBMPlexSans_300Light_Italic`
- `IBMPlexSans_400Regular_Italic`
- `IBMPlexSans_500Medium_Italic`
- `IBMPlexSans_600SemiBold_Italic`
- `IBMPlexSans_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ibm-plex-sans expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/ibm-plex-sans/useFonts';
import { IBMPlexSans_100Thin } from '@expo-google-fonts/ibm-plex-sans/100Thin';
import { IBMPlexSans_200ExtraLight } from '@expo-google-fonts/ibm-plex-sans/200ExtraLight';
import { IBMPlexSans_300Light } from '@expo-google-fonts/ibm-plex-sans/300Light';
import { IBMPlexSans_400Regular } from '@expo-google-fonts/ibm-plex-sans/400Regular';
import { IBMPlexSans_500Medium } from '@expo-google-fonts/ibm-plex-sans/500Medium';
import { IBMPlexSans_600SemiBold } from '@expo-google-fonts/ibm-plex-sans/600SemiBold';
import { IBMPlexSans_700Bold } from '@expo-google-fonts/ibm-plex-sans/700Bold';
import { IBMPlexSans_100Thin_Italic } from '@expo-google-fonts/ibm-plex-sans/100Thin_Italic';
import { IBMPlexSans_200ExtraLight_Italic } from '@expo-google-fonts/ibm-plex-sans/200ExtraLight_Italic';
import { IBMPlexSans_300Light_Italic } from '@expo-google-fonts/ibm-plex-sans/300Light_Italic';
import { IBMPlexSans_400Regular_Italic } from '@expo-google-fonts/ibm-plex-sans/400Regular_Italic';
import { IBMPlexSans_500Medium_Italic } from '@expo-google-fonts/ibm-plex-sans/500Medium_Italic';
import { IBMPlexSans_600SemiBold_Italic } from '@expo-google-fonts/ibm-plex-sans/600SemiBold_Italic';
import { IBMPlexSans_700Bold_Italic } from '@expo-google-fonts/ibm-plex-sans/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    IBMPlexSans_100Thin, 
    IBMPlexSans_200ExtraLight, 
    IBMPlexSans_300Light, 
    IBMPlexSans_400Regular, 
    IBMPlexSans_500Medium, 
    IBMPlexSans_600SemiBold, 
    IBMPlexSans_700Bold, 
    IBMPlexSans_100Thin_Italic, 
    IBMPlexSans_200ExtraLight_Italic, 
    IBMPlexSans_300Light_Italic, 
    IBMPlexSans_400Regular_Italic, 
    IBMPlexSans_500Medium_Italic, 
    IBMPlexSans_600SemiBold_Italic, 
    IBMPlexSans_700Bold_Italic
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
          fontFamily: "IBMPlexSans_100Thin"
        }}>
          IBM Plex Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_200ExtraLight"
        }}>
          IBM Plex Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_300Light"
        }}>
          IBM Plex Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_400Regular"
        }}>
          IBM Plex Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_500Medium"
        }}>
          IBM Plex Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_600SemiBold"
        }}>
          IBM Plex Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_700Bold"
        }}>
          IBM Plex Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_100Thin_Italic"
        }}>
          IBM Plex Sans Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_200ExtraLight_Italic"
        }}>
          IBM Plex Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_300Light_Italic"
        }}>
          IBM Plex Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_400Regular_Italic"
        }}>
          IBM Plex Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_500Medium_Italic"
        }}>
          IBM Plex Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_600SemiBold_Italic"
        }}>
          IBM Plex Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSans_700Bold_Italic"
        }}>
          IBM Plex Sans Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![IBMPlexSans_100Thin](./100Thin/IBMPlexSans_100Thin.ttf.png)|![IBMPlexSans_200ExtraLight](./200ExtraLight/IBMPlexSans_200ExtraLight.ttf.png)|![IBMPlexSans_300Light](./300Light/IBMPlexSans_300Light.ttf.png)||
|![IBMPlexSans_400Regular](./400Regular/IBMPlexSans_400Regular.ttf.png)|![IBMPlexSans_500Medium](./500Medium/IBMPlexSans_500Medium.ttf.png)|![IBMPlexSans_600SemiBold](./600SemiBold/IBMPlexSans_600SemiBold.ttf.png)||
|![IBMPlexSans_700Bold](./700Bold/IBMPlexSans_700Bold.ttf.png)|![IBMPlexSans_100Thin_Italic](./100Thin_Italic/IBMPlexSans_100Thin_Italic.ttf.png)|![IBMPlexSans_200ExtraLight_Italic](./200ExtraLight_Italic/IBMPlexSans_200ExtraLight_Italic.ttf.png)||
|![IBMPlexSans_300Light_Italic](./300Light_Italic/IBMPlexSans_300Light_Italic.ttf.png)|![IBMPlexSans_400Regular_Italic](./400Regular_Italic/IBMPlexSans_400Regular_Italic.ttf.png)|![IBMPlexSans_500Medium_Italic](./500Medium_Italic/IBMPlexSans_500Medium_Italic.ttf.png)||
|![IBMPlexSans_600SemiBold_Italic](./600SemiBold_Italic/IBMPlexSans_600SemiBold_Italic.ttf.png)|![IBMPlexSans_700Bold_Italic](./700Bold_Italic/IBMPlexSans_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ibm-plex-sans` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Sans page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Sans on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-sans)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
