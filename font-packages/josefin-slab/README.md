# @expo-google-fonts/josefin-slab

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/josefin-slab)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/josefin-slab)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/josefin-slab)

This package lets you use the [**Josefin Slab**](https://fonts.google.com/specimen/Josefin+Slab) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Josefin Slab

![Josefin Slab](./font-family.png)

This font family contains [14 styles](#-gallery).

- `JosefinSlab_100Thin`
- `JosefinSlab_200ExtraLight`
- `JosefinSlab_300Light`
- `JosefinSlab_400Regular`
- `JosefinSlab_500Medium`
- `JosefinSlab_600SemiBold`
- `JosefinSlab_700Bold`
- `JosefinSlab_100Thin_Italic`
- `JosefinSlab_200ExtraLight_Italic`
- `JosefinSlab_300Light_Italic`
- `JosefinSlab_400Regular_Italic`
- `JosefinSlab_500Medium_Italic`
- `JosefinSlab_600SemiBold_Italic`
- `JosefinSlab_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/josefin-slab expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/josefin-slab/useFonts';
import { JosefinSlab_100Thin } from '@expo-google-fonts/josefin-slab/100Thin';
import { JosefinSlab_200ExtraLight } from '@expo-google-fonts/josefin-slab/200ExtraLight';
import { JosefinSlab_300Light } from '@expo-google-fonts/josefin-slab/300Light';
import { JosefinSlab_400Regular } from '@expo-google-fonts/josefin-slab/400Regular';
import { JosefinSlab_500Medium } from '@expo-google-fonts/josefin-slab/500Medium';
import { JosefinSlab_600SemiBold } from '@expo-google-fonts/josefin-slab/600SemiBold';
import { JosefinSlab_700Bold } from '@expo-google-fonts/josefin-slab/700Bold';
import { JosefinSlab_100Thin_Italic } from '@expo-google-fonts/josefin-slab/100Thin_Italic';
import { JosefinSlab_200ExtraLight_Italic } from '@expo-google-fonts/josefin-slab/200ExtraLight_Italic';
import { JosefinSlab_300Light_Italic } from '@expo-google-fonts/josefin-slab/300Light_Italic';
import { JosefinSlab_400Regular_Italic } from '@expo-google-fonts/josefin-slab/400Regular_Italic';
import { JosefinSlab_500Medium_Italic } from '@expo-google-fonts/josefin-slab/500Medium_Italic';
import { JosefinSlab_600SemiBold_Italic } from '@expo-google-fonts/josefin-slab/600SemiBold_Italic';
import { JosefinSlab_700Bold_Italic } from '@expo-google-fonts/josefin-slab/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    JosefinSlab_100Thin, 
    JosefinSlab_200ExtraLight, 
    JosefinSlab_300Light, 
    JosefinSlab_400Regular, 
    JosefinSlab_500Medium, 
    JosefinSlab_600SemiBold, 
    JosefinSlab_700Bold, 
    JosefinSlab_100Thin_Italic, 
    JosefinSlab_200ExtraLight_Italic, 
    JosefinSlab_300Light_Italic, 
    JosefinSlab_400Regular_Italic, 
    JosefinSlab_500Medium_Italic, 
    JosefinSlab_600SemiBold_Italic, 
    JosefinSlab_700Bold_Italic
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
          fontFamily: "JosefinSlab_100Thin"
        }}>
          Josefin Slab Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_200ExtraLight"
        }}>
          Josefin Slab Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_300Light"
        }}>
          Josefin Slab Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_400Regular"
        }}>
          Josefin Slab Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_500Medium"
        }}>
          Josefin Slab Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_600SemiBold"
        }}>
          Josefin Slab Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_700Bold"
        }}>
          Josefin Slab Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_100Thin_Italic"
        }}>
          Josefin Slab Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_200ExtraLight_Italic"
        }}>
          Josefin Slab Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_300Light_Italic"
        }}>
          Josefin Slab Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_400Regular_Italic"
        }}>
          Josefin Slab Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_500Medium_Italic"
        }}>
          Josefin Slab Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_600SemiBold_Italic"
        }}>
          Josefin Slab Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "JosefinSlab_700Bold_Italic"
        }}>
          Josefin Slab Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![JosefinSlab_100Thin](./100Thin/JosefinSlab_100Thin.ttf.png)|![JosefinSlab_200ExtraLight](./200ExtraLight/JosefinSlab_200ExtraLight.ttf.png)|![JosefinSlab_300Light](./300Light/JosefinSlab_300Light.ttf.png)||
|![JosefinSlab_400Regular](./400Regular/JosefinSlab_400Regular.ttf.png)|![JosefinSlab_500Medium](./500Medium/JosefinSlab_500Medium.ttf.png)|![JosefinSlab_600SemiBold](./600SemiBold/JosefinSlab_600SemiBold.ttf.png)||
|![JosefinSlab_700Bold](./700Bold/JosefinSlab_700Bold.ttf.png)|![JosefinSlab_100Thin_Italic](./100Thin_Italic/JosefinSlab_100Thin_Italic.ttf.png)|![JosefinSlab_200ExtraLight_Italic](./200ExtraLight_Italic/JosefinSlab_200ExtraLight_Italic.ttf.png)||
|![JosefinSlab_300Light_Italic](./300Light_Italic/JosefinSlab_300Light_Italic.ttf.png)|![JosefinSlab_400Regular_Italic](./400Regular_Italic/JosefinSlab_400Regular_Italic.ttf.png)|![JosefinSlab_500Medium_Italic](./500Medium_Italic/JosefinSlab_500Medium_Italic.ttf.png)||
|![JosefinSlab_600SemiBold_Italic](./600SemiBold_Italic/JosefinSlab_600SemiBold_Italic.ttf.png)|![JosefinSlab_700Bold_Italic](./700Bold_Italic/JosefinSlab_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/josefin-slab` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Josefin Slab page on Google Fonts](https://fonts.google.com/specimen/Josefin+Slab) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Josefin Slab on Google Fonts](https://fonts.google.com/specimen/Josefin+Slab)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/josefin-slab)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/josefin-slab)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
