# @expo-google-fonts/ibm-plex-sans-hebrew

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans-hebrew)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans-hebrew)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans-hebrew)

This package lets you use the [**IBM Plex Sans Hebrew**](https://fonts.google.com/specimen/IBM+Plex+Sans+Hebrew) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Sans Hebrew

![IBM Plex Sans Hebrew](./font-family.png)

This font family contains [7 styles](#-gallery).

- `IBMPlexSansHebrew_100Thin`
- `IBMPlexSansHebrew_200ExtraLight`
- `IBMPlexSansHebrew_300Light`
- `IBMPlexSansHebrew_400Regular`
- `IBMPlexSansHebrew_500Medium`
- `IBMPlexSansHebrew_600SemiBold`
- `IBMPlexSansHebrew_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ibm-plex-sans-hebrew expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/ibm-plex-sans-hebrew/useFonts';
import { IBMPlexSansHebrew_100Thin } from '@expo-google-fonts/ibm-plex-sans-hebrew/100Thin';
import { IBMPlexSansHebrew_200ExtraLight } from '@expo-google-fonts/ibm-plex-sans-hebrew/200ExtraLight';
import { IBMPlexSansHebrew_300Light } from '@expo-google-fonts/ibm-plex-sans-hebrew/300Light';
import { IBMPlexSansHebrew_400Regular } from '@expo-google-fonts/ibm-plex-sans-hebrew/400Regular';
import { IBMPlexSansHebrew_500Medium } from '@expo-google-fonts/ibm-plex-sans-hebrew/500Medium';
import { IBMPlexSansHebrew_600SemiBold } from '@expo-google-fonts/ibm-plex-sans-hebrew/600SemiBold';
import { IBMPlexSansHebrew_700Bold } from '@expo-google-fonts/ibm-plex-sans-hebrew/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    IBMPlexSansHebrew_100Thin, 
    IBMPlexSansHebrew_200ExtraLight, 
    IBMPlexSansHebrew_300Light, 
    IBMPlexSansHebrew_400Regular, 
    IBMPlexSansHebrew_500Medium, 
    IBMPlexSansHebrew_600SemiBold, 
    IBMPlexSansHebrew_700Bold
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
          fontFamily: "IBMPlexSansHebrew_100Thin"
        }}>
          IBM Plex Sans Hebrew Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansHebrew_200ExtraLight"
        }}>
          IBM Plex Sans Hebrew Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansHebrew_300Light"
        }}>
          IBM Plex Sans Hebrew Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansHebrew_400Regular"
        }}>
          IBM Plex Sans Hebrew Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansHebrew_500Medium"
        }}>
          IBM Plex Sans Hebrew Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansHebrew_600SemiBold"
        }}>
          IBM Plex Sans Hebrew Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansHebrew_700Bold"
        }}>
          IBM Plex Sans Hebrew Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![IBMPlexSansHebrew_100Thin](./100Thin/IBMPlexSansHebrew_100Thin.ttf.png)|![IBMPlexSansHebrew_200ExtraLight](./200ExtraLight/IBMPlexSansHebrew_200ExtraLight.ttf.png)|![IBMPlexSansHebrew_300Light](./300Light/IBMPlexSansHebrew_300Light.ttf.png)||
|![IBMPlexSansHebrew_400Regular](./400Regular/IBMPlexSansHebrew_400Regular.ttf.png)|![IBMPlexSansHebrew_500Medium](./500Medium/IBMPlexSansHebrew_500Medium.ttf.png)|![IBMPlexSansHebrew_600SemiBold](./600SemiBold/IBMPlexSansHebrew_600SemiBold.ttf.png)||
|![IBMPlexSansHebrew_700Bold](./700Bold/IBMPlexSansHebrew_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ibm-plex-sans-hebrew` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Sans Hebrew page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Hebrew) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Sans Hebrew on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+Hebrew)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-sans-hebrew)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans-hebrew)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
