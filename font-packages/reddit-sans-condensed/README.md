# @expo-google-fonts/reddit-sans-condensed

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/reddit-sans-condensed)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/reddit-sans-condensed)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/reddit-sans-condensed)

This package lets you use the [**Reddit Sans Condensed**](https://fonts.google.com/specimen/Reddit+Sans+Condensed) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Reddit Sans Condensed

![Reddit Sans Condensed](./font-family.png)

This font family contains [8 styles](#-gallery).

- `RedditSansCondensed_200ExtraLight`
- `RedditSansCondensed_300Light`
- `RedditSansCondensed_400Regular`
- `RedditSansCondensed_500Medium`
- `RedditSansCondensed_600SemiBold`
- `RedditSansCondensed_700Bold`
- `RedditSansCondensed_800ExtraBold`
- `RedditSansCondensed_900Black`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/reddit-sans-condensed expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/reddit-sans-condensed/useFonts';
import { RedditSansCondensed_200ExtraLight } from '@expo-google-fonts/reddit-sans-condensed/200ExtraLight';
import { RedditSansCondensed_300Light } from '@expo-google-fonts/reddit-sans-condensed/300Light';
import { RedditSansCondensed_400Regular } from '@expo-google-fonts/reddit-sans-condensed/400Regular';
import { RedditSansCondensed_500Medium } from '@expo-google-fonts/reddit-sans-condensed/500Medium';
import { RedditSansCondensed_600SemiBold } from '@expo-google-fonts/reddit-sans-condensed/600SemiBold';
import { RedditSansCondensed_700Bold } from '@expo-google-fonts/reddit-sans-condensed/700Bold';
import { RedditSansCondensed_800ExtraBold } from '@expo-google-fonts/reddit-sans-condensed/800ExtraBold';
import { RedditSansCondensed_900Black } from '@expo-google-fonts/reddit-sans-condensed/900Black';

export default () => {

  let [fontsLoaded] = useFonts({
    RedditSansCondensed_200ExtraLight, 
    RedditSansCondensed_300Light, 
    RedditSansCondensed_400Regular, 
    RedditSansCondensed_500Medium, 
    RedditSansCondensed_600SemiBold, 
    RedditSansCondensed_700Bold, 
    RedditSansCondensed_800ExtraBold, 
    RedditSansCondensed_900Black
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
          fontFamily: "RedditSansCondensed_200ExtraLight"
        }}>
          Reddit Sans Condensed Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedditSansCondensed_300Light"
        }}>
          Reddit Sans Condensed Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedditSansCondensed_400Regular"
        }}>
          Reddit Sans Condensed Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedditSansCondensed_500Medium"
        }}>
          Reddit Sans Condensed Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedditSansCondensed_600SemiBold"
        }}>
          Reddit Sans Condensed Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedditSansCondensed_700Bold"
        }}>
          Reddit Sans Condensed Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedditSansCondensed_800ExtraBold"
        }}>
          Reddit Sans Condensed Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RedditSansCondensed_900Black"
        }}>
          Reddit Sans Condensed Black
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![RedditSansCondensed_200ExtraLight](./200ExtraLight/RedditSansCondensed_200ExtraLight.ttf.png)|![RedditSansCondensed_300Light](./300Light/RedditSansCondensed_300Light.ttf.png)|![RedditSansCondensed_400Regular](./400Regular/RedditSansCondensed_400Regular.ttf.png)||
|![RedditSansCondensed_500Medium](./500Medium/RedditSansCondensed_500Medium.ttf.png)|![RedditSansCondensed_600SemiBold](./600SemiBold/RedditSansCondensed_600SemiBold.ttf.png)|![RedditSansCondensed_700Bold](./700Bold/RedditSansCondensed_700Bold.ttf.png)||
|![RedditSansCondensed_800ExtraBold](./800ExtraBold/RedditSansCondensed_800ExtraBold.ttf.png)|![RedditSansCondensed_900Black](./900Black/RedditSansCondensed_900Black.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/reddit-sans-condensed` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Reddit Sans Condensed page on Google Fonts](https://fonts.google.com/specimen/Reddit+Sans+Condensed) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Reddit Sans Condensed on Google Fonts](https://fonts.google.com/specimen/Reddit+Sans+Condensed)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/reddit-sans-condensed)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/reddit-sans-condensed)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
