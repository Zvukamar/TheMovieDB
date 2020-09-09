import React from 'react';
import { FlatList } from 'react-native';

import OText from '../../components/OText';
import strings from '../../utilities/strings';
import OListItem from '../../components/OListItem';

const OList = ({ data, ...props }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <OListItem item={item} />}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={() => (
                <OText category='h5' status='warning'>
                    {strings.favorites_list_empty}
                </OText>
            )}
            {...props}
        />
    )
}

export default OList;