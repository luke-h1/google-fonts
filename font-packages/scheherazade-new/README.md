# @expo-google-fonts/scheherazade-new

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/scheherazade-new)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/scheherazade-new)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/scheherazade-new)

This package lets you use the [**Scheherazade New**](https://fonts.google.com/specimen/Scheherazade+New) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Scheherazade New

![Scheherazade New](./font-family.png)

This font family contains [4 styles](#-gallery).

- `ScheherazadeNew_400Regular`
- `ScheherazadeNew_500Medium`
- `ScheherazadeNew_600SemiBold`
- `ScheherazadeNew_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/scheherazade-new expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/scheherazade-new/useFonts';
import { ScheherazadeNew_400Regular } from '@expo-google-fonts/scheherazade-new/400Regular';
import { ScheherazadeNew_500Medium } from '@expo-google-fonts/scheherazade-new/500Medium';
import { ScheherazadeNew_600SemiBold } from '@expo-google-fonts/scheherazade-new/600SemiBold';
import { ScheherazadeNew_700Bold } from '@expo-google-fonts/scheherazade-new/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    ScheherazadeNew_400Regular, 
    ScheherazadeNew_500Medium, 
    ScheherazadeNew_600SemiBold, 
    ScheherazadeNew_700Bold
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
          fontFamily: "ScheherazadeNew_400Regular"
        }}>
          Scheherazade New Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScheherazadeNew_500Medium"
        }}>
          Scheherazade New Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScheherazadeNew_600SemiBold"
        }}>
          Scheherazade New Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "ScheherazadeNew_700Bold"
        }}>
          Scheherazade New Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![ScheherazadeNew_400Regular](./400Regular/ScheherazadeNew_400Regular.ttf.png)|![ScheherazadeNew_500Medium](./500Medium/ScheherazadeNew_500Medium.ttf.png)|![ScheherazadeNew_600SemiBold](./600SemiBold/ScheherazadeNew_600SemiBold.ttf.png)||
|![ScheherazadeNew_700Bold](./700Bold/ScheherazadeNew_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/scheherazade-new` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Scheherazade New page on Google Fonts](https://fonts.google.com/specimen/Scheherazade+New) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Scheherazade New on Google Fonts](https://fonts.google.com/specimen/Scheherazade+New)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/scheherazade-new)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/scheherazade-new)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
