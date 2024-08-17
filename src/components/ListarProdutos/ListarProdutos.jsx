export default function ListarProdutos({ listaProdutos }) {
    return (
        <div className="bloco-produtos">
            {listaProdutos.map((p) => (
                <div key={p.id}>
                    <img className='fotoprodutos' src={p.imagem} alt={p.item} />
                    <p>{p.item}</p>
                    <p>{p.preco}</p>
                    <button>ADICIONAR</button>
                </div>
            ))}
        </div>
    )
}