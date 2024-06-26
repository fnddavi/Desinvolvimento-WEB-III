import React, { useState } from 'react';
import styled from 'styled-components';
import { usePostContext } from '../contexts/Contexto';

const SearchForm = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [page, setPage] = useState(1);
    const { getPosts, error } = usePostContext();

    const handleSearch = () => {
        if (fromDate && toDate) {
            getPosts(page, Number(fromDate), Number(toDate));
        }
    };

    return (
        <SearchFormContainer>
            <Row>
                <Label>Início</Label>
                <Input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                />
                <Label>Fim</Label>
                <Input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                />
                <Label>Página</Label>
                <Input
                    type="number"
                    value={page}
                    onChange={(e) => setPage(Number(e.target.value))}
                />
                <Button onClick={handleSearch}>Buscar</Button>
            </Row>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </SearchFormContainer>
    );

};

export default SearchForm;


const SearchFormContainer = styled.div`
    padding: 20px;
    border-radius: 10px;
    background-color: #707070;
    width: 850px;
    margin: 0 auto;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Label = styled.label`
    margin-right: 10px;
    padding: 8px;
`;

const Input = styled.input`
    flex: 1;
    border-radius: 5px;
    padding: 8px;
    margin-right: 10px;
`;

const Button = styled.button`
    border-radius: 5px;
    padding: 8px 16px;
    background-color: #2b2b2b;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;