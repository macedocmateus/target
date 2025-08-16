import {
    FlatList,
    type FlatListProps,
    type StyleProp,
    Text,
    View,
    type ViewStyle,
} from 'react-native';
import { colors } from '@/theme';
import { Separator } from '../Separator';
import { styles } from './styles';

type Props<T> = FlatListProps<T> & {
    title: string;
    emptyMessage?: string;
    containerStyle?: StyleProp<ViewStyle>;
};

export function List<T>({
    containerStyle,
    title,
    emptyMessage,
    data,
    renderItem,
    ...rest
}: Props<T>) {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={() => (
                    <Separator color={colors.gray[200]} />
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.empty}>{emptyMessage}</Text>
                )}
                {...rest}
            />
        </View>
    );
}
