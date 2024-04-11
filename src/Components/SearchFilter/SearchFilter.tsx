import * as styled from './searchFilter.styled'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import SearchInputModel from '../../Models/SearchInputModel';
import searchInputService from '../../Services/SearchInputServices';
import { ClientModel } from '../../Models/ClientModel';

interface Props {
    searchResults: (client: ClientModel[]) => void
}

export const SearchFilter = ({ searchResults }: Props) => {
    const { register, handleSubmit, watch } = useForm<SearchInputModel>({ mode: 'onChange' });

    const fullName = watch('fullName');
    const city = watch('city');
    const street = watch('street');

    const handleInputChange = async () => {
        try {
            let filteredClients;
            const searchFields = { fullName: fullName, city: city, street: street };
            const clients = await searchInputService.getClientsBySearch()
            if (clients) {
                filteredClients = clients.filter(client => {
                    return (
                        (!searchFields.fullName || client.fullName.startsWith(searchFields.fullName)) &&
                        (!searchFields.city || client.city.startsWith(searchFields.city)) &&
                        (!searchFields.street || client.street.startsWith(searchFields.street))
                    );
                });
            }
            searchResults(filteredClients);
        } catch (error: any) {
            console.log(error.message)
        }

    }

    const onSubmit = handleSubmit(handleInputChange);

    useEffect(() => {
        onSubmit();
        // eslint-disable-next-line
    }, [fullName, city, street]);

    return (
        <div>
            <styled.searchWrapper dir='rtl'>
                <styled.TextAreaWrapper>

                    <styled.TextArea
                        dir='rtl'
                        label="חיפוש לפי שם"
                        type="search"
                        variant="filled"
                        {...register('fullName')}
                    />
                </styled.TextAreaWrapper>
                <styled.TextAreaWrapper>
                    <styled.TextArea
                        dir='rtl'
                        label="חיפוש לפי עיר"
                        type="search"
                        variant="filled"
                        {...register('city')}
                    />
                </styled.TextAreaWrapper>
                <styled.TextAreaWrapper>
                    <styled.TextArea
                        dir='rtl'
                        label="חיפוש לפי רחוב"
                        type="search"
                        variant="filled"
                        {...register('street')}
                    />
                </styled.TextAreaWrapper>
            </styled.searchWrapper>
        </div>
    )
}