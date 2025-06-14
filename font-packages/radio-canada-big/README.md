# @expo-google-fonts/radio-canada-big

![npm version](https://flat.badgen.net/npm/v/@expo-google-fonts/radio-canada-big)
![license](https://flat.badgen.net/github/license/expo/google-fonts)
![publish size](https://flat.badgen.net/packagephobia/install/@expo-google-fonts/radio-canada-big)
![publish size](https://flat.badgen.net/packagephobia/publish/@expo-google-fonts/radio-canada-big)

This package lets you use the [**Radio Canada Big**](https://fonts.google.com/specimen/Radio+Canada+Big) font family from [Google Fonts](https://fonts.google.com/) in your Expo app.

## Radio Canada Big

![Radio Canada Big](./font-family.png)

This font family contains [8 styles](#-gallery).

- `RadioCanadaBig_400Regular`
- `RadioCanadaBig_500Medium`
- `RadioCanadaBig_600SemiBold`
- `RadioCanadaBig_700Bold`
- `RadioCanadaBig_400Regular_Italic`
- `RadioCanadaBig_500Medium_Italic`
- `RadioCanadaBig_600SemiBold_Italic`
- `RadioCanadaBig_700Bold_Italic`

## Usage

Run this command from the shell in the root directory of your Expo project to add the font family package to your project

```sh
npx expo install @expo-google-fonts/radio-canada-big expo-font
```

Now add code like this to your project

```js
import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/radio-canada-big/useFonts';
import { RadioCanadaBig_400Regular } from '@expo-google-fonts/radio-canada-big/400Regular';
import { RadioCanadaBig_500Medium } from '@expo-google-fonts/radio-canada-big/500Medium';
import { RadioCanadaBig_600SemiBold } from '@expo-google-fonts/radio-canada-big/600SemiBold';
import { RadioCanadaBig_700Bold } from '@expo-google-fonts/radio-canada-big/700Bold';
import { RadioCanadaBig_400Regular_Italic } from '@expo-google-fonts/radio-canada-big/400Regular_Italic';
import { RadioCanadaBig_500Medium_Italic } from '@expo-google-fonts/radio-canada-big/500Medium_Italic';
import { RadioCanadaBig_600SemiBold_Italic } from '@expo-google-fonts/radio-canada-big/600SemiBold_Italic';
import { RadioCanadaBig_700Bold_Italic } from '@expo-google-fonts/radio-canada-big/700Bold_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    RadioCanadaBig_400Regular, 
    RadioCanadaBig_500Medium, 
    RadioCanadaBig_600SemiBold, 
    RadioCanadaBig_700Bold, 
    RadioCanadaBig_400Regular_Italic, 
    RadioCanadaBig_500Medium_Italic, 
    RadioCanadaBig_600SemiBold_Italic, 
    RadioCanadaBig_700Bold_Italic
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
          fontFamily: "RadioCanadaBig_400Regular"
        }}>
          Radio Canada Big Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanadaBig_500Medium"
        }}>
          Radio Canada Big Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanadaBig_600SemiBold"
        }}>
          Radio Canada Big Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanadaBig_700Bold"
        }}>
          Radio Canada Big Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanadaBig_400Regular_Italic"
        }}>
          Radio Canada Big Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanadaBig_500Medium_Italic"
        }}>
          Radio Canada Big Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanadaBig_600SemiBold_Italic"
        }}>
          Radio Canada Big Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "RadioCanadaBig_700Bold_Italic"
        }}>
          Radio Canada Big Bold Italic
        </Text>
      </View>
    );
  }
};
```

## 🔡 Gallery


||||
|-|-|-|
|![RadioCanadaBig_400Regular](./400Regular/RadioCanadaBig_400Regular.ttf.png)|![RadioCanadaBig_500Medium](./500Medium/RadioCanadaBig_500Medium.ttf.png)|![RadioCanadaBig_600SemiBold](./600SemiBold/RadioCanadaBig_600SemiBold.ttf.png)||
|![RadioCanadaBig_700Bold](./700Bold/RadioCanadaBig_700Bold.ttf.png)|![RadioCanadaBig_400Regular_Italic](./400Regular_Italic/RadioCanadaBig_400Regular_Italic.ttf.png)|![RadioCanadaBig_500Medium_Italic](./500Medium_Italic/RadioCanadaBig_500Medium_Italic.ttf.png)||
|![RadioCanadaBig_600SemiBold_Italic](./600SemiBold_Italic/RadioCanadaBig_600SemiBold_Italic.ttf.png)|![RadioCanadaBig_700Bold_Italic](./700Bold_Italic/RadioCanadaBig_700Bold_Italic.ttf.png)|||


## 👩‍💻 Use During Development

If you are trying out lots of different fonts, you can try using the [`@expo-google-fonts/dev` package](https://github.com/expo/google-fonts/tree/master/font-packages/dev#readme).

You can import _any_ font style from any Expo Google Fonts package from it. It will load the fonts over the network at runtime instead of adding the asset as a file to your project, so it may take longer for your app to get to interactivity at startup, but it is extremely convenient for playing around with any style that you want.


## 📖 License

The `@expo-google-fonts/radio-canada-big` package and its code are released under the MIT license.

All the fonts in the Google Fonts catalog are free and open source.

Check the [Radio Canada Big page on Google Fonts](https://fonts.google.com/specimen/Radio+Canada+Big) for the specific license of this font family.

You can use these fonts freely in your products & projects - print or digital, commercial or otherwise. However, you can't sell the fonts on their own. This isn't legal advice, please consider consulting a lawyer and see the full license for all details.

## 🔗 Links

- [Radio Canada Big on Google Fonts](https://fonts.google.com/specimen/Radio+Canada+Big)
- [Google Fonts](https://fonts.google.com/)
- [This package on npm](https://www.npmjs.com/package/@expo-google-fonts/radio-canada-big)
- [This package on GitHub](https://github.com/expo/google-fonts/tree/master/font-packages/radio-canada-big)
- [The Expo Google Fonts project on GitHub](https://github.com/expo/google-fonts)
- [`@expo-google-fonts/dev` Devlopment Package](https://github.com/expo/google-fonts/tree/master/font-packages/dev)

## 🤝 Contributing

Contributions are very welcome! This entire directory, including what you are reading now, was generated from code. Instead of submitting PRs to this directly, please make contributions to [the generator](https://github.com/expo/google-fonts/tree/master/packages/generator) instead.
