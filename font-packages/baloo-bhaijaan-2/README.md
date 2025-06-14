# @expo-google-fonts/baloo-bhaijaan-2

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/baloo-bhaijaan-2)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/baloo-bhaijaan-2)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/baloo-bhaijaan-2)

This package lets you use the [**Baloo Bhaijaan 2**](https://fonts.google.com/specimen/Baloo+Bhaijaan+2) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Baloo Bhaijaan 2

![Baloo Bhaijaan 2](./font-family.png)

This font family contains [5 styles](#-gallery).

- `BalooBhaijaan2_400Regular`
- `BalooBhaijaan2_500Medium`
- `BalooBhaijaan2_600SemiBold`
- `BalooBhaijaan2_700Bold`
- `BalooBhaijaan2_800ExtraBold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/baloo-bhaijaan-2 expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/baloo-bhaijaan-2/useFonts';
import { BalooBhaijaan2_400Regular } from '@expo-google-fonts/baloo-bhaijaan-2/400Regular';
import { BalooBhaijaan2_500Medium } from '@expo-google-fonts/baloo-bhaijaan-2/500Medium';
import { BalooBhaijaan2_600SemiBold } from '@expo-google-fonts/baloo-bhaijaan-2/600SemiBold';
import { BalooBhaijaan2_700Bold } from '@expo-google-fonts/baloo-bhaijaan-2/700Bold';
import { BalooBhaijaan2_800ExtraBold } from '@expo-google-fonts/baloo-bhaijaan-2/800ExtraBold';

export default () => {

  let [fontsLoaded] = useFonts({
    BalooBhaijaan2_400Regular, 
    BalooBhaijaan2_500Medium, 
    BalooBhaijaan2_600SemiBold, 
    BalooBhaijaan2_700Bold, 
    BalooBhaijaan2_800ExtraBold
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
          fontFamily: "BalooBhaijaan2_400Regular"
        }}>
          Baloo Bhaijaan 2 Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BalooBhaijaan2_500Medium"
        }}>
          Baloo Bhaijaan 2 Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BalooBhaijaan2_600SemiBold"
        }}>
          Baloo Bhaijaan 2 Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BalooBhaijaan2_700Bold"
        }}>
          Baloo Bhaijaan 2 Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "BalooBhaijaan2_800ExtraBold"
        }}>
          Baloo Bhaijaan 2 Extra Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![BalooBhaijaan2_400Regular](./400Regular/BalooBhaijaan2_400Regular.ttf.png)|![BalooBhaijaan2_500Medium](./500Medium/BalooBhaijaan2_500Medium.ttf.png)|![BalooBhaijaan2_600SemiBold](./600SemiBold/BalooBhaijaan2_600SemiBold.ttf.png)||
|![BalooBhaijaan2_700Bold](./700Bold/BalooBhaijaan2_700Bold.ttf.png)|![BalooBhaijaan2_800ExtraBold](./800ExtraBold/BalooBhaijaan2_800ExtraBold.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/baloo-bhaijaan-2` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Baloo Bhaijaan 2 page on Google Fonts](https://fonts.google.com/specimen/Baloo+Bhaijaan+2) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Baloo Bhaijaan 2 on Google Fonts](https://fonts.google.com/specimen/Baloo+Bhaijaan+2)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/baloo-bhaijaan-2)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/baloo-bhaijaan-2)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
