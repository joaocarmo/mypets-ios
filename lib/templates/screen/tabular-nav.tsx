import { Pressable, StyleSheet, View } from 'react-native'
import type { ViewProps } from 'react-native'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import { UIText } from '@ui-elements'
import { useTheme } from '@hooks'
import type { Tab } from '@templates/types'

export type ScreenTabularNavProps = {
  tabs?: Tab[]
  style?: ViewProps['style']
}

const ScreenTabularNav = ({ tabs, style }: ScreenTabularNavProps) => {
  const navigation = useNavigation()
  const { createStyles } = useTheme()

  const styles = createStyles((theme, typography) => ({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    },
    tab: {
      flex: 1,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.text,
    },
    text: {
      fontSize: typography.fontSize.small,
      fontWeight: typography.fontWeight.bolder,
    },
  }))

  const navIdx = useNavigationState((state) => state?.index)

  return (
    <View style={StyleSheet.compose(styles.container, style)}>
      {tabs &&
        tabs.map(({ key, name, title }, idx) => (
          <Pressable
            key={key}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore FIXME: https://reactnavigation.org/docs/typescript/
            onPress={() => navigation.navigate(name)}
            style={
              navIdx === idx
                ? StyleSheet.compose(styles.tab, styles.activeTab)
                : styles.tab
            }
          >
            <UIText noPadding style={styles.text}>
              {title}
            </UIText>
          </Pressable>
        ))}
    </View>
  )
}

ScreenTabularNav.defaultProps = {
  tabs: [],
  style: null,
}

export default ScreenTabularNav
