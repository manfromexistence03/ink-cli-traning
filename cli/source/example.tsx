import React
    from 'react';
import { render, Text, type TextProps } from 'ink';
import {
    TextInput,
    ThemeProvider,
    defaultTheme,
    extendTheme,
    useComponentTheme,
    type ComponentTheme,
} from '@inkjs/ui';

const customLabelTheme = {
    styles: {
        label: (): TextProps => ({
            color: 'green',
        }),
    },
} satisfies ComponentTheme;

type CustomLabelTheme = typeof customLabelTheme;

const customTheme = extendTheme(defaultTheme, {
    components: {
        CustomLabel: customLabelTheme,
    },
});

function CustomLabel() {
    const { styles } = useComponentTheme<CustomLabelTheme>('CustomLabel');

    return <Text {...styles.label()}>Hello world</Text>;
}

function Example() {
    return (
        <TextInput
            placeholder="Enter your name..."
            onSubmit={name => {
                // `name` contains user input
            }}
        />
    );
}

render(<Example />);