interface IDcard {
    id: number,
    paragraph: string,
    details: string,
}

export const Card = ({ id, paragraph, details }: IDcard) => {
    return (
        <div>
            <h1>card {id}</h1>
            <p>{paragraph}</p>
            <p>{details}</p>
        </div>
    )
}