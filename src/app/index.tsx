import { View } from 'react-native';
import { HomeHeader } from '@/components/HomeHeader';
import { List } from '@/components/List';
import { Target } from '@/components/Target';

const summary = {
    total: 'R$2.680,00',
    input: {
        label: 'Entradas',
        value: 'R$ 6,184.90',
    },
    output: {
        label: 'Saídas',
        value: '-R$ 883.65',
    },
};

const targets = [
    {
        id: '1',
        name: 'Comprar um carro',
        percentage: '50%',
        current: '10,000.00',
        target: '20,000.00',
    },

    {
        id: '2',
        name: 'Comprar uma casa',
        percentage: '50%',
        current: '450,000.00',
        target: '900,000.00',
    },

    {
        id: '3',
        name: 'Fazer uma viagem',
        percentage: '50%',
        current: '1,500.00',
        target: '3,000.00',
    },
];

export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader data={summary} />
            <List
                title="Metas"
                data={targets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Target data={item} />}
                emptyMessage="Nenhuma meta. Toque em nova meta para criar."
                containerStyle={{ paddingHorizontal: 24 }}
            />
        </View>
    );
}
