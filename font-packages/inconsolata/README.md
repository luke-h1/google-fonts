# @expo-google-fonts/inconsolata

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/inconsolata)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/inconsolata)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/inconsolata)

This package lets you use the [**Inconsolata**](https://fonts.google.com/specimen/Inconsolata) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Inconsolata

![Inconsolata](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Inconsolata_200ExtraLight`
- `Inconsolata_300Light`
- `Inconsolata_400Regular`
- `Inconsolata_500Medium`
- `Inconsolata_600SemiBold`
- `Inconsolata_700Bold`
- `Inconsolata_800ExtraBold`
- `Inconsolata_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/inconsolata expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/inconsolata/useFonts';
import { Inconsolata_200ExtraLight } from '@expo-google-fonts/inconsolata/200ExtraLight';
import { Inconsolata_300Light } from '@expo-google-fonts/inconsolata/300Light';
import { Inconsolata_400Regular } from '@expo-google-fonts/inconsolata/400Regular';
import { Inconsolata_500Medium } from '@expo-google-fonts/inconsolata/500Medium';
import { Inconsolata_600SemiBold } from '@expo-google-fonts/inconsolata/600SemiBold';
import { Inconsolata_700Bold } from '@expo-google-fonts/inconsolata/700Bold';
import { Inconsolata_800ExtraBold } from '@expo-google-fonts/inconsolata/800ExtraBold';
import { Inconsolata_900Black } from '@expo-google-fonts/inconsolata/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    Inconsolata_200ExtraLight, 
    Inconsolata_300Light, 
    Inconsolata_400Regular, 
    Inconsolata_500Medium, 
    Inconsolata_600SemiBold, 
    Inconsolata_700Bold, 
    Inconsolata_800ExtraBold, 
    Inconsolata_900Black
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
          fontFamily: "Inconsolata_200ExtraLight"
        }}>
          Inconsolata Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inconsolata_300Light"
        }}>
          Inconsolata Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inconsolata_400Regular"
        }}>
          Inconsolata Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inconsolata_500Medium"
        }}>
          Inconsolata Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inconsolata_600SemiBold"
        }}>
          Inconsolata Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inconsolata_700Bold"
        }}>
          Inconsolata Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inconsolata_800ExtraBold"
        }}>
          Inconsolata Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Inconsolata_900Black"
        }}>
          Inconsolata Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Inconsolata_200ExtraLight](./200ExtraLight/Inconsolata_200ExtraLight.ttf.png)|![Inconsolata_300Light](./300Light/Inconsolata_300Light.ttf.png)|![Inconsolata_400Regular](./400Regular/Inconsolata_400Regular.ttf.png)||
|![Inconsolata_500Medium](./500Medium/Inconsolata_500Medium.ttf.png)|![Inconsolata_600SemiBold](./600SemiBold/Inconsolata_600SemiBold.ttf.png)|![Inconsolata_700Bold](./700Bold/Inconsolata_700Bold.ttf.png)||
|![Inconsolata_800ExtraBold](./800ExtraBold/Inconsolata_800ExtraBold.ttf.png)|![Inconsolata_900Black](./900Black/Inconsolata_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/inconsolata` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Inconsolata page on Google Fonts](https://fonts.google.com/specimen/Inconsolata) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Inconsolata on Google Fonts](https://fonts.google.com/specimen/Inconsolata)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/inconsolata)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/inconsolata)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
