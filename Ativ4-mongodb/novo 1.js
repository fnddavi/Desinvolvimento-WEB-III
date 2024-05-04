db.estacoes.find(
{},
{ 
	_id: 0,
	uf: 1,
	estacao:1,
	latitude:1,
	longitude:1
},
{
	sort: {estacao:1}
});
