# @expo-google-fonts/edu-tas-beginner

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/edu-tas-beginner)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/edu-tas-beginner)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/edu-tas-beginner)

This package lets you use the [**Edu TAS Beginner**](https://fonts.google.com/specimen/Edu+TAS+Beginner) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Edu TAS Beginner

![Edu TAS Beginner](./font-family.png)

This font family contains [4 styles](#-gallery).

- `EduTASBeginner_400Regular`
- `EduTASBeginner_500Medium`
- `EduTASBeginner_600SemiBold`
- `EduTASBeginner_700Bold`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/edu-tas-beginner expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/edu-tas-beginner/useFonts';
import { EduTASBeginner_400Regular } from '@expo-google-fonts/edu-tas-beginner/400Regular';
import { EduTASBeginner_500Medium } from '@expo-google-fonts/edu-tas-beginner/500Medium';
import { EduTASBeginner_600SemiBold } from '@expo-google-fonts/edu-tas-beginner/600SemiBold';
import { EduTASBeginner_700Bold } from '@expo-google-fonts/edu-tas-beginner/700Bold';

export default () => {

  let [fontsLoaded] = useFonts({
    EduTASBeginner_400Regular, 
    EduTASBeginner_500Medium, 
    EduTASBeginner_600SemiBold, 
    EduTASBeginner_700Bold
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
          fontFamily: "EduTASBeginner_400Regular"
        }}>
          Edu TAS Beginner Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EduTASBeginner_500Medium"
        }}>
          Edu TAS Beginner Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EduTASBeginner_600SemiBold"
        }}>
          Edu TAS Beginner Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "EduTASBeginner_700Bold"
        }}>
          Edu TAS Beginner Bold
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![EduTASBeginner_400Regular](./400Regular/EduTASBeginner_400Regular.ttf.png)|![EduTASBeginner_500Medium](./500Medium/EduTASBeginner_500Medium.ttf.png)|![EduTASBeginner_600SemiBold](./600SemiBold/EduTASBeginner_600SemiBold.ttf.png)||
|![EduTASBeginner_700Bold](./700Bold/EduTASBeginner_700Bold.ttf.png)||||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/edu-tas-beginner` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Edu TAS Beginner page on Google Fonts](https://fonts.google.com/specimen/Edu+TAS+Beginner) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Edu TAS Beginner on Google Fonts](https://fonts.google.com/specimen/Edu+TAS+Beginner)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/edu-tas-beginner)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/edu-tas-beginner)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
