# @expo-google-fonts/brygada-1918

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/brygada-1918)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/brygada-1918)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/brygada-1918)

This package lets you use the [**Brygada 1918**](https://fonts.google.com/specimen/Brygada+1918) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Brygada 1918

![Brygada 1918](./font-family.png)

This font family contains [8 styles](#-gallery).

- `Brygada1918_400Regular`
- `Brygada1918_500Medium`
- `Brygada1918_600SemiBold`
- `Brygada1918_700Bold`
- `Brygada1918_400Regular_Italic`
- `Brygada1918_500Medium_Italic`
- `Brygada1918_600SemiBold_Italic`
- `Brygada1918_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/brygada-1918 expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/brygada-1918/useFonts';
import { Brygada1918_400Regular } from '@expo-google-fonts/brygada-1918/400Regular';
import { Brygada1918_500Medium } from '@expo-google-fonts/brygada-1918/500Medium';
import { Brygada1918_600SemiBold } from '@expo-google-fonts/brygada-1918/600SemiBold';
import { Brygada1918_700Bold } from '@expo-google-fonts/brygada-1918/700Bold';
import { Brygada1918_400Regular_Italic } from '@expo-google-fonts/brygada-1918/400Regular_Italic';
import { Brygada1918_500Medium_Italic } from '@expo-google-fonts/brygada-1918/500Medium_Italic';
import { Brygada1918_600SemiBold_Italic } from '@expo-google-fonts/brygada-1918/600SemiBold_Italic';
import { Brygada1918_700Bold_Italic } from '@expo-google-fonts/brygada-1918/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Brygada1918_400Regular, 
    Brygada1918_500Medium, 
    Brygada1918_600SemiBold, 
    Brygada1918_700Bold, 
    Brygada1918_400Regular_Italic, 
    Brygada1918_500Medium_Italic, 
    Brygada1918_600SemiBold_Italic, 
    Brygada1918_700Bold_Italic
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
          fontFamily: "Brygada1918_400Regular"
        }}>
          Brygada 1918 Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Brygada1918_500Medium"
        }}>
          Brygada 1918 Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Brygada1918_600SemiBold"
        }}>
          Brygada 1918 Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Brygada1918_700Bold"
        }}>
          Brygada 1918 Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Brygada1918_400Regular_Italic"
        }}>
          Brygada 1918 Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Brygada1918_500Medium_Italic"
        }}>
          Brygada 1918 Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Brygada1918_600SemiBold_Italic"
        }}>
          Brygada 1918 Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Brygada1918_700Bold_Italic"
        }}>
          Brygada 1918 Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Brygada1918_400Regular](./400Regular/Brygada1918_400Regular.ttf.png)|![Brygada1918_500Medium](./500Medium/Brygada1918_500Medium.ttf.png)|![Brygada1918_600SemiBold](./600SemiBold/Brygada1918_600SemiBold.ttf.png)||
|![Brygada1918_700Bold](./700Bold/Brygada1918_700Bold.ttf.png)|![Brygada1918_400Regular_Italic](./400Regular_Italic/Brygada1918_400Regular_Italic.ttf.png)|![Brygada1918_500Medium_Italic](./500Medium_Italic/Brygada1918_500Medium_Italic.ttf.png)||
|![Brygada1918_600SemiBold_Italic](./600SemiBold_Italic/Brygada1918_600SemiBold_Italic.ttf.png)|![Brygada1918_700Bold_Italic](./700Bold_Italic/Brygada1918_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/brygada-1918` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Brygada 1918 page on Google Fonts](https://fonts.google.com/specimen/Brygada+1918) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Brygada 1918 on Google Fonts](https://fonts.google.com/specimen/Brygada+1918)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/brygada-1918)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/brygada-1918)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
