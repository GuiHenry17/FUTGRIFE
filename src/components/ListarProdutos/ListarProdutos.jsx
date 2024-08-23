export default function ListarProdutos({ listaProdutos }) {

    return (
        <div className="bloco-produtos">
            {listaProdutos.map((p) => (
                <div key={p.id} id='produtoos'>
                    <img className='fotoprodutos' src={p.imagem} alt={p.item} />
                    <p>{p.item}</p>
                    <div className='precos'>
                        {p.oferta == true ? (
                            <>
                                <span className="pdesconto">{p.precodesconto}</span>
                                <span className="pnormal">{p.preco}</span>
                            </>
                        ) : (
                            <span className="pnormal" style={{ color: "black", textDecoration: 'none', fontWeight: '540' }}>{p.preco}</span>
                        )}
                    </div>
                    <button className="botaoadd">ADICIONAR</button>
                </div>
            ))}
        </div>
    )

}