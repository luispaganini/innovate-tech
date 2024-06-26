import React from 'react'
import SearchBarComponent from '../SearchBarComponent'
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { FilterIconContainer, SearchAndFilterContainer } from './styles';

interface SearchAndFilterComponentProps {
    setQuery: (query: string) => void;
    query: string;
    onClickFilter: () => void;
}

export default function SearchAndFilterComponent(props: SearchAndFilterComponentProps) {
    const colorScheme = useColorScheme();
    return (
        <SearchAndFilterContainer>
            <SearchBarComponent setQuery={props.setQuery} query={props.query} testID='search-bar'/>
            <FilterIconContainer>
                <MaterialIcons testID='filter-icon' name="filter-list-alt" size={30} color={colorScheme == 'light' ? Colors.light.text : Colors.dark.text} onPress={props.onClickFilter} />
            </FilterIconContainer>
        </SearchAndFilterContainer>
    )
}