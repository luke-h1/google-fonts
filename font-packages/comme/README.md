# @expo-google-fonts/comme

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/comme)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/comme)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/comme)

This package lets you use the [**Comme**](https://fonts.google.com/specimen/Comme) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Comme

![Comme](./font-family.png)

This font family contains [9 styles](#-gallery).

- `Comme_100Thin`
- `Comme_200ExtraLight`
- `Comme_300Light`
- `Comme_400Regular`
- `Comme_500Medium`
- `Comme_600SemiBold`
- `Comme_700Bold`
- `Comme_800ExtraBold`
- `Comme_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/comme expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/comme/useFonts';
import { Comme_100Thin } from '@expo-google-fonts/comme/100Thin';
import { Comme_200ExtraLight } from '@expo-google-fonts/comme/200ExtraLight';
import { Comme_300Light } from '@expo-google-fonts/comme/300Light';
import { Comme_400Regular } from '@expo-google-fonts/comme/400Regular';
import { Comme_500Medium } from '@expo-google-fonts/comme/500Medium';
import { Comme_600SemiBold } from '@expo-google-fonts/comme/600SemiBold';
import { Comme_700Bold } from '@expo-google-fonts/comme/700Bold';
import { Comme_800ExtraBold } from '@expo-google-fonts/comme/800ExtraBold';
import { Comme_900Black } from '@expo-google-fonts/comme/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Comme_100Thin, 
    Comme_200ExtraLight, 
    Comme_300Light, 
    Comme_400Regular, 
    Comme_500Medium, 
    Comme_600SemiBold, 
    Comme_700Bold, 
    Comme_800ExtraBold, 
    Comme_900Black
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
          fontFamily: "Comme_100Thin"
        }}>
          Comme Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Comme_200ExtraLight"
        }}>
          Comme Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Comme_300Light"
        }}>
          Comme Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Comme_400Regular"
        }}>
          Comme Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Comme_500Medium"
        }}>
          Comme Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Comme_600SemiBold"
        }}>
          Comme Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Comme_700Bold"
        }}>
          Comme Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Comme_800ExtraBold"
        }}>
          Comme Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Comme_900Black"
        }}>
          Comme Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Comme_100Thin](./100Thin/Comme_100Thin.ttf.png)|![Comme_200ExtraLight](./200ExtraLight/Comme_200ExtraLight.ttf.png)|![Comme_300Light](./300Light/Comme_300Light.ttf.png)||
|![Comme_400Regular](./400Regular/Comme_400Regular.ttf.png)|![Comme_500Medium](./500Medium/Comme_500Medium.ttf.png)|![Comme_600SemiBold](./600SemiBold/Comme_600SemiBold.ttf.png)||
|![Comme_700Bold](./700Bold/Comme_700Bold.ttf.png)|![Comme_800ExtraBold](./800ExtraBold/Comme_800ExtraBold.ttf.png)|![Comme_900Black](./900Black/Comme_900Black.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/comme` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Comme page on Google Fonts](https://fonts.google.com/specimen/Comme) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Comme on Google Fonts](https://fonts.google.com/specimen/Comme)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/comme)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/comme)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
