# @expo-google-fonts/teachers

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/teachers)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/teachers)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/teachers)

This package lets you use the [**Teachers**](https://fonts.google.com/specimen/Teachers) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Teachers

![Teachers](./font-family.png)

This font family contains [10 styles](#-gallery).

- `Teachers_400Regular`
- `Teachers_500Medium`
- `Teachers_600SemiBold`
- `Teachers_700Bold`
- `Teachers_800ExtraBold`
- `Teachers_400Regular_Italic`
- `Teachers_500Medium_Italic`
- `Teachers_600SemiBold_Italic`
- `Teachers_700Bold_Italic`
- `Teachers_800ExtraBold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/teachers expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/teachers/useFonts';
import { Teachers_400Regular } from '@expo-google-fonts/teachers/400Regular';
import { Teachers_500Medium } from '@expo-google-fonts/teachers/500Medium';
import { Teachers_600SemiBold } from '@expo-google-fonts/teachers/600SemiBold';
import { Teachers_700Bold } from '@expo-google-fonts/teachers/700Bold';
import { Teachers_800ExtraBold } from '@expo-google-fonts/teachers/800ExtraBold';
import { Teachers_400Regular_Italic } from '@expo-google-fonts/teachers/400Regular_Italic';
import { Teachers_500Medium_Italic } from '@expo-google-fonts/teachers/500Medium_Italic';
import { Teachers_600SemiBold_Italic } from '@expo-google-fonts/teachers/600SemiBold_Italic';
import { Teachers_700Bold_Italic } from '@expo-google-fonts/teachers/700Bold_Italic';
import { Teachers_800ExtraBold_Italic } from '@expo-google-fonts/teachers/800ExtraBold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    Teachers_400Regular, 
    Teachers_500Medium, 
    Teachers_600SemiBold, 
    Teachers_700Bold, 
    Teachers_800ExtraBold, 
    Teachers_400Regular_Italic, 
    Teachers_500Medium_Italic, 
    Teachers_600SemiBold_Italic, 
    Teachers_700Bold_Italic, 
    Teachers_800ExtraBold_Italic
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
          fontFamily: "Teachers_400Regular"
        }}>
          Teachers Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Teachers_500Medium"
        }}>
          Teachers Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Teachers_600SemiBold"
        }}>
          Teachers Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Teachers_700Bold"
        }}>
          Teachers Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Teachers_800ExtraBold"
        }}>
          Teachers Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Teachers_400Regular_Italic"
        }}>
          Teachers Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Teachers_500Medium_Italic"
        }}>
          Teachers Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Teachers_600SemiBold_Italic"
        }}>
          Teachers Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Teachers_700Bold_Italic"
        }}>
          Teachers Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "Teachers_800ExtraBold_Italic"
        }}>
          Teachers Extra Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![Teachers_400Regular](./400Regular/Teachers_400Regular.ttf.png)|![Teachers_500Medium](./500Medium/Teachers_500Medium.ttf.png)|![Teachers_600SemiBold](./600SemiBold/Teachers_600SemiBold.ttf.png)||
|![Teachers_700Bold](./700Bold/Teachers_700Bold.ttf.png)|![Teachers_800ExtraBold](./800ExtraBold/Teachers_800ExtraBold.ttf.png)|![Teachers_400Regular_Italic](./400Regular_Italic/Teachers_400Regular_Italic.ttf.png)||
|![Teachers_500Medium_Italic](./500Medium_Italic/Teachers_500Medium_Italic.ttf.png)|![Teachers_600SemiBold_Italic](./600SemiBold_Italic/Teachers_600SemiBold_Italic.ttf.png)|![Teachers_700Bold_Italic](./700Bold_Italic/Teachers_700Bold_Italic.ttf.png)||
|![Teachers_800ExtraBold_Italic](./800ExtraBold_Italic/Teachers_800ExtraBold_Italic.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/teachers` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Teachers page on Google Fonts](https://fonts.google.com/specimen/Teachers) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Teachers on Google Fonts](https://fonts.google.com/specimen/Teachers)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/teachers)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/teachers)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
