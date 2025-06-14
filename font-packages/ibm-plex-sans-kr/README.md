# @expo-google-fonts/ibm-plex-sans-kr

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/ibm-plex-sans-kr)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/ibm-plex-sans-kr)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/ibm-plex-sans-kr)

This package lets you use the [**IBM Plex Sans KR**](https://fonts.google.com/specimen/IBM+Plex+Sans+KR) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## IBM Plex Sans KR

![IBM Plex Sans KR](./font-family.png)

This font family contains [7 styles](#-gallery).

- `IBMPlexSansKR_100Thin`
- `IBMPlexSansKR_200ExtraLight`
- `IBMPlexSansKR_300Light`
- `IBMPlexSansKR_400Regular`
- `IBMPlexSansKR_500Medium`
- `IBMPlexSansKR_600SemiBold`
- `IBMPlexSansKR_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/ibm-plex-sans-kr expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/ibm-plex-sans-kr/useFonts';
import { IBMPlexSansKR_100Thin } from '@expo-google-fonts/ibm-plex-sans-kr/100Thin';
import { IBMPlexSansKR_200ExtraLight } from '@expo-google-fonts/ibm-plex-sans-kr/200ExtraLight';
import { IBMPlexSansKR_300Light } from '@expo-google-fonts/ibm-plex-sans-kr/300Light';
import { IBMPlexSansKR_400Regular } from '@expo-google-fonts/ibm-plex-sans-kr/400Regular';
import { IBMPlexSansKR_500Medium } from '@expo-google-fonts/ibm-plex-sans-kr/500Medium';
import { IBMPlexSansKR_600SemiBold } from '@expo-google-fonts/ibm-plex-sans-kr/600SemiBold';
import { IBMPlexSansKR_700Bold } from '@expo-google-fonts/ibm-plex-sans-kr/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    IBMPlexSansKR_100Thin, 
    IBMPlexSansKR_200ExtraLight, 
    IBMPlexSansKR_300Light, 
    IBMPlexSansKR_400Regular, 
    IBMPlexSansKR_500Medium, 
    IBMPlexSansKR_600SemiBold, 
    IBMPlexSansKR_700Bold
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
          fontFamily: "IBMPlexSansKR_100Thin"
        }}>
          IBM Plex Sans KR Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansKR_200ExtraLight"
        }}>
          IBM Plex Sans KR Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansKR_300Light"
        }}>
          IBM Plex Sans KR Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansKR_400Regular"
        }}>
          IBM Plex Sans KR Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansKR_500Medium"
        }}>
          IBM Plex Sans KR Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansKR_600SemiBold"
        }}>
          IBM Plex Sans KR Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "IBMPlexSansKR_700Bold"
        }}>
          IBM Plex Sans KR Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![IBMPlexSansKR_100Thin](./100Thin/IBMPlexSansKR_100Thin.ttf.png)|![IBMPlexSansKR_200ExtraLight](./200ExtraLight/IBMPlexSansKR_200ExtraLight.ttf.png)|![IBMPlexSansKR_300Light](./300Light/IBMPlexSansKR_300Light.ttf.png)||
|![IBMPlexSansKR_400Regular](./400Regular/IBMPlexSansKR_400Regular.ttf.png)|![IBMPlexSansKR_500Medium](./500Medium/IBMPlexSansKR_500Medium.ttf.png)|![IBMPlexSansKR_600SemiBold](./600SemiBold/IBMPlexSansKR_600SemiBold.ttf.png)||
|![IBMPlexSansKR_700Bold](./700Bold/IBMPlexSansKR_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/ibm-plex-sans-kr` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [IBM Plex Sans KR page on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+KR) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [IBM Plex Sans KR on Google Fonts](https://fonts.google.com/specimen/IBM+Plex+Sans+KR)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/ibm-plex-sans-kr)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/ibm-plex-sans-kr)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
