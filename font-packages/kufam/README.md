# @expo-google-fonts/kufam

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/kufam)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/kufam)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/kufam)

This package lets you use the [**Kufam**](https://fonts.google.com/specimen/Kufam) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Kufam

![Kufam](./font-family.png)

This font family contains [12 styles](#-gallery).

- `Kufam_400Regular`
- `Kufam_500Medium`
- `Kufam_600SemiBold`
- `Kufam_700Bold`
- `Kufam_800ExtraBold`
- `Kufam_900Black`
- `Kufam_400Regular_Italic`
- `Kufam_500Medium_Italic`
- `Kufam_600SemiBold_Italic`
- `Kufam_700Bold_Italic`
- `Kufam_800ExtraBold_Italic`
- `Kufam_900Black_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/kufam expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/kufam/useFonts';
import { Kufam_400Regular } from '@expo-google-fonts/kufam/400Regular';
import { Kufam_500Medium } from '@expo-google-fonts/kufam/500Medium';
import { Kufam_600SemiBold } from '@expo-google-fonts/kufam/600SemiBold';
import { Kufam_700Bold } from '@expo-google-fonts/kufam/700Bold';
import { Kufam_800ExtraBold } from '@expo-google-fonts/kufam/800ExtraBold';
import { Kufam_900Black } from '@expo-google-fonts/kufam/900Black';
import { Kufam_400Regular_Italic } from '@expo-google-fonts/kufam/400Regular_Italic';
import { Kufam_500Medium_Italic } from '@expo-google-fonts/kufam/500Medium_Italic';
import { Kufam_600SemiBold_Italic } from '@expo-google-fonts/kufam/600SemiBold_Italic';
import { Kufam_700Bold_Italic } from '@expo-google-fonts/kufam/700Bold_Italic';
import { Kufam_800ExtraBold_Italic } from '@expo-google-fonts/kufam/800ExtraBold_Italic';
import { Kufam_900Black_Italic } from '@expo-google-fonts/kufam/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Kufam_400Regular, 
    Kufam_500Medium, 
    Kufam_600SemiBold, 
    Kufam_700Bold, 
    Kufam_800ExtraBold, 
    Kufam_900Black, 
    Kufam_400Regular_Italic, 
    Kufam_500Medium_Italic, 
    Kufam_600SemiBold_Italic, 
    Kufam_700Bold_Italic, 
    Kufam_800ExtraBold_Italic, 
    Kufam_900Black_Italic
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
          fontFamily: "Kufam_400Regular"
        }}>
          Kufam Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kufam_500Medium"
        }}>
          Kufam Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kufam_600SemiBold"
        }}>
          Kufam Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kufam_700Bold"
        }}>
          Kufam Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kufam_800ExtraBold"
        }}>
          Kufam Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kufam_900Black"
        }}>
          Kufam Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kufam_400Regular_Italic"
        }}>
          Kufam Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kufam_500Medium_Italic"
        }}>
          Kufam Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kufam_600SemiBold_Italic"
        }}>
          Kufam Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kufam_700Bold_Italic"
        }}>
          Kufam Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kufam_800ExtraBold_Italic"
        }}>
          Kufam Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Kufam_900Black_Italic"
        }}>
          Kufam Black Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Kufam_400Regular](./400Regular/Kufam_400Regular.ttf.png)|![Kufam_500Medium](./500Medium/Kufam_500Medium.ttf.png)|![Kufam_600SemiBold](./600SemiBold/Kufam_600SemiBold.ttf.png)||
|![Kufam_700Bold](./700Bold/Kufam_700Bold.ttf.png)|![Kufam_800ExtraBold](./800ExtraBold/Kufam_800ExtraBold.ttf.png)|![Kufam_900Black](./900Black/Kufam_900Black.ttf.png)||
|![Kufam_400Regular_Italic](./400Regular_Italic/Kufam_400Regular_Italic.ttf.png)|![Kufam_500Medium_Italic](./500Medium_Italic/Kufam_500Medium_Italic.ttf.png)|![Kufam_600SemiBold_Italic](./600SemiBold_Italic/Kufam_600SemiBold_Italic.ttf.png)||
|![Kufam_700Bold_Italic](./700Bold_Italic/Kufam_700Bold_Italic.ttf.png)|![Kufam_800ExtraBold_Italic](./800ExtraBold_Italic/Kufam_800ExtraBold_Italic.ttf.png)|![Kufam_900Black_Italic](./900Black_Italic/Kufam_900Black_Italic.ttf.png)||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/kufam` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Kufam page on Google Fonts](https://fonts.google.com/specimen/Kufam) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Kufam on Google Fonts](https://fonts.google.com/specimen/Kufam)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/kufam)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/kufam)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
