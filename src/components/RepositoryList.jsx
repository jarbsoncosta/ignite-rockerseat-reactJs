const repository = "unform2"

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <li>
                    <strong>{repository}</strong>
                    <p>Forms is React</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms is React</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
                <li>
                    <strong>unform</strong>
                    <p>Forms is React</p>
                    <a href="">
                        Acessar repositório
                    </a>
                </li>
            </ul>

        </section>
    )
}