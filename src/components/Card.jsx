import pancs from '../data/database'

const Card = () => {
    return(
        <>
            {pancs.map((pancs) =>
            <div>
                <h2>{pancs.nome}</h2>
                <p>{pancs.descricao}</p>
                <img src={pancs.imagem} alt={pancs.nome} />
            </div>
            )}
        </>
    )
}
export default Card